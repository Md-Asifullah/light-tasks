export function formatYMDToDMY(dateStr) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  if (!y || !m || !d) return ""; // basic guard
  return `${d.padStart(2, "0")}/${m.padStart(2, "0")}/${y}`;
}
