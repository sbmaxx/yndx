const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
const response = await fetch(url);

let rates = await response.json(); // читаем ответ в формате JSON

console.log(rates.Valute.USD)