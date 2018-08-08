$(document).ready(function () {

    var newAvatars = [];


    // let avatar1 = creationCellule()[0];
    // let avatar2 = creationCellule()[2];

    // console.log('avatar 1',avatar1 );
    // console.log('avatar 2',avatar2 );

    for (i = 1; i < 10; i++) {
        let avatar;
        avatar = creationCellule()[i];
        let newAvatar = []
        newAvatar.age = avatar.age;
        console.log('avatar.age :',avatar.age)
        newAvatar.lifeSpan= avatar.lifeSpan;
        newAvatar.taille = avatar.taille;
        newAvatar.growth = avatar.growth;
        newAvatar.sexe = avatar.sexe;
        newAvatars.push(newAvatar)
        console.log('NewAvatar',i,' ',avatar)
    }


    function creationCellule() {
        let i
        const avatars = [];

        for (i = 1; i < 10; i++) {

            let avatar = {}

            avatar.lifeSpan = Math.floor(Math.random()*100);
            // console.log ('lifespan avatar#%s, %s',i, avatar.lifeSpan);

            avatar.birthSize = (Math.random() * (57 - 42) + 42).toFixed(1);
            // console.log('birthSize avatar#%s, %s',i,avatar.birthSize); 
            
            avatar.growth = Math.random() * (1.2 - 0.8) + 0.8;
            // console.log('growth avatar#%s, %s',i,avatar.growth);
        
            var sexArray = ['Homme','Femme'];
            avatar.genre = sexArray[Math.floor(Math.random()*2)];
            // console.log('genre avatar#%s, %s',i,avatar.genre);   
            
            $('#cell'+i).find( ".taille" ).html(avatar.birthSize + ' cm');
            $('#cell'+i).find(".sexe").html(avatar.genre);
            avatar.age = 0;

            avatars.push(avatar);

            $('.wrapper').append("<div class='grid_col'><div id='cell#"+i+"' class='row'><img class='img' src='img/bebe.svg'/></div><div class='row responsive_row'><span class='sexe'>"+avatar.genre+"/ </span><span class='age'>"+avatar.age+" ans /</span><span class='taille'>"+avatar.birthSize+"</span></div></div>");
        }
        console.log('Avatars',avatars);   

        return avatars
    }
});

// $( ".btn" ).click(function (newAvatars) {
//     console.log('click on chrono');
//     chrono(newAvatars);
// });

function chrono(newAvatars) {
    console.log('chrono newAvatars',newAvatars);
    console.log('click on chrono');
    var year = parseInt($(".chrono").html());
    var chrono = setInterval(function() {
    $(".chrono").html(year);
        for (i = 1; i < 10; i++) {
            newAvatars[i];
            let age = newAvatars.age;
            let lifeSpan= newAvatars.lifeSpan;
            let taille = newAvatars.taille;
            let growth = newAvatars.growth;
            let sexe = newAvatars.sexe;
            evolution(i,age,lifeSpan,taille,growth,sexe);

            console.log('avatar.chrono',age,lifeSpan,taille,growth,sexe)
        }
    year++;
    if (year > 2000) {
        clearInterval(chrono);
    }
    }, 100)

}

function evolution(i,age,lifeSpan,taille,growth,sexe) {

    age++;

    if (age < lifeSpan ) {
        if (age <= 3) {
            taille = taille + (20*growth);
            $('#cell#'+i).find(".img").attr('src', 'img/bebe.svg');
        } else if (age <= 12) {
            taille = taille + (5*growth);
            $('#cell#'+i).find(".img").attr('src', 'img/enfant.svg');
        } else if (age <= 17) {
                taille = taille + 2;
                $('#cell#'+i).find(".img").attr('src', 'img/' + sexe + 'A.svg');
        } else if (age <= 50) {
            $('#cell#'+i).find(".img").attr('src', 'img/' + sexe + 'J.svg');
        }   else if (age <= 70) {
            $('#cell#'+i).find(".img").attr('src', 'img/' + sexe + 'M.svg');
        } else {
            taille = taille - 0.1;
            $('#cell#'+i).find(".img").attr('src', 'img/' + sexe + 'V.svg');
        };
    } else {
        $('#cell#'+i).find(".img").attr('src', 'img/rip.svg');
        age = lifeSpan;
    }
};
