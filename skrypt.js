var mapa = document.getElementById("mapa_div");
var info = document.getElementById("info");
var punkty = 0;
info.innerHTML = punkty;

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
var pozycja_gracz = Math.floor(Math.random() * 178) + 1;  //pozycja gracz ana samym poczatku

tab[pozycja_gracz].classList.add('gracz')

//dodanie poruszania sie gracza na prawo i lewo za pomoca a i d   // od 150 do 164
document.addEventListener("keydown", prawo)
document.addEventListener("keydown", lewo)
document.addEventListener("keydown", gora)
document.addEventListener("keydown", dol)


function prawo(event) {

    if (event.key === "d") {  //poruszanie sie w prawo
       
            if (pozycja_gracz !== 14 && pozycja_gracz !== 29 && pozycja_gracz !== 44 && pozycja_gracz !== 59 && pozycja_gracz !== 74 && pozycja_gracz !== 89 && pozycja_gracz !== 104 && pozycja_gracz !== 119 && pozycja_gracz !== 134 && pozycja_gracz !== 149 && pozycja_gracz !== 164 && pozycja_gracz !== 179) {
                tab[pozycja_gracz].classList.remove('gracz')
                pozycja_gracz++
                tab[pozycja_gracz].classList.add('gracz')
                console.log("pozycja gracza to:", pozycja_gracz)
            } else {
                console.log('nie mozesz dalej pojsc')
            }
        }
   
}

function lewo(event) {
    if (event.key === "a") {  //poruszanie sie w prawo
        
            if (pozycja_gracz !== 0 && pozycja_gracz !== 15 && pozycja_gracz !== 30 && pozycja_gracz !== 45 && pozycja_gracz !== 60 && pozycja_gracz !== 75 && pozycja_gracz !== 90 && pozycja_gracz !== 105 && pozycja_gracz !== 120 && pozycja_gracz !== 135 && pozycja_gracz !== 150 && pozycja_gracz !== 165) {
                tab[pozycja_gracz].classList.remove('gracz')
                pozycja_gracz--
                tab[pozycja_gracz].classList.add('gracz')
                console.log("pozycja gracza to:", pozycja_gracz)
            } else {
                console.log('nie mozesz dalej pojsc')
            }
        }

}


function gora(event) {

    if (event.key === "w") {  //poruszanie sie w gore
        
            if (pozycja_gracz !== 0 && pozycja_gracz !== 1 && pozycja_gracz !== 2 && pozycja_gracz !== 3 && pozycja_gracz !== 4 && pozycja_gracz !== 5 && pozycja_gracz !== 6 && pozycja_gracz !== 7 && pozycja_gracz !== 8 && pozycja_gracz !== 9 && pozycja_gracz !== 10 && pozycja_gracz !== 11 && pozycja_gracz !== 12 && pozycja_gracz !== 13 && pozycja_gracz !== 14) {
               
                tab[pozycja_gracz].classList.remove('gracz')
                pozycja_gracz -= 15
                if(pozycja_gracz!==pozycja_wroga)
                tab[pozycja_gracz].classList.add('gracz')
                console.log("pozycja gracza to:", pozycja_gracz)
            } else {
                console.log('nie mozesz dalej pojsc')
            }


    }
}

function dol(event) {

    if (event.key === "s") {  //poruszanie sie w dol
       
            if (pozycja_gracz != 165 && pozycja_gracz != 166 && pozycja_gracz !== 167 && pozycja_gracz !== 168 && pozycja_gracz !== 169 && pozycja_gracz !== 170 && pozycja_gracz !== 171 && pozycja_gracz !== 172 && pozycja_gracz !== 173 && pozycja_gracz !== 174 && pozycja_gracz !== 175 && pozycja_gracz !== 176 && pozycja_gracz !== 177 && pozycja_gracz !== 178 && pozycja_gracz !== 179) {
                tab[pozycja_gracz].classList.remove('gracz')
                pozycja_gracz = pozycja_gracz + 15
                tab[pozycja_gracz].classList.add('gracz')
                console.log("pozycja gracza to:", pozycja_gracz)
            } else {
                console.log('nie mozesz dalej pojsc')
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


//var powtarzanie_wroga = setInterval(poruszanie_wroga, 1000);






//strzelanie pociskiem tylko pojawianie sie pocisku   i poruszanie pocisku       i
//                                                                             j k l
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

document.addEventListener("keydown", pocisk_i);
document.addEventListener("keydown", pocisk_k);
document.addEventListener("keydown", pocisk_j);
document.addEventListener("keydown", pocisk_l);

function pocisk_i(event) {  //poruszanie pocisku w gore
    if (event.key === "i" && !isBulletOnScreen) {
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


function pocisk_k(event) {   //poruszanie pocisku w dol
    if (event.key === "k" && !isBulletOnScreen) {
        isBulletOnScreen = true;
        pozycja_pocisku = pozycja_gracz + 15;
        console.log("pocisk pojawia sie: ", pozycja_pocisku);
        tab[pozycja_pocisku].classList.add("pocisk");

        let intervalId = setInterval(function () {
            if (pozycja_pocisku < 165) {
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
                    pozycja_pocisku += 15;
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

function pocisk_j(event) {  //poruszanie pocisku w lewo
    if (event.key === "j" && !isBulletOnScreen) {
        isBulletOnScreen = true;
        pozycja_pocisku = pozycja_gracz -1;
        console.log("pocisk pojawia sie: ", pozycja_pocisku);
        tab[pozycja_pocisku].classList.add("pocisk");

        let intervalId = setInterval(function () {
            if (pozycja_pocisku !== 0 && pozycja_pocisku !== 15 && pozycja_pocisku !== 30 && pozycja_pocisku !== 45 && pozycja_pocisku !== 60 && pozycja_pocisku !== 75 && pozycja_pocisku !== 90 && pozycja_pocisku !== 105 && pozycja_pocisku !== 120 && pozycja_pocisku !== 135 && pozycja_pocisku !== 150 && pozycja_pocisku !== 165) {
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
                    pozycja_pocisku -= 1;
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

function pocisk_l(event) {  //poruszanie pocisku w prawo
    if (event.key === "l" && !isBulletOnScreen) {
        isBulletOnScreen = true;
        pozycja_pocisku = pozycja_gracz +1;
        console.log("pocisk pojawia sie: ", pozycja_pocisku);
        tab[pozycja_pocisku].classList.add("pocisk");

        let intervalId = setInterval(function () {
            if (pozycja_pocisku !== 14 && pozycja_pocisku !== 29 && pozycja_pocisku !== 44 && pozycja_pocisku !== 59 && pozycja_pocisku !== 74 && pozycja_pocisku !== 89 && pozycja_pocisku !== 104 && pozycja_pocisku !== 119 && pozycja_pocisku !== 134 && pozycja_pocisku !== 149 && pozycja_pocisku !== 164 && pozycja_pocisku !== 179) {
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
                    pozycja_pocisku += 1;
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
    info.innerHTML = punkty;
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




