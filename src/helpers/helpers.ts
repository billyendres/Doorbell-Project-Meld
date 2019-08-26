export const range = (startOrEnd: number, end?: number) => {
  const start = end !== undefined ? startOrEnd : 0;
  if (end === undefined) {
    end = startOrEnd;
  }

  const length = end - start;
  return Array.from(Array(length).keys()).map(value => value + start);
};
