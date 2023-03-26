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

//console.log(tab);

//wyswietlanie wrogow
/*
var wrogowie = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
 
function rysuj_wrogow(){
    for(let i=o;i<wrogowie.length;i++){
        tab[wrogowie[i]].classList.add('invader')
    }
}
*/

//rysowanie wrogow
for (var i = 4; i < 11; i++) {  //dodajemy 1 linmijke wrogow
    tab[i].classList.add('wrog')
}


for (var i = 19; i < 26; i++) {  //dodajemy 2 linmijke wrogow
    tab[i].classList.add('wrog')
}


for (var i = 34; i < 41; i++) {  //dodajemy 3 linmijke wrogow
    tab[i].classList.add('wrog')
}

//rysowanie gracz 
var pozycja_gracz = 157  //pozycja gracz ana samym poczatku

tab[pozycja_gracz].classList.add('gracz')

//dodanie poruszania sie gracza na prawo i lewo za pomoca a i d   // od 150 do 164
document.addEventListener("keydown", prawo)
document.addEventListener("keydown", lewo)

function prawo(event) {

    if (event.key === "d") {  //poruszanie sie w prawo
        if( pozycja_gracz<=163){
        tab[pozycja_gracz].classList.remove('gracz')
        pozycja_gracz++
        tab[pozycja_gracz].classList.add('gracz')
        console.log("pozycja gracza to:" , pozycja_gracz)
        }else{
            console.log("nie mozesz dalej isc")
        }
    }
}

function lewo(event) {
    if (event.key === "a") {  //poruszanie sie w prawo
        if(pozycja_gracz>=151){
        tab[pozycja_gracz].classList.remove('gracz')
        pozycja_gracz--
        tab[pozycja_gracz].classList.add('gracz')
        console.log("pozycja gracza to:" , pozycja_gracz)
        }else{
            console.log("nie mozesz dalej isc")
        }
    }
}


//poruszanie sie wrogow PROSTE

var wrogowie = document.querySelectorAll('.wrog');

function poruszajWrogami() {
    
  }

  
  setInterval(poruszajWrogami, 1000);


