// const checkAge =()=>{
//     const inputAge = document.getElementById('age').value;
//     console.log(inputAge);
//     const errTag =document.getElementById('error');
//     console.log(5754)
//     try{
//         console.log(sjkadfhsdaf)
//     }
//     catch(err){
//         console.log('Error:',err)
//         errTag.innerText='Some Thing Wrong';
//         errTag.style.color='red'

//     }
// }

function checkAge() {
  const ageField = document.getElementById("age_field").value;
  const errorMassage = document.getElementById("error");
  try {
    // console.log(Ami);
    const ageField = document.getElementById("age_field").value;
    const age = parseInt(ageField);

    if (isNaN(age)) {
      throw "Please Enter The number";
    }
    else if( age <18){
        throw ('please Enter Allow 18 ')
    }
    else if( age > 30){
        throw('30')
    }
    errorMassage.innerHTML=''
  } catch (err) {
    errorMassage.innerHTML = "!ERROR " + err;

    console.log("Some Thing Wrong:", err);
  } finally {
    console.log("Al done the inside");
  }
  console.log(2222);
}
