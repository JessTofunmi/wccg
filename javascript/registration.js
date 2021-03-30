//get the elements
// const form = document.getElementById('form')
// const names = document.getElementById('name')
// const email = document.getElementById('email')
// const phone = document.getElementById('phone')
// const password2 = document.getElementById('password2')

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();

//     check inputs()
// })






const form = document.getElementById('form')
const names = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const word = document.getElementById('state')
const address = document.getElementById('address')
const city = document.getElementById('city')
const postal = document.getElementById('postal')


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){

  const nameValue = names.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const stateValue = state.value.trim();
  const cityValue = city.value.trim();
  const postalValue = postal.value.trim();
  const addressValue = address.value.trim();


  if(nameValue == ""){
      setErrorFor(names,'This field is required')
  }else{
      setSuccessFor(names ,'Successful')
  }

  if(phoneValue == ""){
      setErrorFor(phone,'This field is required')
  }else if(phoneValue === ''){
      setErrorFor(phone,'Your Phone number must be digits please')
  }
  else{
      setSuccessFor(phone,'Successful')
  }

  if(emailValue==""){
      setErrorFor(email,'This field is required')
  }else{
      setSuccessFor(email,'Successful')
  }

  if(addressValue==''){
      setErrorFor(word,'This field is required')
  }else{
  setSuccessFor(word,'Successful')
}
if(cityValue == ""){
    setErrorFor(city,'This field is required')
}else{
    setSuccessFor(city,'Successful')
}

if(stateValue==""){
    setErrorFor(state,'This field is required')
}else{
    setSuccessFor(state,'Successful')
}

if(postalValue==''){
    setErrorFor(postal,'This field is required')
}else{
setSuccessFor(postal,'Successful')
}
}






function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText= message;

    formControl.className="control error";
}
function setSuccessFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className="control success";
}




// function setErrorFor(input, message) {
//     const formControl = input.parentElement
//     const small = formControl.querySelector('small')

//     //add error message inside the small tags
//     small.innerText =message;

//     //add error class
//     formControl.className = "form-control error"
// }
// function setSuccessFor(input,message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small')

//     small.innerText = message

//     formControl.className = "form-control success"
// }