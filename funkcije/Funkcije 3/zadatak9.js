var randomEMail = "myemailaddress@gmail.com";

function hideEMail(email) {
    var username = "";
    var provider = "";
    var hidden = "";
    var result = "";
    var separate = 0;

    for (var i = 0; i < email.length; i++) {
        if (email[i] !== "@") {
            if (separate) {
                provider += email[i];
            } else {
                username += email[i];
            }
        } else {
            separate = 1;
        }
    }

    for (var i = 0; i < (username.length / 2); i++) {
        hidden += username[i];
    }
    result = hidden + "..." + "@" + provider;

    return result;
}

console.log(hideEMail(randomEMail));

