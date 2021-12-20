(function ($) {
    "use strict";
    // Share Btn with 4 options
  $(".goob").click(function () {
    document.getElementsByClassName("scale")[0].classList.remove("scaled");
    setTimeout(function () {
      document.getElementsByClassName("scale")[0].classList.add("scaled");
    }, 100);
    document.getElementsByClassName("scale")[0].style.background =
      $(this).css("background");
    var b = $(this).css("background");
    setTimeout(function () {
      document.body.style.background = b;
    }, 1000);
  });

  // catelog image slider
  $(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  });

// Info & Bio dropdown button

  $(document).ready(function (e) {
    $("#gstinCollapse").css({ display: "none" });
    $("#bankCollapse").css({ display: "none" });
  });


// Tab buttons with 4 button
  $(function () {
    $('div.icon-tab').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      setDisplay(450);
    });

    function setDisplay(time) {
      $('div.icon-tab').each(function (rang) {
        $('.item').eq(rang).css('display', 'none');

        if ($(this).hasClass('active')) {
          $('.item').eq(rang).fadeIn(time);
        }
      });
    }

    //Disable the animation on page load
    setDisplay(0);
  });

})(jQuery);
// jQuery end 

// Info and Bio 

var x = 0;
function gstinCollapse() {
  if (x == 0) {
    // alert("x is 0");
    document.getElementById("gstinCollapse").style.display = "block";
    x = 1;
  } else {
    // alert("x is 1");
    document.getElementById("gstinCollapse").style.display = "none";
    x = 0;
  }
}

var y = 0;

function bankCollapse() {
  if (y == 0) {
    document.getElementById("bankCollapse").style.display = "block";
    y = 1;
  } else {
    document.getElementById("bankCollapse").style.display = "none";
    y = 0;
  }
}

// Second section 4 hover button 
  document.addEventListener('DOMContentLoaded', () => {
  let el = document.querySelector('#wrapper1 .container1');
  
  setTimeout(() => (el.style.marginTop = ''), 500);
}, false);
