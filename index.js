const burger = document.querySelector(".burger")
const side = document.querySelector(".side-header")
const img =document.querySelectorAll(".project-titlecon img")
const btn = document.querySelectorAll('.pj-link')
const head = document.querySelector('header')
const sec =  document.querySelectorAll('section')      
const topb =  document.querySelector('.top-btn')   
const body = document.querySelector('body')   
const link = document.querySelectorAll('.link') 
const music = document.querySelector(".mp3")
const play = document.querySelector(".play")
const aboutdetails = document.querySelector(".work-details")
const portfolio = document.getElementById('#porforlio')
play.addEventListener("click", function(){




    if(music.paused){
        music.play();
        
        play.innerHTML = "pause"
    }
    else{
        music.pause();

        play.innerHTML = "play"
    }
       
    

   
 
    })








   
 


//remove toggle on click link  buttoon //

link[0].addEventListener('click',function(){

    side.classList.remove('show-active')
    body.classList.remove("show-fixed")
   
    })
    

    link[1].addEventListener('click',function(){

        side.classList.remove('show-active')
        body.classList.remove("show-fixed")
        sec[0].classList.add('animation')
        
        })


link[2].addEventListener('click',function(){

    side.classList.remove('show-active')
    body.classList.remove("show-fixed")
    sec[2].classList.add('animation')
    
    })

link[3].addEventListener('click',function(){

    side.classList.remove('show-active')
    body.classList.remove("show-fixed")
    sec[3].classList.add('animation')
    })

link[4].addEventListener('click',function(){

    side.classList.remove('show-active')
    body.classList.remove("show-fixed")
    sec[1].classList.add('animation')
    })


link[5].addEventListener('click',function(){

    side.classList.remove('show-active')
    body.classList.remove("show-fixed")
    sec[4].classList.add('animation')
    })

//remove toggle on click link  buttoon //





//toggle buttoon //

burger.addEventListener("click", function(){
    side.classList.toggle('show-active')
    if(side.classList.contains('show-active')){
        body.classList.add('show-fixed')
    }

    else{
        body.classList.remove('show-fixed')
    }
    
})
//end of toggle buttoon //


//show top button//




window.addEventListener("scroll", function(){
     
    let scrollHeight = window.pageYOffset
    let AboutHeight =sec[0].getBoundingClientRect().height
  
    if( scrollHeight > AboutHeight ){
        aboutdetails.classList.add('animation')
    }

    else  {
        aboutdetails.classList.remove('animation')
    }
    

})





window.addEventListener("scroll", function(){
     
    let scrollHeight = window.pageYOffset
    let skillsHeight =sec[1].getBoundingClientRect().height
  
    if( scrollHeight > skillsHeight ){
        sec[1].classList.add('animation')
    }

    else  {
        sec[1].classList.remove('animation')
    }

})







window.addEventListener("scroll", function(){
     
    let scrollHeight = window.pageYOffset
    let resumeHeight =sec[2].getBoundingClientRect().height
  
    if( scrollHeight > resumeHeight ){
        sec[2].classList.add('animation')
    }

    else  {
        sec[2].classList.remove('animation')
    }

})


window.addEventListener("scroll", function(){
     
    let scrollHeight = window.pageYOffset
    let portfolioHeight =sec[3].getBoundingClientRect().height
  
    if( scrollHeight > portfolioHeight ){
        sec[3].classList.add('animation')
    }

    else  {
        sec[3].classList.remove('animation')
    }

   

})













window.addEventListener("scroll", function(){
     
    let scrollHeight = window.pageYOffset
    let headHeight =head.getBoundingClientRect().height

if( scrollHeight > headHeight ){
    topb.classList.add('show-top')
}

 else  {
    topb.classList.remove('show-top')
}
  



})















//end of show top button//



//show lin k animation  //

img[0].addEventListener('mouseenter',function(){

if(btn[0].classList.contains('show-btn')){
    btn[0].classList.remove('show-btn')
}

else{
    btn[0].classList.add('show-btn')
}
})


img[1].addEventListener('mouseenter',function(){

    if(btn[1].classList.contains('show-btn')){
        btn[1].classList.remove('show-btn')
    }
    
    else{
        btn[1].classList.add('show-btn')
    }
    })



    // img[2].addEventListener('mouseenter',function(){

    //     if(btn[2].classList.contains('show-btn')){
    //         btn[2].classList.remove('show-btn')
    //     }
        
    //     else{
    //         btn[2].classList.add('show-btn')
    //     }
    //     })




    //     img[3].addEventListener('mouseenter',function(){

    //         if(btn[3].classList.contains('show-btn')){
    //             btn[3].classList.remove('show-btn')
    //         }
            
    //         else{
    //             btn[3].classList.add('show-btn')
    //         }
    //         })





//emd show link animation  //



