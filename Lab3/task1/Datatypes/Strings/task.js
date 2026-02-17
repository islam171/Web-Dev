
const ucFirst = (word) => {
  return word[0].toUpperCase() + word.slice(1)
}

const checkSpam =  (word) => {
  let lower = word.toLowerCase();
  return lower.includes("viagra") || lower.includes("xxx")
}

console.log(checkSpam('buy ViAgRA now'))

const truncate = (word, num) => {

  return word.length > 20 ? word.slice(0, 19) + ".." : word
}

const extractCurrencyValue = (word) => {
  return parseInt(word.slice(1))
}

console.log(extractCurrencyValue("$120"))
