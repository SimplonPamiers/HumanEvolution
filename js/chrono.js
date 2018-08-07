var age = parseInt($(".age").html());
var taille = parseInt($(".taille").html());
var sexe = parseInt($(".sexe").html())

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
if (sexe===homme){
     if (age <= 3 === ) {
        taille = taille + 20;
        $(".sexe").append(src)
    } else if (age <= 12) {
        taille = taille + 5;
    } else if (age <= 17) {
        taille = taille + 2;
    } else if (age <= 70) {
        taille = taille + 0;
    } else {
        taille = taille - 0.1;
    };
}
else{
}
   
function generateAvatar() {
    var lifeSpan = Math.floor(Math.random()*100);
    console.log ('lifespan', lifeSpan);
    
    var birthSize = (Math.random() * (57 - 42) + 42).toFixed(1);
    console.log('birthSize',birthSize); 
    
    var growth = Math.random() * (1.2 - 0.8) + 0.8;
    console.log('growth',growth);

    var sexArray = ['Homme','Femme'];
    var genre = sexArray[Math.floor(Math.random()*2)];
    console.log(genre);    
}

generateAvatar();


