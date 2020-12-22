document.addEventListener("pageViewRendered", () => {
    var ladate=new Date()
    console.log(1)
    




    if (ladate.getDate()%3 == 0){
        promo("7 Wonders<br><br>42,99 € --> 34,39 €","../res/img/jeux/7-wonders.jpg",4,80);
    }
    else if (ladate.getDate()%3 == 1) {
        promo("Blanc Manger Coco<br><br>26,90 € --> 21,52 €","../res/img/jeux/blanc-manger-coco.jpg",5,42);
    }
    else {
        promo("Labyrinthe<br><br>29,99 € --> 23,99 €","../res/img/jeux/labyrinthe.jpg",3,27);
    }
});



function promo(name,img,nbStars,avis) {
    var myImgPromo = document.getElementById('myImgPromo');
    var nomPrixPromo = document.getElementById('nomPrixPromo');
    var stars = [document.getElementById('star1'),document.getElementById('star2'),document.getElementById('star3'),document.getElementById('star4'),document.getElementById('star5')]
    var avisPromo = document.getElementById('avisPromo');

    nomPrixPromo.innerHTML = name;
    myImgPromo.src = img;
    avisPromo.innerHTML = avis + " avis";
    for (let i = 0; i < nbStars; i++) {
        stars[i].classList.add('star-on');
      } 
  }
  




