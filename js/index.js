let firstNameBox = document.getElementById('fn');
let firstName = '';
let lastNameBox = document.getElementById('ln');
let lastName = '';
let emailBox = document.getElementById('em');
let email = '';
let schoolBox = document.getElementById('sc');
let school = '';
let resultBox = document.getElementById('result');

function getInput() {
  firstName = firstNameBox.value;
  lastName = lastNameBox.value;
  email = emailBox.value;
  school = schoolBox.value;
  console.log(firstName);
  let info = firstName + ',' + lastName + ',' + email + ',' + school;
  generateQR(info);
}

/*
function setDecoding() {
    w69b.qr.decoding.setWorkerUrl('src/barcode.js/w69b.qrcode.decodeworker.min.js');
}

function decodeQr() {
    setDecoding();
    let decodeOptions = {};
    let decoder = new w69b.qr.decoding.Decoder(decodeOptions);
    let imgCanvas = document.getElementById('qrcodeCanvas').children[0];
    let image = new Image();
    image.id = "qrimg";
    image.src = imgCanvas.toDataURL();
    image.addEventListener('load', function() {
        decoder.decode(image).then(function(result) {
            resultBox.innerHTML = result.text;
        });
    });

} */

function generateQR(info) {
  /*jQuery('#qrcodeTable').qrcode({
    width: 300,
    height: 300,
    render	: "table",
    text	: info
  });
  */
  
  jQuery('#qrcodeCanvas').qrcode({
    width: 300,
    height: 300,
    text	: info
  });
}

