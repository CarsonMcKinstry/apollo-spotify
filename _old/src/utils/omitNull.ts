export const omitNull = <T>(object: T) => {
  return Object.fromEntries(
    Object.entries(object).filter(([, value]) => value != null)
  );
};
