function send_request(id_textarea) {
    if(typeof(id_textarea) === 'string'){
        const textarea = document.getElementById(id_textarea);
        console.log(textarea.value);
        const alert = document.getElementById("alert_send_success");
        textarea.value = "";
        alert.style.display = "block";
    }
}