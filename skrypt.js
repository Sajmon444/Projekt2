var mapa = document.getElementById("mapa_div");
var info = document.getElementById("info");
var punkty = 0;
info.innerHTML=punkty;

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
    if (pozycja_wroga == pozycja_gracz || pozycja_wroga > 165) {   //nie dziala zatrzymanie sie wroga na samym koncu
        clearInterval(powtarzanie_wroga);
        tab[pozycja_wroga].classList.remove('wrog')
        alert("Przegrales")

    }
    else {
        tab[pozycja_wroga].classList.remove('wrog')
        pozycja_wroga += 15
        console.log("pozycja wroga to:", pozycja_wroga)
        tab[pozycja_wroga].classList.add('wrog')

    }
}


var powtarzanie_wroga = setInterval(poruszanie_wroga, 1000);






//strzelanie pociskiem tylko pojawianie sie pocisku na f  i poruszanie pocisku
/*
-klimamy f
-generuje sie nam pocisk 
petla{
-usuwamy pocisk
-zmiejszamy jego index
-znow generujemy pocisk
}
*/

var pozycja_pocisku


let isBulletOnScreen = false; // flaga, która określa, czy pocisk jest aktualnie wyświetlany

document.addEventListener("keydown", pocisk);

function pocisk(event) {
    if (event.key === "f" && !isBulletOnScreen) { 
        isBulletOnScreen = true; 
        pozycja_pocisku = pozycja_gracz - 15;
        console.log("pocisk pojawia sie: ", pozycja_pocisku);
        tab[pozycja_pocisku].classList.add("pocisk");

        let intervalId = setInterval(function () {
            if (pozycja_pocisku > 15) {
                // Sprawdzanie kolizji pomiędzy pociskiem a wrogiem
                if (pozycja_pocisku === pozycja_wroga) {
                    console.log("Trafiony");
                    clearInterval(intervalId);
                    tab[pozycja_pocisku].classList.remove("pocisk");

                    clearInterval(powtarzanie_wroga);
                    tab[pozycja_wroga].classList.remove('wrog')

                    isBulletOnScreen = false;
                    // Dodawanie punktu
                    dodajPunkt();
                } else {
                    tab[pozycja_pocisku].classList.remove("pocisk");
                    pozycja_pocisku -= 15;
                    console.log("pozycja pocisku: ", pozycja_pocisku);
                    tab[pozycja_pocisku].classList.add("pocisk");
                }
            } else {
                console.log("pocisk nie moze isc dalej");
                clearInterval(intervalId);
                tab[pozycja_pocisku].classList.remove("pocisk");
                isBulletOnScreen = false;
            }
        }, 100);
    }
}

//dodawanie punktu za potkanie pocisku z worgiem
function dodajPunkt() {
    punkty++;
    info.innerHTML=punkty;
}


//pojawianie sie wroga po tym jak 1 raz pocisk spotkal sie z wrogiem

function generuj_wroga() {
  tab[pozycja_wroga].classList.add('wrog');
  powtarzanie_wroga = setInterval(poruszanie_wroga, 1000)
  poruszanie_wroga()
}

function sprawdz_wroga() {
  if (!tab[pozycja_wroga].classList.contains('wrog')) { // sprawdzenie, czy wrog jest na ekranie
    pozycja_wroga = Math.floor(Math.random() * 12) + 2;; // jeśli nie, wylosowanie nowej pozycji wroga
    generuj_wroga(); // i wygenerowanie go na nowej pozycji
  }
}

setInterval(sprawdz_wroga, 100); // sprawdzanie, czy wrog jest na ekranie co 500ms




