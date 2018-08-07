var age = parseInt($(".age").html());
var taille = parseInt($(".taille").html());
var sexe = $(".sexe").html().substring(0,5);


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

    if (age <= 3) {
        taille = taille + 20;
        $(".img").attr('src', 'img/bebe.svg');
    } else if (age <= 12) {
        taille = taille + 5;
        $(".img").attr('src', 'img/enfant.svg');
    } else if (age <= 17) {
            taille = taille + 2;
            $(".img").attr('src', 'img/' + sexe + 'A.svg');
    } else if (age <= 50) {
        taille = taille + 0;
        $(".img").attr('src', 'img/' + sexe + 'J.svg');
    }   else if (age <= 70) {
        taille = taille + 0;
        $(".img").attr('src', 'img/' + sexe + 'M.svg');
    } else {
        taille = taille - 0.1;
        $(".img").attr('src', 'img/' +sexe + 'V.svg');
    };
};