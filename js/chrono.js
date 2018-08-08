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
            avatar.birthSize = (Math.random() * (57 - 42) + 42).toFixed(1);
            avatar.growth = Math.random() * (1.2 - 0.8) + 0.8;
            avatar.gender = genderType[Math.floor(Math.random()*2)]
            // console.log('avatar',i,' ',avatar);
            avatars.push(avatar)
        }
        return avatars
    }

    function createCells(obj) {

        obj.map((obj,i) => {
            $('.wrapper').append("<div class='grid_col'><div id='cell#"+i+"' class='row'><img id=img#'"+i+"' class='img' src = 'img/bebe.svg'/></div><div class='row responsive_row'><span class='sexe'>"+obj.gender+" / </span><span class='age'>"+obj.age+" ans /</span><span class='taille'>"+obj.birthSize+"</span></div></div>");
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

    console.log('evolution age',object.age);
    console.log('evolution birthSize',object.birthSize);
    
    let age = object.age;
    console.log('age',age);
    let taille = object.birthSize;
    let i = object.num
    age++;
    console.log('age++',age);

    switch (age){
        case (age == object.lifeSpan) :
            $('#img#'+i).attr('src', 'img/rip.svg');
            age = object.lifeSpan;
            break;
        case (age <= 3) :
            taille = taille + (20*object.growth);
            $('#img#'+i).attr('src', 'img/bebe.svg');
            break;
        case (3 > age <= 12) :
            taille = taille + (5*object.growth);
            $('#img#'+i).attr('src', 'img/enfant.svg');
            break;
        case (12 > age <= 17) :
            taille = taille + 2;
            $('#img#'+i).attr('src', 'img/' + object.gender + 'A.svg');
            break;
        case (17 > age <= 50) :
            $('#img#'+i).attr('src', 'img/' + sexe + 'J.svg');
            break;
        case (50 > age <= 70) :
            $('#img#'+i).attr('src', 'img/' + sexe + 'M.svg');
            break;
        case (70 > age) :
            $('#img#'+i).attr('src', 'img/' + sexe + 'V.svg');
            break;
        default:
            console.log('evolution : no object found');
    }
};
