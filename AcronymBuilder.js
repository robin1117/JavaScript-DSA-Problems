/*
-------------------------------------------------
📝 Problem: Acronym Builder
-------------------------------------------------
 Given a string containing one or more words, return an acronym of the words using the following constraints: The acronym should consist of the first letter of each word capitalized, unless otherwise noted. The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of. The acronym letters should be returned in the order they are given. The acronym should not contain any spaces.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/



function buildAcronym(str) {
  if (!str || !str.trim()) return "";

  const stop = new Set(["a", "for", "an", "and", "by", "of"]);
  const words = str.trim().split(/\s+/);

  const letters = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];

    // normalize word: strip leading/trailing non-letters (like punctuation)
    const normalized = w.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, "").toLowerCase();
    if (!normalized) continue;

    // if this is a stop word and not the first word, skip it
    if (i !== 0 && stop.has(normalized)) continue;

    // take the first alphabetic character and uppercase it
    const m = normalized.match(/[A-Za-z]/);
    if (m) {
      letters.push(m[0].toUpperCase());
    }
  }

  return letters.join("");
}
