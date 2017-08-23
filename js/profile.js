function generatePreDefinedQR() {
    /*jQuery('#qrcodeTable').qrcode({
     width: 300,
     height: 300,
     render	: "table",
     text	: info
     });
     */

    jQuery('#qrcodeCanvas').qrcode({
        width: 260,
        height: 260,
        text	: 'John,Doe,University of Generic'
    });
}

window.onload = generatePreDefinedQR();