export const numberFormatter = (number: number) => {
  const n = String(number),
    p = n.indexOf(".");
  let regN = n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
    p < 0 || i < p ? `${m},` : m
  );

  return regN.toString().replaceAll(",", " ");
};
