type FormErrorMessageProps = {
  messages?: string[],
}
export function FormErrorMessage({ messages }: FormErrorMessageProps) {

  if (messages == null) {
    return;
  }
  return (
    <p
      className="dark:text-red-400 text-red-600 text-sm mt-1"
    >
      {messages[0] ?? ""}
    </p>
  );
}
