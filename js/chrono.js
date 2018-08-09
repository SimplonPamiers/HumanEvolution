$(document).ready(function () {

    tabPersonnage = [];

    progress = $('.progress').val();

    function creationCellule(n) {
        $('.row').append("<div class='col-xl-4 col-sm-6 col-12'><div class='card rounded w-100 mb-3' style='width: 18rem;'><img class='card-img-top img img" + n + " m-auto' src='img/bebe.svg'><div class='card-body'><div class='text-center'><span class='sexe" + n + "'></span><span>&nbsp;/&nbsp;</span><span class='age" + n + "'>0</span><span>&nbsp;ans&nbsp;/&nbsp;</span><span class='taille" + n + "'></span><span>&nbsp;cm</span></div></div></div></div>");

        lifeSpan = Math.floor(Math.random() * 100);
        birthSize = (Math.random() * (57 - 42) + 42).toFixed(1);
        growth = Math.random() * (1.2 - 0.8) + 0.8;

        const sexArray = ['Homme', 'Femme'];
        genre = sexArray[Math.floor(Math.random() * 2)];
    }

    for (n = 0; n < 9; n++) {
        creationCellule(n);
        $(".taille" + n).html(birthSize);
        $(".sexe" + n).html(genre);
        let taille = parseFloat($(".taille" + n).html());
        let sexe = $(".sexe" + n).html();
        let all = [0, taille, sexe, growth, lifeSpan];
        tabPersonnage.push(all);
    }
});

function evolution(n) {
    $(".age" + n).html(tabPersonnage[n][0]);
    $(".taille" + n).html(tabPersonnage[n][1].toFixed(1));

    tabPersonnage[n][0]++;

    switch (true) {

        case tabPersonnage[n][0] < tabPersonnage[n][4]:
            switch (true) {

                case tabPersonnage[n][0] <= 3:
                    tabPersonnage[n][1] = tabPersonnage[n][1] + (20 * growth);
                    $(".img" + n).attr('src', 'img/bebe.svg');
                    break;

                case tabPersonnage[n][0] <= 12:
                    tabPersonnage[n][1] = tabPersonnage[n][1] + (5 * growth);
                    $(".img" + n).attr('src', 'img/enfant.svg');
                    break;
                case tabPersonnage[n][0] <= 17:
                    tabPersonnage[n][1] = tabPersonnage[n][1] + 2;
                    $(".img" + n).attr('src', 'img/' + tabPersonnage[n][2] + 'A.svg');
                    break;
                case tabPersonnage[n][0] <= 50:
                    $(".img" + n).attr('src', 'img/' + tabPersonnage[n][2] + 'J.svg');
                    break;
                case tabPersonnage[n][0] <= 70:
                    $(".img" + n).attr('src', 'img/' + tabPersonnage[n][2] + 'M.svg');
                    break;

                default:
                    tabPersonnage[n][1] = tabPersonnage[n][1] - 0.1;
                    $(".img" + n).attr('src', 'img/' + tabPersonnage[n][2] + 'V.svg');
                    break;
            }
            break;

        default:
            $(".img" + n).attr('src', 'img/rip.svg');
            tabPersonnage[n][0] = tabPersonnage[n][4];
            break;
    }
}

function chrono() {
    let year = parseInt($(".chrono").html());
    let yearMax = 2000;
    let chrono = setInterval(function () {
        $(".chrono").html(year);
        for (n = 0; n < 9; n++) {
            evolution(n);
        }
        year++;
        progress = progress + 1 / 100 * yearMax;
        $('.progress').val(progress).attr('max', yearMax);
        if (year > yearMax) {
            clearInterval(chrono);
            $('.rejouer').removeClass('d-none');
        }
    }, 100);
}