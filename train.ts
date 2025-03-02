import { resolve } from "path";

/*
TASK-ZI

Write a function that returns the string "Hello World!" after 3 seconds.

EXAMPLE: delayHelloWorld("Hello World"); should return "Hello World".
*/ 
function delayHelloWorld(message:string): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
            
        }, 3000);  //3 seconds delay
    });
}

delayHelloWorld("HelloWorld").then((message) => {
    console.log(message); //Hello World will be logged after 3seconds
})