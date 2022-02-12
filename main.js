let zahl = 0;
let versuche = 0;
let random = Math.floor(Math.random()*10+1);
let zahlanzeige = document.getElementById('zahlanzeige');
zahlanzeige.innerHTML = zahl;

function up() {
    zahl++;
    zahlanzeige.innerHTML = zahl;
    zahlanzeige.style.color = 'black';
    zahlanzeige.style.fontSize = '125px';
}

function down() {
    zahl--;
    zahlanzeige.innerHTML = zahl;
    zahlanzeige.style.color = 'black';
    zahlanzeige.style.fontSize = '125px';
}

function bestätigen() {
    versuche++;
    if(zahl === random) {
        zahlanzeige.innerHTML = 'Du hast die Zahl heruasgefunden. Du hast ' + versuche + ' gebraucht. Du bist ein echtes Genie. Versuche es gleich nochmal. <br> (drücke F5)';
        zahlanzeige.style.fontSize = '50px';
        zahlanzeige.style.color = 'blue';
        document.getElementById('up').style.display = 'none';
        document.getElementById('down').style.display = 'none';
        document.getElementById('bestätigen').style.display = 'none';
    } else {
        zahlanzeige.innerHTML = 'Du hast es leider nicht geschafft. Versuche es gleich erneut.';
        zahlanzeige.style.fontSize = '50px';
        zahlanzeige.style.color = 'red';
    }
}