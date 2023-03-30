$(document).ready(function(){   
    $("#carrossel").slick({
        autoplay:true,
    });

    $(".mode_button").click(function(){
        $(".mode_buttonInterno").toggleClass("ativo");
        $(".container").toggleClass("dark");
        $("#header").toggleClass("dark");
    });
})