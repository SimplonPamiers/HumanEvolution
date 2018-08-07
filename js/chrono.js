function finish() {
    clearInterval(intervalId);
    $(".chrono").html("2000");
}

function changeDate() {
    counter++;
    if (counter == 2000) finish();
    else {
        $(".chrono").html(counter);
    }
}

function start() {
    $(".chrono").html("1900");
    counter = parseInt($(".chrono").html());
    intervalId = setInterval(changeDate, 100);
}