var ladate=new Date()
var imgPromo = document.getElementById('imgPromo');
var txtPromo1 = document.getElementById('txtPromo1');
var txtPromo2 = document.getElementById('txtPromo2');


if (ladate.getDate()%3 == 0){
    console.log("bonjour");
    imgPromo.src = "res/7-wonders.jpg";
    txtPromo1.innerHTML = "bonjour\n bonjour";
    txtPromo2.innerHTML = "bonjour2";
}
else if (ladate.getDate()%3 == 1) {
    console.log("salut");
    imgPromo.src = "../res/labyrinthe.jpg";
    txtPromo1.innerHTML = "salut\n salut";
    txtPromo2.innerHTML = "salut2";
}
else {
    console.log("coucou");
    imgPromo.src = "res/blanc-manger-coco.jpg";
    txtPromo1.innerHTML = "coucou\n coucou";
    txtPromo2.innerHTML = "coucou2";
}


