function firstChar(text) {
  if (text) {
    for (let i = 0; i < text.length; i++) {
      const ch = text.charAt(i);
      if (ch !== " ") {
        return ch;
      }
    }
    return " "; // If the text contains only spaces
  } else {
    return " "; // If the text is empty
  }
}

// Example usage:
const text = prompt("Enter text:");
alert(firstChar(text));
