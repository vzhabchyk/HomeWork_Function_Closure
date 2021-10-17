const text = prompt("Enter your text.");
const deleteSymbols = prompt("Enter characters to delete(comma separated).");

function clearText(txt, symbols) {
  let string = '';
  for (let i = 0; i < txt.length; i++) {
    for (let j = 0; j < symbols.length; j++) {
      if (txt[i] === symbols[j]) {
        break;
      }
      if (j === symbols.length - 1) {
        string += txt[i];
      }
    }
  }
  return string;
}

const userText = clearText(text, deleteSymbols);
document.write(userText);
