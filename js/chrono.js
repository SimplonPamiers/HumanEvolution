$(document).ready(function () {
    async function createAvatars() { // Asynchronous function returning object (e.g. list of avatars) as a promise
        const avatars = [];
        const genderType = ['Homme','Femme'];
        let i
        for (i = 0; i < 9; i++) {
            let avatar = {};
            avatar.num = i;
            avatar.age = 0;
            avatar.lifeSpan= Math.floor(Math.random()*100); // Lifespan between 0 and 100 years
            avatar.height = (Math.random() * (57 - 42) + 42).toFixed(1); // Birth size of the avatar
            avatar.growth = Math.random() * (1.2 - 0.8) + 0.8; // Growth factor between 0.8 and 1.2
            avatar.gender = genderType[Math.floor(Math.random()*2)] // Generate an integer : 0 or 1 and determines if 'Man' or 'Woman' according to the index of the array
            avatars.push(avatar) // push the avatar in the avatars object
        }
        return avatars
    }

    function createCells(objs) {

        objs.map((obj,i) => {// Loop through each object from the list passed as an argument and generate a cell with the corresponding values for age, height and gender + an id for the avatar image and height (used to dynamically change them)
            $('.wrapper').append("<div class='grid_col'><div id='cell_"+i+"' class='row'><img id='img_"+i+"' class='img' src = 'img/bebe.svg'/></div><div class='row responsive_row'><span class='sexe'>"+obj.gender+" / </span><span id='age_"+i+"' class='age'>"+obj.age+" ans /</span><span id='height_"+i+"' class='taille'>"+obj.height+"</span></div></div>");
        })
    }

    createAvatars().then(res => {// Call the createAvatars function and awaits the promise result (e.g. the avatar list object) to create the cells from each avatar property
        console.log('response is true',res)
        createCells(res)
        sessionStorage.setItem('avatars', JSON.stringify(res)); // Store the avatars object in the session storage so that the chrono() function can use it as a parameter
        console.log('sessionStorage',sessionStorage.getItem('avatars'));
    });

});

function chrono() {
    console.log('click on chrono');
    var year = parseInt($(".chrono").html()); // Get the current year value from the html (we use parseInt to transform the html text into number)
    const avatarList = JSON.parse(sessionStorage.getItem('avatars')); // Get the avatar list from the session storage
    console.log('avatarList',avatarList);

    var chrono = setInterval(function() {
        $(".chrono").html(year);

        avatarList.map((avatar) => { // Loop through the avatar list and passes each avatar in the evolution function
            evolution(avatar);
        })

        year++;
        if (year > 2000) { // Stop the timer when we reach year 2000
            clearInterval(chrono);
        }

    }, 100) // amount of time (in milliseconds) between each rendering of the html document (cf. SetInterval function documentation)
}

function evolution(object) {
    let taille = parseInt($('#height_'+object.num).html()); // Get the latest size value from the html document and transforms it into an integer
    console.log('taille avatar %s = %s',object.num, taille)
    object.age++; // Increment the age every time we play the function
    $('#age_'+object.num).html(object.age + ' ans / '); // write the age value in the html document

    if (object.age < object.lifeSpan ) { // Check if avatar is alive
    
        if (object.age <= 3) {            
        taille = taille + (20*object.growth); // Apply the growth factor to the avatar's height
        $('#height_'+object.num).html(parseInt(taille) + ' cm /'); // .toFixed(1)
        }
        else if (object.age <= 12){
            taille = taille + (5*object.growth);
            $('#img_'+object.num).attr('src', 'img/enfant.svg'); // Modify the avatar source image when it reaches age 12
            $('#height_'+object.num).html(parseInt(taille) + ' cm /'); // Remove the height decimals and displays its value in the html document
        }
        else if (object.age <= 17){
            taille = taille + 2;
            $('#img_'+object.num).attr('src', 'img/' + object.gender + 'A.svg'); // Modify the avatar image according to the avatar's age and gender
            $('#height_'+object.num).html(parseInt(taille) + ' cm /'); 
        }
        else if (object.age <= 50){
            $('#img_'+object.num).attr('src', 'img/' + object.gender + 'J.svg');
        }
        else if (object.age <= 70){
            $('#img_'+object.num).attr('src', 'img/' +  object.gender + 'M.svg');
        } else {
            $('#img_'+object.num).attr('src', 'img/' +  object.gender + 'V.svg');
        }
    } else { // Else the avatar is dead
        $('#img_'+object.num).attr('src', 'img/rip.svg');
        object.age = object.lifeSpan; // Prevent the avatar's age to be get updated after its death
    }
};
