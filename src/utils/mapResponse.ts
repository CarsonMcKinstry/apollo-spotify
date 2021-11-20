export const mapResponse = <TResponse extends {}, TResult extends {}>(
  apiResponse: TResponse,
  keyMap: [keyof TResponse, keyof TResult][]
): TResult => {
  const mapping = keyMap.map(([responseKey, resultKey]) => [
    resultKey,
    apiResponse[responseKey],
  ]);

  const mappedKeys = keyMap.map(([key]) => key);

  const leftovers = Object.entries(apiResponse).filter(
    ([key]) => !mappedKeys.includes(key as keyof TResponse)
  );

  return Object.fromEntries([...mapping, ...leftovers]);
};
