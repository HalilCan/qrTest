
let qrInfo = 'Simon,Pegg,hotfuzz@gmail.com,Some Thing High School';
//jQuery('#qrcode').qrcode("this plugin is great");

jQuery('#qrcodeTable').qrcode({
  render	: "table",
  text	: qrInfo
});

jQuery('#qrcodeCanvas').qrcode({
  text	: qrInfo
});