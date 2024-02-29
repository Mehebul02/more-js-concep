function displayMessage() {
  setInterval(() => {
    // const messageItem = document.getElementById("message-item");
    // messageItem.innerHTML = "I Love You";
  }, 5000);
}
displayMessage();

function delayGreeting(message1, message2) {
  setTimeout(() => {
    const sum = message1 + message2;
    console.log(sum)
  }, 2000)
};
const output = delayGreeting("Hello", "Alice !");
console.log(output);




function tellJoke(){
    console.log( "Have you heard this one? It'll kill you, Batman!")
};
const jokInterval =setInterval(tellJoke,2000);
setTimeout(() =>{
    clearInterval(jokInterval);
    // console.log('When the chips are down, these civilized people, they')
    const messageItem = document.getElementById("message-item");
    messageItem.innerHTML = "When the chips are down, these civilized people, they";
   
},10000)
    
    
tellJoke()

