function greet(name,callback){     //callback function
    console.log("Hello"+name);              
    callback();
}
function saybye(){
    console.log("goodbye!");
}
greet(" Alex",saybye);