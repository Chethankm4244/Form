

// ------------for image upload----------------

let ProfilePic = document.getElementById("images");

let inputfile = document.getElementById("image-inputiField");

inputfile.onchange = function () {
  images.src = URL.createObjectURL(inputfile.files[0]);
};


function getData() {
  let formElement = document.getElementById("myform");
  let formData = new FormData(formElement);
    
    let username = formData.get("name");
    let mail = formData.get("mail");
    let number = formData.get("number");
    let date = formData.get("date");
    let gender = formData.get("gender");
    let jobtype = formData.get("jobs");
    let message = document.getElementById("messages").value;
    let path = document.getElementById("image-inputiField").value;

    let skills = [];
  document.querySelectorAll('[type="checkbox"]').forEach((item) => {
    if (item.checked === true) {
      skills.push(item.value);
    }
  });


  // --------------validation-----------------

  let errorElement = document.getElementById("nameError");
  let emailelement = document.getElementById("email-error");
  let numberelement = document.getElementById("number-error");
  let dateelement = document.getElementById("date-error");

  let name = [];
  let email = [];
  let numbers = [];
  let dates = [];

  if (!isValidName(username)) {
    name.push("* Name filed is reqired *");
    event.preventDefault();
  }
  if (!isValidmail(mail)) {
    email.push("* Enter valid email *");
    event.preventDefault();
  }
  if (!isValidnumber(number)) {
    numbers.push("* Enter valid number *");
    event.preventDefault();
  }
  if (!isValiddate(date)) {
    dates.push("* Please select the date  *");
    event.preventDefault();
  }

//   let dob = new Date(date);
//   let today = new Date();
//   if (dob instanceof Date && !isNaN(dob) && dob < today) {
//    dateelement.textContent = " ";
//   } else {
//  dateelement.textContent = "* please select the correct date *";
//   }

  function isValidName(username) {
    return /^[A-Za-z\s]+$/.test(username);
  }
  errorElement.innerText = name;

  function isValidmail(mail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  }
  emailelement.innerText = email;

  function isValidnumber(number) {
    return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(number);
  }
  numberelement.innerText = numbers;

 

  function isValiddate(date) {
    
   return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(date);
  }
  dateelement.innerText = dates;

  const selectRadio = document.querySelector('input[name="gender"]:checked');
  if (selectRadio) {
    const selectedValue = selectRadio.value;
    document.getElementById("radioValidation").textContent = "";
  } else {
    document.getElementById("radioValidation").textContent =
      "* Please select a gender *";
  }

  const validationMessage = document.getElementById("checkbox-validation");
  const validation = document.querySelectorAll('[type="checkbox"]:checked');
  
  console.log(validation);
  if (validation.length > 0) {
    console.log(validation.checked);
    validationMessage.textContent = "";
  } else {
    validationMessage.textContent = "*Please select atleast one option*";
  }

 
 

  let password = document.getElementById("passwords").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let errorMessage = document.getElementById("error-message");
 
  
  if (password.length < 6) {
    errorMessage.textContent = "*Password must reqired and at least 6 characters long*";
    return false;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "*Passwords do not match*";
    return false;
  }else{

    console.log({
      username,
      mail,
      number,
      date,
      gender,
      skills,
      jobtype,
      message,
      path,
    });
  }

  
  errorMessage.textContent = ""; 
  return true;
  
  
}



