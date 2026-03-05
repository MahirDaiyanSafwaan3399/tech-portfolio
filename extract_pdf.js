const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/MahirDaiyanSafwaan_RESUME.pdf');

console.log(typeof pdf);
if (typeof pdf === 'function') {
  pdf(dataBuffer).then(function(data) {
    console.log(data.text);
  });
} else if (pdf && typeof pdf.default === 'function') {
  pdf.default(dataBuffer).then(function(data) {
    console.log(data.text);
  });
} else if (pdf && typeof pdf.parse === 'function') {
  pdf.parse(dataBuffer).then(function(data) {
    console.log(data.text);
  });
} else {
  console.log(pdf);
}
