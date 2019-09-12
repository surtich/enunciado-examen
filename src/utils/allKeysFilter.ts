const allKeysFilter = <
  T extends {
    [index: string]: any;
  }
>(
  xss: T[],
  filter: Partial<T>
) =>
  xss.filter(xs =>
    Object.entries(filter).every(([k, v]) => k in xs && xs[k] === v)
  );

export default allKeysFilter;
