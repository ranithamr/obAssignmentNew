// var fs = require('fs');
// var http = require('http');
//
//
// var input = fs.readFileSync('inputxml.xml', {
//     encoding: 'utf8'
// });
//
// var http = require('http');
// //var data = JSON.stringify(
//
// var options = {
//     host: 'www.example.org',
//     port: '80',
//     path: '/calculator.asmx',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/soap+xml; charset=utf-8',
//         'Content-Length': input.length
//     }
// };
//
// var req = http.request(options, function(res) {
//     var msg = '';
//
//     res.setEncoding('utf8');
//     res.on('data', function(chunk) {
//         msg += chunk;
//     });
//     res.on('end', function() {
//         console.log(msg);
//     });
// });



const axios = require('axios');
const fs = require('fs');
const path = require('path');
var readXml = fs.readFileSync(path.join('./obAssignment/soapRequest',"inputxml.xml"), 'utf8');
axios.post("http://www.example.org/stock",
    readXml,
    {
        headers:
            { 'Content-Type': 'text/xml' }
    }).then(res => {
    fs.writeFileSync(path.join('./obAssignmnet/soapRequest',"response.xml"), res.data, 'utf8');
});