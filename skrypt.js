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

var pozycja_wroga = Math.floor(Math.random() * 6) + 80;  //pozycja wroga ana samym poczatku
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

    if (event.key === "d") {  //poruszanie sie w lewo

        if (pozycja_gracz !== 14 && pozycja_gracz !== 29 && pozycja_gracz !== 44 && pozycja_gracz !== 59 && pozycja_gracz !== 74 && pozycja_gracz !== 89 && pozycja_gracz !== 104 && pozycja_gracz !== 119 && pozycja_gracz !== 134 && pozycja_gracz !== 149 && pozycja_gracz !== 164 && pozycja_gracz !== 179) {
            tab[pozycja_gracz].classList.remove('gracz')
            pozycja_gracz++
            if (pozycja_gracz !== pozycja_wroga) {

                tab[pozycja_gracz].classList.add('gracz')
                console.log("pozycja gracza to:", pozycja_gracz)

            } else {
                tab[pozycja_gracz].classList.remove('gracz')
                tab[pozycja_wroga].classList.remove('wrog')
                clearInterval(powtarzanie_wroga);
                
                
                alert("przegrales ")
            }
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
            if (pozycja_gracz !== pozycja_wroga) {

                tab[pozycja_gracz].classList.add('gracz')
                console.log("pozycja gracza to:", pozycja_gracz)

            } else {
                tab[pozycja_gracz].classList.remove('gracz')
                tab[pozycja_wroga].classList.remove('wrog')
                clearInterval(powtarzanie_wroga);
                
                
                alert("przegrales ")
            }
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

            if (pozycja_gracz !== pozycja_wroga) {
                tab[pozycja_gracz].classList.add('gracz')

                console.log("pozycja gracza to:", pozycja_gracz)
            } else {
                tab[pozycja_gracz].classList.remove('gracz')
                tab[pozycja_wroga].classList.remove('wrog')
                clearInterval(powtarzanie_wroga);
                
                
                alert("przegrales ")                                           //DOKONCZYC TEN ELEMENT I ZROBIC TO W INNYCH
            }

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

            if (pozycja_gracz !== pozycja_wroga) {

                tab[pozycja_gracz].classList.add('gracz')
                console.log("pozycja gracza to:", pozycja_gracz)

            } else {
                tab[pozycja_gracz].classList.remove('gracz')
                tab[pozycja_wroga].classList.remove('wrog')
                clearInterval(powtarzanie_wroga);
               
                alert("przegrales ")
            }
        }
        else {
            console.log('nie mozesz dalej pojsc')
        }
    }

}


//poruszanie sie wroga




