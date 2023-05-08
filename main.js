// משימה ראשונה

// const obj = {
//     lastName: "ariel",
//     ferstName: "coral"
// };

// localStorage.setItem("userName", JSON.stringify(obj.lastName));
// sessionStorage.setItem("userName", JSON.stringify(obj.lastName));

// let userName = localStorage.getItem("userName");
// let Data = JSON.parse(userName);
// console.log(Data)


// משימה שניה

// function message(){
//     const theMessage = "content of the message"
//     console.log(theMessage)
// };

// let time = setInterval(message, 3000);


// setTimeout(() =>{
//     clearInterval(time), 9000
// }, 9000)


// משימה שלישית 


// function theNumber(number){
//     return new Promise((resolve, reject) =>{
//         if(typeof number == "number" && !isNaN(number)){
//             resolve([number * number])
//         }
//         else{
//             reject(`${number} This is not a number.`)
//         }
//     })
// }

// let theUserNumber = Number(prompt("enter a numer:"));

// theNumber(theUserNumber)
//     .then((result) =>{
//         console.log(`${result} It's the number squared of that number ${theUserNumber}`)
//     })
//     .catch((error) =>{
//         console.error(error)
//     })