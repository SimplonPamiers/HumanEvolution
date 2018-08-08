$(document).ready(function () {

    async function createAvatars() {
        const avatars = [];
        const genderType = ['Homme','Femme'];
        let i
        for (i = 1; i < 10; i++) {
            let avatar = {};
            avatar.num = i;
            avatar.age = 0;
            avatar.lifeSpan= Math.floor(Math.random()*100);
            avatar.height = (Math.random() * (57 - 42) + 42).toFixed(1);
            avatar.growth = Math.random() * (1.2 - 0.8) + 0.8;
            avatar.gender = genderType[Math.floor(Math.random()*2)]
            // console.log('avatar',i,' ',avatar);
            avatars.push(avatar)
        }
        return avatars
    }

    function createCells(obj) {

        obj.map((obj,i) => {
            $('.wrapper').append("<div class='grid_col'><div id='cell#"+i+"' class='row'><img id=img#'"+i+"' class='img' src = 'img/bebe.svg'/></div><div class='row responsive_row'><span id='sex#"+i+"'class='sexe'>"+obj.gender+" / </span><span class='age'>"+obj.age+" ans /</span><span class='taille'>"+obj.height+"</span></div></div>");
        })
    }

    createAvatars().then(res => {
        console.log('response is true',res)
        createCells(res)
        sessionStorage.setItem('avatars', JSON.stringify(res));
        console.log('sessionStorage',sessionStorage.getItem('avatars'));
    });

});

// $( ".btn" ).click(function (newAvatars) {
//     console.log('click on chrono');
//     chrono(newAvatars);
// });

function chrono() {
    console.log('click on chrono');
    var year = parseInt($(".chrono").html());
    const avatarList = JSON.parse(sessionStorage.getItem('avatars'));
    console.log('avatarsObject',avatarList);

    var chrono = setInterval(function() {
        $(".chrono").html(year);

        avatarList.map((avatar) => {
            evolution(avatar);
        })

        year++;
        if (year > 2000) {
            clearInterval(chrono);
        }
    }, 100)

}

function evolution(object) {
    // console.log('evolution num %s /',object.num);
    // console.log('evolution age %s /',object.age);
    // console.log('evolution height %s /',object.height);
    
    object.age++;
    $('#sex#'+object.num).html(object.age);


    if (object.age == object.lifeSpan){
        $('#img#'+object.num).attr('src', 'img/rip.svg');
        object.age = object.lifeSpan;
        console.log('avatar %s is dead at age %s / lifespan was %s',object.num, object.age, object.lifeSpan)
    }
    else if (object.age <= 3) {
        object.height = object.height + (20*object.growth);
        $('#img#'+object.num).attr('src', 'img/bebe.svg');
    }
    else if (3 > object.age <= 12) {
        object.height = object.height + (5*object.growth);
        $('#img#'+object.num).attr('src', 'img/enfant.svg');
    }
    else if (12 > object.age <= 17) {
        object.height = object.height + 2;
        $('#img#'+object.num).attr('src', 'img/' + object.gender + 'A.svg');

    }
    else if (17 > object.age <= 50) {
        $('#img#'+object.num).attr('src', 'img/' + sexe + 'J.svg');

    }
    else if (50 > object.age <= 70) {
        $('#img#'+object.num).attr('src', 'img/' + sexe + 'M.svg');       
    }
    else {
        $('#img#'+object.num).attr('src', 'img/' + sexe + 'V.svg');
    }

};
