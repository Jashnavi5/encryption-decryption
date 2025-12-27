// ---------- CAESAR CIPHER ----------
function caesarEncrypt() {
    let text = document.getElementById("inputText").value;
    let key = parseInt(document.getElementById("key").value);
    let result = "";

    for (let ch of text) {
        if (ch >= 'A' && ch <= 'Z')
            result += String.fromCharCode((ch.charCodeAt(0) - 65 + key) % 26 + 65);
        else if (ch >= 'a' && ch <= 'z')
            result += String.fromCharCode((ch.charCodeAt(0) - 97 + key) % 26 + 97);
        else
            result += ch;
    }

    document.getElementById("outputText").value = result;
}

function caesarDecrypt() {
    let text = document.getElementById("inputText").value;
    let key = parseInt(document.getElementById("key").value);
    let result = "";

    for (let ch of text) {
        if (ch >= 'A' && ch <= 'Z')
            result += String.fromCharCode((ch.charCodeAt(0) - 65 - key + 26) % 26 + 65);
        else if (ch >= 'a' && ch <= 'z')
            result += String.fromCharCode((ch.charCodeAt(0) - 97 - key + 26) % 26 + 97);
        else
            result += ch;
    }

    document.getElementById("outputText").value = result;
}


// ---------- VIGENERE CIPHER ----------
function vigEncrypt() {
    let text = document.getElementById("inputText").value.toLowerCase();
    let key = document.getElementById("key").value.toLowerCase();
    let result = "";

    let j = 0;
    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        if (/[a-z]/.test(c)) {
            let shift = key[j % key.length].charCodeAt(0) - 97;
            result += String.fromCharCode((c.charCodeAt(0) - 97 + shift) % 26 + 97);
            j++;
        } else {
            result += c;
        }
    }
    document.getElementById("outputText").value = result;
}

function vigDecrypt() {
    let text = document.getElementById("inputText").value.toLowerCase();
    let key = document.getElementById("key").value.toLowerCase();
    let result = "";

    let j = 0;
    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        if (/[a-z]/.test(c)) {
            let shift = key[j % key.length].charCodeAt(0) - 97;
            result += String.fromCharCode((c.charCodeAt(0) - 97 - shift + 26) % 26 + 97);
            j++;
        } else {
            result += c;
        }
    }
    document.getElementById("outputText").value = result;
}


// ---------- BASE64 ----------
function base64Encode() {
    let text = document.getElementById("inputText").value;
    document.getElementById("outputText").value = btoa(text);
}

function base64Decode() {
    let text = document.getElementById("inputText").value;
    document.getElementById("outputText").value = atob(text);
}
