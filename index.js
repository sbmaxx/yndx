fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(response => response.json())
  .then(rates => console.log(rates.Valute.USD));


  1QTGAEJ58CP0B4J9