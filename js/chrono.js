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
            $('.wrapper').append("<div class='grid_col'><div id='cell#"+i+"' class='row'><img id='img#"+i+"' class='img' src = 'img/bebe.svg'/></div><div class='row responsive_row'><span class='sexe'>"+obj.gender+" / </span><span id='age#"+i+"' class='age'>"+obj.age+" ans /</span><span class='taille'>"+obj.height+"</span></div></div>");
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
    $('#age#'+object.num).html(object.age);


    if (object.age == object.lifeSpan){
        $('#img#'+object.num).attr('src', 'img/rip.svg');
        object.age = object.lifeSpan;
        console.log('avatar %s is dead at age %s / lifespan was %s',object.num, object.age, object.lifeSpan)
        console.log('image is %s',JSON.stringify($('#img#'+object.num).attr('src', 'img/rip.svg')))


    }
    else {


    switch (true){
        case (object.age <= 3) :
            object.height = object.height + (20*object.growth);
            $('#img#'+object.num).attr('src', 'img/bebe.svg');

            console.log('age <= 3 for avatar %s',object.num)

            break;
        case (object.age <= 12) :
            object.height = object.height + (5*object.growth);
            $('#img#'+object.num).attr('src', 'img/enfant.svg');
            console.log('age <= 12 for avatar %s',object.num)

            break;
        case (object.age <= 17) :
            object.height = object.height + 2;
            $('#img#'+object.num).attr('src', 'img/' + object.gender + 'A.svg');
            console.log('age <= 17 for avatar %s',object.num)

            break;
        case (object.age <= 50) :
            $('#img#'+object.num).attr('src', 'img/' + object.gender + 'J.svg');
            console.log('age <= 50 for avatar %s',object.num)

            break;
        case (object.age <= 70) :
            $('#img#'+object.num).attr('src', 'img/' +  object.gender + 'M.svg');
            console.log('age <= 70 for avatar %s',object.num)

            break;
        case (object.age <= 100) :
            $('#img#'+object.num).attr('src', 'img/' +  object.gender + 'V.svg');
            console.log('age <= 100 for avatar %s',object.num)

            break;
        default:
            console.log('evolution : no object found');
    }
}
};
