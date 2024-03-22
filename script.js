function homepageanimation() {
    gsap.set(".slidesm", {
        scale: 5
    })
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 5,

        },
    })


    tl.to(".vdodiv", {
        '--clip': "0%",
        ease: Power2,

    }, 'a')

        .to(".slidesm", {
            scale: 1,
            ease: Power2,

        }, 'a')
        .to(".lft", {
            xPercent: -15,
            ease: Power4,
            stagger: .03,
        }, 'b')
        .to(".rgt", {
            xPercent: 10,
            ease: Power4,
            stagger: .03,
        }, 'b')
}
function realAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
        xPercent: -200,
        ease: Power4
    })
}
function teamAnimation() {
    document.querySelectorAll(".listelem").forEach(function (elem) {
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: "linear"
            })
        })

        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: "linear"
            })
        })
    })
}
 function paraAnimation(){
    var clutter = ""
document.querySelector('.textpara')
    .textContent.split("")
    .forEach(function (e) {

        if (e === "") clutter += `<span>&nbsp:</span>`
        clutter += `<span>${e}</span>`
    })
document.querySelector(".textpara").innerHTML = clutter
gsap.set(".textpara span", { opacity: .1 })
gsap.to(".textpara span", {
    scrollTrigger: {
        trigger: ".para",
        start: 'top 60%',
        end: "bottom 90%",
        scrub:2
    },
    opacity: 1,
    stagger: 3,
    ease: Power4,

})
 }
 (function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
function capsuleAnimations(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease:Power4
    })
}
 document.querySelectorAll(".section")
 .forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        onEnter: function(){
document.body.setAttribute("theme", e.dataset.color)
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color)
        },
        
    })
 })

capsuleAnimations()
 paraAnimation()
teamAnimation()
realAnimation()
homepageanimation()

