//My version
var chrono_content = 1900;
$( ".chrono" ).html(chrono_content);

$( ".btn" ).click(function chrono() 
    {
        var inter = setInterval(function()
        {
            if (chrono_content < 2000) 
            { 
                chrono_content++;
                $( ".chrono" ).html(chrono_content);
            }
            else
            {
            clearInterval(inter);
            }
        }, 100);
    });      