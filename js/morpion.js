let aQuiLeTour= 'X';

let joueur1 = 0;
let joueur2 = 0;
let joueur1Element = document.getElementById('joueur1');
let joueur2Element = document.getElementById('joueur2');



const cases = document.querySelectorAll('.case');



// parcour notre tableau de cases
cases.forEach(function (element) {
    // acces a chaque element du tableau (element html)

    // ajoute à l'element un ecouteur d'evenement
    element.addEventListener('click', function () {
        // on change le contenu de l'element sur lequel on a cliquer si le ontenu est vide
        if (element.innerHTML == "") {
            element.innerHTML = aQuiLeTour;
            // on change la valeur a afficher
            if (aQuiLeTour == 'X') {
                aQuiLeTour = 'O';
            }else{
                aQuiLeTour = 'X';
            }
        }
        // raisonnement pour determiner le vainqueur
        //pour joueur X
        if (((cases[0].innerHTML == "X") && (cases[1].innerHTML == "X") && (cases[2].innerHTML == "X")) //--
        || ((cases[3].innerHTML == "X") && (cases[4].innerHTML == "X") && (cases[5].innerHTML == "X")) //__
        || ((cases[0].innerHTML == "X") && (cases[4].innerHTML == "X") && (cases[8].innerHTML == "X"))// \
        || ((cases[0].innerHTML == "X") && (cases[3].innerHTML == "X") && (cases[6].innerHTML == "X"))
        || ((cases[6].innerHTML == "X") && (cases[4].innerHTML == "X") && (cases[2].innerHTML == "X"))
        || ((cases[6].innerHTML == "X") && (cases[7].innerHTML == "X") && (cases[8].innerHTML == "X"))
        || ((cases[1].innerHTML == "X") && (cases[4].innerHTML == "X") && (cases[7].innerHTML == "X"))
        || ((cases[2].innerHTML == "X") && (cases[5].innerHTML == "X") && (cases[8].innerHTML == "X"))) {
            joueur1++;
            joueur1Element.innerHTML = joueur1;
            cases.forEach(function () {
                cases[0].innerHTML = "";
                cases[1].innerHTML = "";
                cases[2].innerHTML = "";
                cases[3].innerHTML = "";
                cases[4].innerHTML = "";
                cases[5].innerHTML = "";
                cases[6].innerHTML = "";
                cases[7].innerHTML = "";
                cases[8].innerHTML = "";
            });
            alert("+ 1 point au joueur X");
            // vider les cases
            


        }//pour joueur O
         else if (((cases[0].innerHTML == "O") && (cases[1].innerHTML == "O") && (cases[2].innerHTML == "O")) //--
        || ((cases[3].innerHTML == "O") && (cases[4].innerHTML == "O") && (cases[5].innerHTML == "O")) //__
        || ((cases[0].innerHTML == "O") && (cases[4].innerHTML == "O") && (cases[8].innerHTML == "O"))// \
        || ((cases[0].innerHTML == "O") && (cases[3].innerHTML == "O") && (cases[6].innerHTML == "O"))
        || ((cases[6].innerHTML == "O") && (cases[4].innerHTML == "O") && (cases[2].innerHTML == "O"))
        || ((cases[6].innerHTML == "O") && (cases[7].innerHTML == "O") && (cases[8].innerHTML == "O"))
        || ((cases[1].innerHTML == "O") && (cases[4].innerHTML == "O") && (cases[7].innerHTML == "O"))
        || ((cases[2].innerHTML == "O") && (cases[5].innerHTML == "O") && (cases[8].innerHTML == "O"))) {
            joueur2++;
            joueur2Element.innerHTML = joueur2;
            cases.forEach(function () {
                cases[0].innerHTML = "";
                cases[1].innerHTML = "";
                cases[2].innerHTML = "";
                cases[3].innerHTML = "";
                cases[4].innerHTML = "";
                cases[5].innerHTML = "";
                cases[6].innerHTML = "";
                cases[7].innerHTML = "";
                cases[8].innerHTML = "";
            });
            alert("+ 1 point au joueur O");
            // vider les cases
        }
    })
});



