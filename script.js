function redirRS(g,rsid){
    if (rsid == null) {
        var rsidCall = "https://thehotdogcoder.github.io/vlib/rs/g" + g + ".html";
    } else {
        var rsidCall = "https://thehotdogcoder.github.io/vlib/rs/g" + g + "/" + rsid + "/main.html";
    }
    window.location.assign(rsidCall);
}
function redirG(loc) {
    switch (loc) {
        case 1:
            //Home
            url = "https://thehotdogcoder.github.io/vlib/index.html";
            break;
        case 2:
            //About
            url = "https://thehotdogcoder.github.io/vlib/about.html";
            break;
        case 3:
            //Contacts
            url = "https://thehotdogcoder.github.io/vlib/contacts.html";
            break;
        case 4:
            //Browse
            url = "https://thehotdogcoder.github.io/vlib/browse.html";
            break;
        case 5:
            //history
            url = "https://thehotdogcoder.github.io/vlib/account/history.html";
            break;
        case 6:
            //saved
            url = "https://thehotdogcoder.github.io/vlib/account/saved.html";
            break;
        case 7:
            //categories
            url = "https://thehotdogcoder.github.io/vlib/categories.html";
            break;
        case 8:
            //account
            url = "https://thehotdogcoder.github.io/vlib/account/account.html";
            break;
        default:
            url = "https://thehotdogcoder.github.io/vlib/404.html";
    }
    window.location.assign(url);
}
function search() {
    let sbar = document.getElementById("searchinput")
    alert(sbar)
}