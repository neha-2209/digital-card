
      const card = document.querySelector(".flipcard");

      document.getElementById("flip123").addEventListener("click", function (e) {
      card.classList.toggle('is-flipped');
      document.getElementById("back-header").scrollIntoView({
        behavior: 'smooth'
      });
      });



      const share = document.querySelector('.share');

setTimeout(() => {
  share.classList.add("hover");
}, 1000);

setTimeout(() => {
  share.classList.remove("hover");
}, 3000);

    //   sharreeeeee
    
    //   $('.share-button').on('click',function(){  
    //     $(this).addClass('open');
    //   })
    //   $( ".share-items" ).draggable({ 
    //     axis: "x",
    //     containment : ".share-items-wrapper"
    //   });
    //   $( ".share-item" ).on('click',function(){
    //      $('.share-button').addClass('shared');
    //      setTimeout(function(){
    //       $('.share-button').addClass('thankyou');
    //     }, 800);
    //     setTimeout(function(){
    //       $('.share-button').removeClass('open');
    //       $('.share-button').removeClass('shared');
    //       $('.share-button').removeClass('thankyou');
    //     }, 2500);
    //   });