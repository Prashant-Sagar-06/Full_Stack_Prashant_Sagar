const fs = require('fs');
const path = require('path');


function getData(fileName){
    return new Promise((resolve, reject) => {
        const loc = path.join(__dirname, 'Data', fileName);
        fs.readFile(loc, { encoding: 'utf-8' }, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

getData('input1.txt')
    .then((data)=>{
        getData('input2.txt')
        .then((data2)=>{
            let num1 = data.split(" ");
            let num2 = data2.split(" ");
            let combined = [...num1, ...num2];
            combined = combined.map(Number);
            combined.sort((a,b)=>a-b);
            let output = combined.join(" ");
            const outputLoc = path.join(__dirname, 'Data', 'output.txt');
            fs.writeFile(outputLoc, output, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Sorted numbers written to output.txt');
                }
        });
    })
    .catch((err)=>{
        console.log(err);
    });
    })
    .catch((err)=>{
        console.log(err);
    });