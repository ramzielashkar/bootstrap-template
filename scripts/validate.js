const button = document.getElementById('send');
const emailinput = document.getElementById('email');
const nameinput = document.getElementById('name');
const phoneinput = document.getElementById('phone');
const msginput = document.getElementById('message');
const error = document.getElementById('validate');

// function to validate users' inputs
let validate = () => {
  const email = emailinput.value;
  const name = nameinput.value;
  const phone = phoneinput.value;
  const message = msginput.value;

  // Validating full name input
  if(name.length<5){
    error.classList.remove("valid");
    const div = document.createElement("div");
    div.textContent = "Error! Full name must be more than 5 characters.";
    error.appendChild(div);
  }

  // Validating Email
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if(regex.test(email)){
    const f_email = email.split('@');
    if(f_email[0].length<3){
      error.classList.remove("valid");
      const div2 = document.createElement("div");
      div2.textContent = "Error! Email must have at least 3 characters before '@'.";
      error.appendChild(div2);
    }
    if(f_email[1].length<5){
      error.classList.remove("valid");
      const div3 = document.createElement("div");
      div3.textContent = "Error! Email must have at least 5 characters after '@'.";
      error.appendChild(div3);
    }
    }

  else{
    error.classList.remove("valid");
    const div4 = document.createElement("div");
    div4.textContent = "Error! Invalid Email.";
    error.appendChild(div4);
  }

  // Validating phone number
const phone_code = phone.substring(0,4);

if(phone_code == "+961"){
  if(phone.substring(4,5)==3 && phone.substring(4).length!=7){
    error.classList.remove("valid");
    const div6 = document.createElement("div");
    div6.textContent = "Error! Phone Number should have 7 characters after '+961'.";
    error.appendChild(div6);
  }
  else if(phone.substring(4,5)==7 && phone.substring(4).length!=8){
    error.classList.remove("valid");
    const div7 = document.createElement("div");
    div7.textContent = "Error! Phone Number should have 8 characters after '+961'.";
    error.appendChild(div7);
  }
}
else{
  error.classList.remove("valid");
  const div8 = document.createElement("div");
  div8.textContent = "Error! Invalid Phone Number, it might start with '+961'.";
  error.appendChild(div8);
}

// Validating message
if(message.length<100){
  error.classList.remove("valid");
  const div9 = document.createElement("div");
  div9.textContent = "Error! Message should contain at least 100 characters.";
  error.appendChild(div9);
}

};








button.addEventListener("click", () => {
  validate();
});
