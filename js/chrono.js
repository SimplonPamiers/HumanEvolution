$(document).ready(function () {

    async function createAvatars() {
        const avatars = [];
        const genderType = ['Homme','Femme'];
        let i
        for (i = 0; i < 9; i++) {
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
            $('.wrapper').append("<div class='grid_col'><div id='cell_"+i+"' class='row'><img id='img_"+i+"' class='img' src = 'img/bebe.svg'/></div><div class='row responsive_row'><span class='sexe'>"+obj.gender+" / </span><span id='age_"+i+"' class='age'>"+obj.age+" ans /</span><span id='height_"+i+"' class='taille'>"+obj.height+"</span></div></div>");
        })
    }

    createAvatars().then(res => {
        console.log('response is true',res)
        createCells(res)
        sessionStorage.setItem('avatars', JSON.stringify(res));
        console.log('sessionStorage',sessionStorage.getItem('avatars'));
    });

});

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
        if (year > 1903) {
            clearInterval(chrono);
        }

    }, 100)
}

function evolution(object) {
    let taille = $('#height_'+object.num).text()
    console.log('taille avatar %s = %s',object.num, taille)
    object.age++;
    $('#age_'+object.num).html(object.age + ' ans / ');
    $('#height_'+object.num).html(taille + ' cm /');
    console.log('growth is %s, ',object.growth)

    if (object.age < object.lifeSpan ) {
    
        if (object.age <= 3) {            
        taille = taille + (20*object.growth);
        $('#img_'+object.num).attr('src', 'img/bebe.svg');
        console.log('taille',taille)
        }
        else if (object.age <= 12){
            taille = taille + (5*object.growth);
            $('#img_'+object.num).attr('src', 'img/enfant.svg');
            console.log('taille',taille)
        }
        else if (object.age <= 17){
            taille = taille + 2;
            $('#img_'+object.num).attr('src', 'img/' + object.gender + 'A.svg');
            console.log('taille',taille)
        }
        else if (object.age <= 50){
            $('#img_'+object.num).attr('src', 'img/' + object.gender + 'J.svg');
        }
        else if (object.age <= 70){
            $('#img_'+object.num).attr('src', 'img/' +  object.gender + 'M.svg');
        } else {
            $('#img_'+object.num).attr('src', 'img/' +  object.gender + 'V.svg');
        }
    } else {
        $('#img_'+object.num).attr('src', 'img/rip.svg');
        object.age = object.lifeSpan;
    }


};
