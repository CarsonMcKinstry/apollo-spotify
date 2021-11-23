export const omitNil = (obj: Record<string, any>) => {
  const out: typeof obj = {};

  for (const key in obj) {
    const value = obj[key];

    if (value != null) {
      out[key] = value;
    }
  }

  return out;
};
