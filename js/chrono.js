var age = parseInt($(".age").html());
var taille = parseInt($(".taille").html());

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
<<<<<<< HEAD
    taille = taille + 2;
    if (age>=3){
    taille=taille +20;    
    }

}

//si l'age est <3  alors  ajoute +20cm 
//   if ( age <3 )
//     add 20 cm
// else if ( 4<age>12)
//     add 5 cm
// else if (13<age>17)
//     add 2 cm
// else (71<age>100)
//     sous 0,1 cm//


=======

    if (age <= 3) {
        taille = taille + 20;
    } else if (age <= 12) {
        taille = taille + 5;
    } else if (age <= 17) {
        taille = taille + 2;
    } else if (age <= 70) {
        taille = taille + 0;
    } else {
        taille = taille - 0.1;
    };
};
>>>>>>> 782e6ea8dc4d7e77c8c887136a2a9178ba703273
