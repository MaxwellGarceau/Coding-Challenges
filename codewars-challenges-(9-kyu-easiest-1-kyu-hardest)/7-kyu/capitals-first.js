function capitalsFirst(str) {
  return str.split(' ')
    .filter((word) => {
      if (word.charCodeAt(0) > 64 && word.charCodeAt(0) < 123 && word.charCodeAt(0) < 91 || word.charCodeAt(0) > 96) {
        return word;
      }
    })
    .sort((a, b) => {
      if (a.charCodeAt(0) < 97 && b.charCodeAt(0) < 97) {
        return 0;
      } else if (a.charCodeAt(0) >= 97 && b.charCodeAt(0) >= 97) {
        return 0;
      }
      return a.charCodeAt(0) - b.charCodeAt(0)
    })
    .join(' ');
}
