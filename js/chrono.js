$(document).ready(function () {

    function creationCellule() {
        // Ajoute une div avec le personnage et toutes ses informations
        $('.wrapper').append("<div class='grid_col'><div class='row'><img class='img' src='img/bebe.svg'/></div><div class='row responsive_row'><span class='sexe'></span><span class='age'>0 ans /</span><span class='taille'></span></div></div>");
    }

    // Boucle for pour lancer la fonction 9 fois, n étant une variable permettant de vérifier à combien de case nous en sommes.
    for (n = 0; n < 9; n++) {
        creationCellule();   
    }

    lifeSpan = Math.floor(Math.random()*100);
    console.log ('lifespan', lifeSpan);
    
    birthSize = (Math.random() * (57 - 42) + 42).toFixed(1);
    console.log('birthSize',birthSize); 
    
    growth = Math.random() * (1.2 - 0.8) + 0.8;
    console.log('growth',growth);

    var sexArray = ['Homme /','Femme /'];
    genre = sexArray[Math.floor(Math.random()*2)];
    console.log(genre);   
    
    $(".taille").html(birthSize + ' cm');
    $(".sexe").html(genre);
    age = parseInt($(".age").html());
    taille = parseFloat($(".taille").html());
    sexe = $(".sexe").html().substring(0,5);
});

function chrono() {
    var year = parseInt($(".chrono").html());
    var chrono = setInterval(function() {
        $(".chrono").html(year);
        evolution();
        year++;
        if (year > 2000) {
            clearInterval(chrono);
        }
    }, 100);
}

function evolution() {
    
    $(".age").html(age + ' ans / ');
    $(".taille").html(taille.toFixed(1) + ' cm');

    age++;


    if (age < lifeSpan ) {
        if (age <= 3) {
            taille = taille + (20*growth);
            $(".img").attr('src', 'img/bebe.svg');
        } else if (age <= 12) {
            taille = taille + (5*growth);
            $(".img").attr('src', 'img/enfant.svg');
        } else if (age <= 17) {
                taille = taille + 2;
                $(".img").attr('src', 'img/' + sexe + 'A.svg');
        } else if (age <= 50) {
            $(".img").attr('src', 'img/' + sexe + 'J.svg');
        }   else if (age <= 70) {
            $(".img").attr('src', 'img/' + sexe + 'M.svg');
        } else {
            taille = taille - 0.1;
            $(".img").attr('src', 'img/' + sexe + 'V.svg');
        };
    } else {
        $(".img").attr('src', 'img/rip.svg');
        age = lifeSpan;
    }
};
