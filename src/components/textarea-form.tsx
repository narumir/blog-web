import {
  ChangeEvent,
  useState,
} from "react";

type Props = {
  className: string,
  placeholder?: string,
  value: string,
  onChange: (value: string) => void,
};
export function TextareaForm({ className, placeholder, value, onChange }: Props) {
  const [text, setText] = useState<string>(value);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    onChange(value);
  };
  return (
    <textarea
      placeholder={placeholder}
      className={className}
      autoCapitalize="sentences"
      autoComplete="on"
      autoCorrect="n"
      maxLength={160}
      spellCheck
      dir="auto"
      value={text}
      onChange={handleChange}
    />
  );
}
