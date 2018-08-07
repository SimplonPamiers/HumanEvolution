function chrono(){
    var year = parseInt($(".chrono").html());
    
    var chrono = setInterval(function(){
        $(".chrono").html(year);
        year++;
        if(year==2001){
            clearInterval(chrono);
        }
    }, 100);
}
