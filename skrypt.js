var mapa = document.getElementById("mapa_div");
var info = document.getElementById("info");

var tab = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // od 0 do 179 ideksy
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1
];


//tworyz nam divy tyle ile elemntow w tablicy tylko tyle  1 czesc
tab.forEach((element) => {
    var div_siatki = document.createElement("div");
    div_siatki.className = "siatka";
    mapa.appendChild(div_siatki);
})


//teraz przypisujemy utworzone div do tablicy
var elementy = document.querySelectorAll('.siatka')
//var tab
tab.length = 0;
for (let i = 0; i < elementy.length; i++) {
    tab.push(elementy[i]);
}



//rysowanie wrogow


var pozycja_wroga = Math.floor(Math.random() * 12) + 2;  //pozycja wroga ana samym poczatku
tab[pozycja_wroga].classList.add('wrog')



//rysowanie gracz 
var pozycja_gracz = 157  //pozycja gracz ana samym poczatku

tab[pozycja_gracz].classList.add('gracz')

//dodanie poruszania sie gracza na prawo i lewo za pomoca a i d   // od 150 do 164
document.addEventListener("keydown", prawo)
document.addEventListener("keydown", lewo)

function prawo(event) {

    if (event.key === "d") {  //poruszanie sie w prawo
        if (pozycja_gracz <= 163) {
            tab[pozycja_gracz].classList.remove('gracz')
            pozycja_gracz++
            tab[pozycja_gracz].classList.add('gracz')
            console.log("pozycja gracza to:", pozycja_gracz)
        } else {
            console.log("nie mozesz dalej isc")
        }
    }
}

function lewo(event) {
    if (event.key === "a") {  //poruszanie sie w prawo
        if (pozycja_gracz >= 151) {
            tab[pozycja_gracz].classList.remove('gracz')
            pozycja_gracz--
            tab[pozycja_gracz].classList.add('gracz')
            console.log("pozycja gracza to:", pozycja_gracz)
        } else {
            console.log("nie mozesz dalej isc")
        }
    }
}


//poruszanie sie wrogow PROSTE

//var wrogowie = document.querySelectorAll('.wrog');

function poruszanie_wroga() {
    if (pozycja_wroga !== pozycja_gracz || (pozycja_wroga > 165 && pozycja_wroga < 179)) {   //nie dziala zatrzymanie sie wroga na samym koncu
        tab[pozycja_wroga].classList.remove('wrog')
        pozycja_wroga += 15
        tab[pozycja_wroga].classList.add('wrog')
        console.log("pozycja wroga to:", pozycja_wroga)
    }
    else {
        zatrzymajPowtarzanie()
        alert("Przegrales")
    }
}

var powtarzanie = setInterval(poruszanie_wroga, 1000);

function zatrzymajPowtarzanie() {
    clearInterval(powtarzanie);
}
