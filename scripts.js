$(document).ready(()=>{

    const main = document.getElementsByTagName("main")[0];

    let squars = ""
    for(i = 0;i<10;i++){
        squars += "<section class='static'><article></article><article ></article><article></article><article></article></section>";
    }
    main.innerHTML = squars;  

    var clicks = 0;
    $("article").on('click', function(){
        if(clicks == 0){
                $(this).css('background-color', 'black');
                $(this).css('opacity', '100%');
                 clicks++;
        }
        
        else{
            $(this).removeAttr('style');    
            clicks = 0;    
        }
    })

    var counter = 0;
    var articles = $('article');       
    $("img").on('click', function(){
            switch(counter){

                case 0:
                    $(articles[11]).fadeTo("slow", 0.9);
                    counter++;
                    break;
                case 1:
                    $(articles[11]).fadeTo("slow", 0.7);
                    counter++;
                    break;
                
                case 2:
                    $(articles[11]).fadeTo("slow", 0.5);
                    counter++;
                    break;
                case 3:
                    $(articles[11]).fadeTo("slow", 0.3);
                    counter++;
                    break;
                case 4:
                    $(articles[11]).fadeTo("slow", 0.0);
                    counter++;
                    break;
                default:
                    $(articles[11]).fadeTo("slow", 1.0);
                    counter = 0;
                    break;
            }         
    })
        
   

    
})




