console.log("data1");
console.log("data2");

const f=require("fs");
// f.writeFileSync("out.txt","hello to all,i am lavanya");
// f.appendFileSync("out2.txt","hello! lavanya");
console.log("data3");
console.log("data4");

// f.writeFile("out.txt","hello! lavanya",(err)=>(console.log("error",err)))
const r=f.readFileSync("out.txt","utf-8");
console.log(r);