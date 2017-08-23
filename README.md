# qrTest
This simple demo uses a qrcode.js library to encode a string into a variable generation qr code. (Newer generations are essentially 'denser' in data) index.js includes all the necessary examples for this simple client-side 'qr code generator'.
I initially wrote a decoder/authenticator in nodejs to interact with the database, but the decoder is an unnecessary burden and the authenticator will have to be implemented in Go + your choice of database. 
How the qr code authentication works: 
  1. For every user, create a unique id beforehand or have the id-generation formula of your choice available for real-time qr-encoding. e.g. sha/md hash their email address + school string.
  2. Prepare the unique id for encoding. Since people who would use these qr codes are far more likely to have generic qr code readers on their devices, it's sensible to have a web command within the qr barcode, which the format supports. For example, inventorspace.xyz/tickauth?[user id]. Ideally, this page could also utilize geolocation for increased accuracy. In any case invoking the url should return a pass/fail message to the scanner/user (geolocation could be useful here), at the same time updating the database of attendees etc.
  3. Encode the url using the qr generator library. Since the data and the encoding are always the same, no storage is necessary for the qr.
  
  This demo shows how to use the library with canvas and table elements. Canvas is simpler and the demo shows how to interact with it in this context.
