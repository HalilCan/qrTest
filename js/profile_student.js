function generatePreDefinedQR() {
    /*jQuery('#qrcodeTable').qrcode({
     width: 300,
     height: 300,
     render	: "table",
     text	: info
     });
     */

    jQuery('#qrcodeCanvas').qrcode({
        width: 150,
        height: 150,
        text	: 'John,Doe,University of Generic'
    });
}

window.onload = generatePreDefinedQR();