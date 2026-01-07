const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname,"Data")
const loc = path.join(__dirname,"Data/abc.txt")
const d = "hii"

// Create Data directory if it doesn't exist
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
}

fs.writeFile(loc,d,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Succesfully")
    }
})