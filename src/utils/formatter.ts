export function formatCurrencyToParts(value = 0, currency = "EUR") {
  const [integer, decimal, fraction, literal, symbol] = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency,
  }).formatToParts(value);
  return { integer: integer.value, decimal: decimal.value, fraction: fraction.value, literal: literal.value, symbol: symbol.value };
}

export function formatNumber(value = 0) {
  return new Intl.NumberFormat("it-IT").format(value);
}