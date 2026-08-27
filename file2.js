const fs=require("fs");
console.log("1");
const result=fs.readFile("contact.txt","utf-8",(err,result)=>{
    console.log(result);
});
console.log("2");
console.log("3");
console.log("4");
console.log("5");
