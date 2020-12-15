function btn_target_shop(e) {
    const btn_shop = document.getElementById("btn_shop");
    const btn_home = document.getElementById("btn_home");

    btn_home.classList.remove("btn-success");
    btn_home.classList.add("btn-secondary");

    btn_shop.classList.remove("btn-secondary");
    btn_shop.classList.add("btn-success");
}

function btn_target_home(e) {
    const btn_shop = document.getElementById("btn_shop");
    const btn_home = document.getElementById("btn_home");

    btn_home.classList.remove("btn-secondary");
    btn_home.classList.add("btn-success");

    btn_shop.classList.remove("btn-success");
    btn_shop.classList.add("btn-secondary");
}