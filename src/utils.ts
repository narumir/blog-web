export const cn = (...args: string[]) => {
  return args
    .map(val => val.trim())
    .filter(val => val.length > 0)
    .join(" ");
};
