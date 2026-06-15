// Apertura della scheda del giocatore
function showPlayer(nome, descrizione, immagine) {

    document.getElementById("popupName").innerText = nome;

    document.getElementById("popupDescription").innerText = descrizione;

    document.getElementById("popupImage").src = immagine;

    document.getElementById("popup").style.display = "flex";
}


// Chiusura della scheda
function closePopup() {

    document.getElementById("popup").style.display = "none";

}


// Chiude la scheda cliccando fuori dalla finestra
window.onclick = function(event) {

    let popup = document.getElementById("popup");

    if(event.target == popup){
        popup.style.display = "none";
    }

};


// Chiude la scheda premendo ESC
document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){
        closePopup();
    }

});