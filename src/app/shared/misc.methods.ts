export function roundDecimals(amount: any = null, decimals: number = 2) {
  if (!amount || decimals < 1) return 0;
  return Math.floor(amount * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