function poruszanie_wroga() {
    var przesuniecie_wroga = Math.floor(Math.random() * 3) + 1;
    console.log(przesuniecie_wroga)

    if (pozycja_wroga == pozycja_gracz) {
        clearInterval(powtarzanie_wroga);
        tab[pozycja_wroga].classList.remove('wrog')
        alert("Przegrales")

    }
    else {
        if (pozycja_wroga < pozycja_gracz) {        //wrog jest powyzej gracz
            if (przesuniecie_wroga == 1) {
                if (pozycja_wroga !== 0 && pozycja_wroga !== 15 && pozycja_wroga !== 30 && pozycja_wroga !== 45 && pozycja_wroga !== 60 && pozycja_wroga !== 75 && pozycja_wroga !== 90 && pozycja_wroga !== 105 && pozycja_wroga !== 120 && pozycja_wroga !== 135 && pozycja_wroga !== 150 && pozycja_wroga !== 165) {
                    tab[pozycja_wroga].classList.remove('wrog')
                    pozycja_wroga -= 1;
                    tab[pozycja_wroga].classList.add('wrog')
                }
            } else if (przesuniecie_wroga == 2) {
                if (pozycja_wroga != 165 && pozycja_wroga != 166 && pozycja_wroga !== 167 && pozycja_wroga !== 168 && pozycja_wroga !== 169 && pozycja_wroga !== 170 && pozycja_wroga !== 171 && pozycja_wroga !== 172 && pozycja_wroga !== 173 && pozycja_wroga !== 174 && pozycja_wroga !== 175 && pozycja_wroga !== 176 && pozycja_wroga !== 177 && pozycja_wroga !== 178 && pozycja_wroga !== 179) {
                    tab[pozycja_wroga].classList.remove('wrog')
                    pozycja_wroga += 15;
                    tab[pozycja_wroga].classList.add('wrog')

                }
            } else if (przesuniecie_wroga == 3) {
                if (pozycja_wroga !== 14 && pozycja_wroga !== 29 && pozycja_wroga !== 44 && pozycja_wroga !== 59 && pozycja_wroga !== 74 && pozycja_wroga !== 89 && pozycja_wroga !== 104 && pozycja_wroga !== 119 && pozycja_wroga !== 134 && pozycja_wroga !== 149 && pozycja_wroga !== 164 && pozycja_wroga !== 179) {
                    tab[pozycja_wroga].classList.remove('wrog')
                    pozycja_wroga += 1;
                    tab[pozycja_wroga].classList.add('wrog')
                }
            }
        } else if (pozycja_wroga > pozycja_gracz) {       //wrog jest ponizej gracza

            if (pozycja_wroga == 1) {
                if (pozycja_wroga !== 0 && pozycja_wroga !== 15 && pozycja_wroga !== 30 && pozycja_wroga !== 45 && pozycja_wroga !== 60 && pozycja_wroga !== 75 && pozycja_wroga !== 90 && pozycja_wroga !== 105 && pozycja_wroga !== 120 && pozycja_wroga !== 135 && pozycja_wroga !== 150 && pozycja_wroga !== 165) {
                    tab[pozycja_wroga].classList.remove('wrog')
                    pozycja_wroga -= 1;
                    tab[pozycja_wroga].classList.add('wrog')
                }
            } else if (przesuniecie_wroga == 2) {
                if (pozycja_wroga !== 0 && pozycja_wroga !== 1 && pozycja_wroga !== 2 && pozycja_wroga !== 3 && pozycja_wroga !== 4 && pozycja_wroga !== 5 && pozycja_wroga !== 6 && pozycja_wroga !== 7 && pozycja_wroga !== 8 && pozycja_wroga !== 9 && pozycja_wroga !== 10 && pozycja_wroga !== 11 && pozycja_wroga !== 12 && pozycja_wroga !== 13 && pozycja_wroga !== 14) {
                    tab[pozycja_wroga].classList.remove('wrog')
                    pozycja_wroga -= 15;
                    tab[pozycja_wroga].classList.add('wrog')
                }
            } else if (przesuniecie_wroga == 3) {
                if (pozycja_wroga !== 14 && pozycja_wroga !== 29 && pozycja_wroga !== 44 && pozycja_wroga !== 59 && pozycja_wroga !== 74 && pozycja_wroga !== 89 && pozycja_wroga !== 104 && pozycja_wroga !== 119 && pozycja_wroga !== 134 && pozycja_wroga !== 149 && pozycja_wroga !== 164 && pozycja_wroga !== 179) {
                    tab[pozycja_wroga].classList.remove('wrog')
                    pozycja_wroga += 1;
                    tab[pozycja_wroga].classList.add('wrog')
                }
            }

        }
    }

}


var powtarzanie_wroga = setInterval(poruszanie_wroga, 300);


//STRZELANIE POCISKAMI PRZEZ WROGA


function generujLosowaLiczbe() {
    return Math.floor(Math.random() * 4) + 1;
}

