var mapa = document.getElementById("mapa_div");
var info = document.getElementById("info");

var tab=[       1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 , 
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, 1, 1, 1, ,1,1
            ];


         //tworyz nam divy tyle ile elemntow w tablicy tylko tyle  1 czesc
            tab.forEach((element) =>{
                var div_siatki = document.createElement("div");
                div_siatki.className="siatka";
                mapa.appendChild(div_siatki);
            })
            

            //teraz przypisujemy utworzone div do tablicy
            var elementy = document.querySelectorAll('.siatka')
            //var tab
            tab.length = 0;
            for( let i = 0; i< elementy.length; i++){
                tab.push(elementy[i]);
            }

            console.log(tab);

            //wyswietlanie wrogow
            /*
            var wrogowie = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
            
            function rysuj_wrogow(){
                for(let i=o;i<wrogowie.length;i++){
                    tab[wrogowie[i]].classList.add('invader')
                }
            }
*/
            //rysowanie gracz 

            tab[160].classList.add('gracz')

            console.log()



