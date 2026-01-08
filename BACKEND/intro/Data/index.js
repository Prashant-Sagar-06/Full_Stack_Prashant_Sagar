const fs = require('fs')
const path = require('path')

// const dir = path.join(__dirname,"Data")
// const loc = path.join(__dirname,"Data/abc.txt")
// const d = "hii"
// fs.writeFile(loc,d,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Succesfully")
//     }
// })



const loc  = path.join(__dirname ,"Data/abc.txt")

fs.readFile(loc ,{encoding : 'utf-8'},function(err,data){
    if(err){
        console.log(err);
    }
    else{
        // console.log(data.toString())
        console.log(data)
    }
})