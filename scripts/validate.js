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

  if(name.length<5){
    error.classList.remove("valid");
    const div = document.createElement("div");
    div.textContent = "Error! Full name must be more than 5 characters.";
    error.appendChild(div);
  }

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


};








button.addEventListener("click", () => {
  validate();
});
