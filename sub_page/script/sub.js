$(document).ready(function() {
    let ww=$(window).width();
    if(ww>980){
     $(".mo").css({
         display:"none"
     })
        $('#myContainer').multiscroll({
            anchors: ['first', 'second', 'third','fourth'],
            menu: '#menu',
            navigation: true,
            navigationTooltips: ['New arrivals', 'Summer shop', 'Romantic Vibes','Best seller'],
            loopBottom: true,
            loopTop: true
        });
    }else{
     $(".pc").css({
         display:"none"
     })
    }
        
    });