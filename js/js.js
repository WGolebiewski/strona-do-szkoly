function getVal() {
    const val = document.querySelector('input').value;
    return encrypt(val);
}

function encrypt(pass) {
    var encryptedPass = "";
    for (var i = 0; i < pass.length; i++) {
        var charCode = pass.charCodeAt(i);
        for (var j = 0; j < 4; j++) {
            if (charCode >= 127) {
                charCode = 33;
            }
            charCode++;
        }
        encryptedPass += String.fromCharCode(charCode);
        encryptedPass += String.fromCharCode(charCode + 1);
    }
    console.log(encryptedPass);
    return encryptedPass;
}

function changeText() {
    document.getElementById("passOutput").innerHTML = getVal();
}
