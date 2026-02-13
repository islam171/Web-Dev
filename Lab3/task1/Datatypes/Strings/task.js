ucFirst("john") == "John";

function ucFirst(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(ucFirst("john"));

const checkSpam = (str) => {
  let lower = str.toLowerCase();
  return lower.includes("viagra") || lower.includes("xxx");
}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false


function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}


function extractCurrencyValue(str) {
  return +str.slice(1);
}