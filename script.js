function redirRS(g,rsid) {
    if (rsid == null) {
        var rsidCall = "rs/g" + g + ".html";
    } else {
        var rsidCall = "rs/g" + g + "/" + rsid + "/main.html";
    }
    window.location.assign(rsidCall);
}
function redirG(loc) {
    switch (loc) {
        case 1:
            //Home
            url = "/index.html";
            break;
        case 2:
            //About
            url = "/about.html";
            break;
        case 3:
            //Contacts
            url = "/contacts.html";
            break;
        case 4:
            //Browse
            url = "/browse.html";
            break;
        case 5:
            //history
            url = "/account/history.html";
            break;
        case 6:
            //saved
            url = "/account/saved.html";
            break;
        case 7:
            //categories
            url = "/categories.html";
            break;
        case 8:
            //account
            url = "/account/account.html";
            break;
        default:
            url = "/404.html";
    }
    window.location.assign(url);
}
function search() {
    let sbar = document.getElementById("searchinput")
    alert(sbar)
}