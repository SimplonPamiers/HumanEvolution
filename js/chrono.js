var age = parseInt($(".age").html());
var taille = parseInt($(".taille").html());

function chrono(){
    var year = parseInt($(".chrono").html());
    
    var chrono = setInterval(function(){
        $(".chrono").html(year);
        evolution();
        year++;
        if(year>2000){
            clearInterval(chrono);
        }
    }, 100);
}

function evolution() {
    $(".age").html(age + ' ans / ');
    $(".taille").html(taille + ' cm');
    age++;
    taille = taille + 2;
}