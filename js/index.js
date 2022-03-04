function getVal(en) {
    if (en == true) {
        return document.getElementById('encrytper').value;
    } else {
        return document.getElementById('decrypter').value;
    }
}

function encrypt(pass) {
    let encryptedPass = "";
    for (let i = 0; i < pass.length; i++) {
        let charCode = pass.charCodeAt(i);
        for (let j = 0; j < 4; j++) {
            if (charCode >= 127) {
                charCode = 33;
            }
            charCode++;
        }
        encryptedPass += String.fromCharCode(charCode);
        encryptedPass += String.fromCharCode(charCode + 1);
    }
    return encryptedPass;
}

function changeText(en) {
    if (en == true) {
        document.getElementById("passOutputEncrypted").innerHTML = encrypt(getVal(true));
    } else {
        document.getElementById("passOutputDecrypted").innerHTML = decrypt(getVal(false));
    }

}

function decrypt(pass) {
    let decryptedPass = "";
    for (let i = 0; i < pass.length; i++) {
        let charCode = pass.charCodeAt(i);
        for (let j = 0; j < 4; j++) {
            if (charCode < 33) {
                charCode = 127;
            }
            charCode--;
        }
        decryptedPass += String.fromCharCode(charCode);
        i++;
    }
    return decryptedPass;
}