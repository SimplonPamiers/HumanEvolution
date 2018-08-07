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