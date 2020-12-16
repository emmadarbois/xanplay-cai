var user = document.getElementsByName("user")[0];
var mdp = document.getElementsByName("mdp")[0];
var btn_connect = document.getElementById("connect");
var btn_no_account = document.getElementById("create_account");

btn_connect.onclick = () => {
    console.log('in')
    if ((user.value === "admin") && (mdp.value === "admin")) {
        window.location.href="?account";
    }
    else {
        window.alert("Aucun compte ne correspond à cette adresse !");
    }
}

btn_no_account.onclick = () => {
    window.alert("Nous ne pouvons créer de nouveau compte pour le moment.")
}