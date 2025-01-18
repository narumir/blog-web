import {
  useDarkMode,
} from "~/contexts";

export function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      type="button"
      className="w-10 h-10 inline-flex items-center justify-center focus-visible:outline-none hover:bg-[#E5E7EB] dark:hover:bg-[#27272a]"
      onClick={toggleDarkMode}
    >
      <img
        alt="toggle theme"
        src={isDarkMode ? "/dark.svg" : "/light.svg"}
      />
    </button>
  );
}
