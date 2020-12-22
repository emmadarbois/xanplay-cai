function search(id_input_text) {
    if(typeof(id_input_text) === 'string'){
        let input_text = document.getElementById(id_input_text).value;
        if(input_text.length === 0){
            document.getElementById("alert_error_search").style.display = "block";
            return;
        }
        input_text.toLowerCase();
        let words = input_text.split(" ");
        if(words.includes("mémoire") || words.includes("44") || words.includes("memoire"))
        {
            console.log("YO");
            window.location.href = "?recherche";
        }
        else{
            console.log("HEY");
            document.getElementById("alert_error_search").style.display = "block";
        }
    }
}