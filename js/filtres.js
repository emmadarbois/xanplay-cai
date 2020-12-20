
function btn_filter_action(e) {
	let j1=document.getElementById('jeu_bmc');
	let j2=document.getElementById('jeu_pp');
	let j3=document.getElementById('jeu_mafia');	
	let j4=document.getElementById('jeu_bang');
	let j5=document.getElementById('jeu_magic');

	
	if(getComputedStyle(j1).display != "none"){
    j1.style.display="none";
    j2.style.display="none";
    j3.style.display="none";
    j4.style.display="none";
    j5.style.display="none";
    
  } else {
    j1.style.display = "block";
 	j2.style.display = "block";
  	j3.style.display = "block";
   	j4.style.display = "block";
  	j5.style.display = "block";
  
  }
}
