document.addEventListener("pageViewRendered", () => {
    console.log(1)
    var user = document.getElementsByName("user")[0];
    var mdp = document.getElementsByName("mdp")[0];
    var btn_connect = document.getElementById("btn_connect");
    var btn_no_account = document.getElementById("create_account");

    console.log(user.value)
    console.log(mdp.value)
    console.log(btn_connect)
    console.log(btn_no_account)

    console.log(2)

    btn_connect.onclick = () => {
        console.log('in')
        if ((user.value === "sebastien@kubiki.xanplay.fr") && (mdp.value === "caiENIB2020")) {
            window.location.href="?account";
        }
        else {
            window.alert("Aucun compte ne correspond à cette adresse !");
        }
    }

    console.log(3)
    btn_no_account.onclick = () => {
        window.alert("Nous ne pouvons créer de nouveau compte pour le moment.")
    }
});