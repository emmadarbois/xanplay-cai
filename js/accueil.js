document.addEventListener("pageViewRendered", () => {
    var ladate=new Date()
    console.log(1)
    //var myImg = document.getElementById('myImg');
    var myTxtPromo = document.getElementById('myTxt');


    if (ladate.getDate()%3 == 0){
        myTxtPromo.innerHTML = "bonjour";
       // myImg.src = "res/img/jeux/7-wonders.jpg";
    }
    else if (ladate.getDate()%3 == 1) {
        myTxtPromo.innerHTML = "salut";
    }
    else {
        myTxtPromo.innerHTML = "coucou";
    }
});
