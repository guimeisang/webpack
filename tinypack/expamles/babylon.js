var babylon = require('babylon');
var fs = require('fs');
let code = `
    let a = 1, b = 2;
    function sum(a, b){
        return a + b;
    }
    sum(a, b);
`;

let ast = babylon.parse(code);
fs.writeFileSync('./data/babylon.json', JSON.stringify(ast), (err)=>{
    console.log(err);
})