export const highlightMetrics = (text, className = "text-cyan-300 font-semibold") => {
  const ratioRegex = /\b\d+(?:\.\d+)?\/\d+(?:\.\d+)?\b/g;
  const regex = /(\$?\d[\d,]*(?:\.\d+)?(?:K|M|B)?%?\+?)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = ratioRegex.exec(text)) !== null) {
    const value = match[0];
    const index = match.index;
    const prev = text[index - 1] || "";
    const next = text[index + value.length] || "";
    if (/[A-Za-z]/.test(prev) || /[A-Za-z]/.test(next)) continue;
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }
    parts.push(
      <span key={`ratio-${index}-${value}`} className={className}>
        {value}
      </span>
    );
    lastIndex = index + value.length;
  }

  while ((match = regex.exec(text)) !== null) {
    const value = match[0];
    const hasSignal = /[%+,$]|[KMB]/.test(value) || value.includes(",");
    if (!hasSignal) continue;

    const index = match.index;
    const prev = text[index - 1] || "";
    const next = text[index + value.length] || "";
    if (/[A-Za-z]/.test(prev) || /[A-Za-z]/.test(next)) continue;
    if (index < lastIndex) continue;
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }
    parts.push(
      <span key={`${index}-${value}`} className={className}>
        {value}
      </span>
    );
    lastIndex = index + value.length;
  }

  if (parts.length === 0) return text;
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
};
