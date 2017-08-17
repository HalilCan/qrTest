let firstNameBox = document.getElementById('fn');
let firstName = '';
let lastNameBox = document.getElementById('ln');
let lastName = '';
let emailBox = document.getElementById('em');
let email = '';
let schoolBox = document.getElementById('sc');
let school = '';

function getInput() {
  firstName = firstNameBox.value;
  lastName = lastNameBox.value;
  email = emailBox.value;
  school = schoolBox.value;
  console.log(firstName);
  let info = firstName + ',' + lastName + ',' + email + ',' + school;
  generateQR(info);
}

function generateQR(info) {
  jQuery('#qrcodeTable').qrcode({
    render	: "table",
    text	: info
  });
  
  jQuery('#qrcodeCanvas').qrcode({
    text	: info
  });
}

