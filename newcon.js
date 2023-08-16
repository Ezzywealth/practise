const fs = require('fs');

const htmlContent = fs.readFileSync('mailplug/combined.html', 'utf8');

const utf8Bytes = new TextEncoder().encode(htmlContent);
const base64String = btoa(String.fromCharCode(...utf8Bytes));

console.log(base64String);
