export function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'HKD',
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export const formatLabel = (label) => {
  const words = label.split('_');
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );
  return formattedWords.join(' ');
};
