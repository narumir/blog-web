import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren
} from "react";
import {
  themeCookie,
} from "~/theme-cookie";

type DarkModeContextState = {
  isDarkMode: boolean,
  toggleDarkMode: () => void,
};

const DarkModeContext = createContext<DarkModeContextState>({
  isDarkMode: false,
  toggleDarkMode() { },
});

type DarkModeProviderProps = {
  initialMode: boolean,
};
export function DarkModeProvider({ children, initialMode }: PropsWithChildren<DarkModeProviderProps>) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialMode);
  const toggleDarkMode = async () => {
    setIsDarkMode((prev) => !prev);
    const newTheme = !isDarkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.cookie = await themeCookie.serialize(newTheme);
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
    document.body.style.colorScheme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