setInterval(() => {
    var losowanie_pocisk = generujLosowaLiczbe();
    console.log("wygenerowana losowa liczba pocisku: ", losowanie_pocisk);





    var pozycja_pocisku_wroga

    let isBulletOnScreen_wrog = false;

    //poruszanie pocisku wroga w gore
    if (losowanie_pocisk == 1 && !isBulletOnScreen_wrog) {
        isBulletOnScreen_wrog = true;
        pozycja_pocisku_wroga = pozycja_wroga - 15;
        console.log("pocisk pojawia sie pocisk wroga: ", pozycja_pocisku_wroga);
        tab[pozycja_pocisku_wroga].classList.add("pocisk_wroga");

        let intervalId_wrog = setInterval(function () {
            if (pozycja_pocisku_wroga > 15) {
                // Sprawdzanie kolizji pomiędzy pociskiem a wrogiem
                if (pozycja_pocisku_wroga === pozycja_gracz) {
                    console.log("Trafiony");

                    clearInterval(intervalId_wrog);
                    tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");

                    clearInterval(powtarzanie_wroga);
                    tab[pozycja_wroga].classList.remove('wrog')

                    tab[pozycja_gracz].classList.remove('gracz')

                    isBulletOnScreen_wrog = false;

                    alert('przegrales trafil cie pocisk')
                }else if(pozycja_pocisku==pozycja_pocisku_wroga){
                    tab[pozycja_pocisku].classList.remove('pocisk')
                    tab[pozycja_pocisku_wroga].classList.remove('pocisk_wroga')
                
                
                 }else {
                    tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");
                    pozycja_pocisku_wroga -= 15;
                    console.log("pozycja pocisku wroga: ", pozycja_pocisku_wroga);
                    tab[pozycja_pocisku_wroga].classList.add("pocisk_wroga");
                }
            } else {
                console.log("pocisk wroga nie moze isc dalej");
                clearInterval(intervalId_wrog);
                tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");
                isBulletOnScreen_wrog = false;
            }
        }, 200);
    }



    //poruszanie pocisku wroga w dol
    if (losowanie_pocisk == 2 && !isBulletOnScreen_wrog) {
        isBulletOnScreen_wrog = true;
        pozycja_pocisku_wroga = pozycja_wroga + 15;
        console.log("pocisk pojawia sie: ", pozycja_pocisku_wroga);
        tab[pozycja_pocisku_wroga].classList.add("pocisk_wroga");

        let intervalId_wrog = setInterval(function () {
            if (pozycja_pocisku_wroga < 165) {
                // Sprawdzanie kolizji pomiędzy pociskiem a wrogiem
                if (pozycja_pocisku_wroga === pozycja_gracz) {
                    console.log("Trafiony");

                    clearInterval(intervalId_wrog);
                    tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");

                    clearInterval(powtarzanie_wroga);
                    tab[pozycja_wroga].classList.remove('wrog')

                    tab[pozycja_gracz].classList.remove('gracz')

                    isBulletOnScreen_wrog = false;

                    alert('przegrales trafil cie pocisk')
                }else if(pozycja_pocisku==pozycja_pocisku_wroga){
                    tab[pozycja_pocisku].classList.remove('pocisk')
                    tab[pozycja_pocisku_wroga].classList.remove('pocisk_wroga')
                
                
                 } else {
                    tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");
                    pozycja_pocisku_wroga += 15;
                    console.log("pozycja pocisku: ", pozycja_pocisku_wroga);
                    tab[pozycja_pocisku_wroga].classList.add("pocisk_wroga");
                }
            } else {
                console.log("pocisk wroga nie moze isc dalej");
                clearInterval(intervalId_wrog);
                tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");
                isBulletOnScreen_wrog = false;
            }
        }, 200);
    }


    //poruszanie pocisku wroga w lewo
    if (losowanie_pocisk == 3 && !isBulletOnScreen_wrog) {
        isBulletOnScreen_wrog = true;
        pozycja_pocisku_wroga = pozycja_wroga - 1;
        console.log("pocisk wroga pojawia sie: ", pozycja_pocisku_wroga);
        tab[pozycja_pocisku_wroga].classList.add("pocisk_wroga");

        let intervalId_wrog = setInterval(function () {
            if (pozycja_pocisku_wroga !== 0 && pozycja_pocisku_wroga !== 15 && pozycja_pocisku_wroga !== 30 && pozycja_pocisku_wroga !== 45 && pozycja_pocisku_wroga !== 60 && pozycja_pocisku_wroga !== 75 && pozycja_pocisku_wroga !== 90 && pozycja_pocisku_wroga !== 105 && pozycja_pocisku_wroga !== 120 && pozycja_pocisku_wroga !== 135 && pozycja_pocisku_wroga !== 150 && pozycja_pocisku_wroga !== 165) {
                // Sprawdzanie kolizji pomiędzy pociskiem a wrogiem
                if (pozycja_pocisku_wroga === pozycja_gracz) {
                    console.log("Trafiony");

                    clearInterval(intervalId_wrog);
                    tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");

                    clearInterval(powtarzanie_wroga);
                    tab[pozycja_wroga].classList.remove('wrog')

                    tab[pozycja_gracz].classList.remove('gracz')

                    isBulletOnScreen_wrog = false;

                    alert('przegrales trafil cie pocisk')
                }else if(pozycja_pocisku==pozycja_pocisku_wroga){
                    tab[pozycja_pocisku].classList.remove('pocisk')
                    tab[pozycja_pocisku_wroga].classList.remove('pocisk_wroga')
                
                
                 } else {
                    tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");
                    pozycja_pocisku_wroga -= 1;
                    console.log("pozycja pocisku wroga: ", pozycja_pocisku_wroga);
                    tab[pozycja_pocisku_wroga].classList.add("pocisk_wroga");
                }
            } else {
                console.log("pocisk wroga nie moze isc dalej");
                clearInterval(intervalId_wrog);
                tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");
                isBulletOnScreen_wrog = false;
            }
        }, 200);
    }


    //poruszanie pocisku wroga w prawo
    if (losowanie_pocisk == 4 && !isBulletOnScreen_wrog) {
        isBulletOnScreen_wrog = true;
        pozycja_pocisku_wroga = pozycja_wroga + 1;
        console.log("pocisk wroga pojawia sie: ", pozycja_pocisku_wroga);
        tab[pozycja_pocisku_wroga].classList.add("pocisk_wroga");

        let intervalId_wrog = setInterval(function () {
            if (pozycja_pocisku_wroga !== 14 && pozycja_pocisku_wroga !== 29 && pozycja_pocisku_wroga !== 44 && pozycja_pocisku_wroga !== 59 && pozycja_pocisku_wroga !== 74 && pozycja_pocisku_wroga !== 89 && pozycja_pocisku_wroga !== 104 && pozycja_pocisku_wroga !== 119 && pozycja_pocisku_wroga !== 134 && pozycja_pocisku_wroga !== 149 && pozycja_pocisku_wroga !== 164 && pozycja_pocisku_wroga !== 179) {
                // Sprawdzanie kolizji pomiędzy pociskiem a wrogiem
                if (pozycja_pocisku_wroga === pozycja_gracz) {
                    console.log("Trafiony");

                    clearInterval(intervalId_wrog);
                    tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");

                    clearInterval(powtarzanie_wroga);
                    tab[pozycja_wroga].classList.remove('wrog')

                    tab[pozycja_gracz].classList.remove('gracz')

                    isBulletOnScreen_wrog = false;

                    alert('przegrales trafil cie pocisk')
                }else if(pozycja_pocisku==pozycja_pocisku_wroga){
                    tab[pozycja_pocisku].classList.remove('pocisk')
                    tab[pozycja_pocisku_wroga].classList.remove('pocisk_wroga')
                
                
                 } else {
                    tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");
                    pozycja_pocisku_wroga += 1;
                    console.log("pozycja pocisku wroga: ", pozycja_pocisku_wroga);
                    tab[pozycja_pocisku_wroga].classList.add("pocisk_wroga");
                }
            } else {
                console.log("pocisk wroga nie moze isc dalej");
                clearInterval(intervalId_wrog);
                tab[pozycja_pocisku_wroga].classList.remove("pocisk_wroga");
                isBulletOnScreen_wrog = false;
            }
        }, 200);
    }



}, 1000);
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
        pozycja_pocisku = pozycja_gracz - 1;
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
        pozycja_pocisku = pozycja_gracz + 1;
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
    powtarzanie_wroga = setInterval(poruszanie_wroga, 300)
    poruszanie_wroga()
}

function sprawdz_wroga() {
    if (!tab[pozycja_wroga].classList.contains('wrog')) { // sprawdzenie, czy wrog jest na ekranie
        pozycja_wroga = Math.floor(Math.random() * 6) + 80;; // jeśli nie, wylosowanie nowej pozycji wroga
        generuj_wroga(); // i wygenerowanie go na nowej pozycji
    }
}

setInterval(sprawdz_wroga, 100); // sprawdzanie, czy wrog jest na ekranie 




