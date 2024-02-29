// console.log(1)
// console.log(2)
// setTimeout(() =>{
// console.log("Lazy pagol")
// },
// 4000)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)

// function doThing (){
//     console.log(3);
// }

function myLoader () {
    return new Promise((resolve,reject) => {
        const success = Math.random();
        if(success <=0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
};
myLoader()
.then (data => console.log('resolve data',data))
.catch(err => console.log('error mage',err))