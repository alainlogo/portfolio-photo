$(document).ready(function(){

    // le hover de la souris
    let $mouseX = 0,
        $mouseY = 0,
        $left = 0,
        $top = 0;
    
    $(document).mousemove(e =>{
        $mouseX = e.clientX;
        $mouseY = e.clientY;
    })

    setInterval(() => {
        $left += ($mouseX - $left)/12;
        $top += ($mouseY - $top)/12;
        $("#cursor").css({left: $left + "px", top: $top +"px"});
    },30);

    // taille du x=cercle
    linkHovertl = new TimelineMax({ paused:true });
    linkHovertl.to("#cursor", 0.3, {scale: 1.5 });

    $("nav ul li a, .toggler, #brand a, .socilamedia ul li a").hover(
        ()=> {
            linkHovertl.play();
        },
        ()=> {
            linkHovertl.reverse();
        }
    );

    // pour en savoi plus
    let seeMoreHover = new TimelineMax({paused:true})
        .to("#cursor", 0.3, {scale: 2})
        .to(".more", 0.3, { opacity: 1});

    $(".img-container").each(function(i, el){
        let imgHoverTl = new TimelineMax({paused:true});
        imgHoverTl
            .to($(this).find("img"), 0.3, { opacity:0.4 })
            .to($(this).find("h4"), 0.3, { opacity:1, y:"50px"});
            el.animation = imgHoverTl;
    });

    $(".img-container").hover(
        function() {
            this.animation.play();
            seeMoreHover.play();
        },
        function(){
            this.animation.reverse();
            seeMoreHover.reverse();
        }
    );






    let menuTl = new TimelineMax({ paused: true});

    menuTl.from("nav ul li", 0, {display : "none"})
        .staggerFrom("nav ul li", 0.3, { x: 40, opacity: 0}, 0.1)
        .to(".toggler .open", 0.1, {opacity:0})
        .to(".toggler .close", 0.1, {opacity:1});

    menuTl.play();

    $(".toggler").click(()=>{
        menuTl.reversed()? menuTl.play() : menuTl.reverse();
    });

    $(document).scroll(function(){
        $(this).scrollTop() > 100 ? menuTl.reverse() : menuTl.play();
    });
});