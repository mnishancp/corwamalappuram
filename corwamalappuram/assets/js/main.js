(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
  /**
   * Clients Slider
   */
  new Swiper('.hero-slider', {
    speed: 1000,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    }
  });



    //joinform

   
                    var taluk= {
                     "Eranad" : {
                     "Anakkayam" : [] ,
                    "Areecode" : [] ,
                    "Chembrasseri" : [] ,
                    "Edavanna" : [] ,
                    "Elankur" : [] ,
                    "Karakunnu" : [] ,
                    "Kavanur" : [] ,
                    "Kizhuparamba" : [] ,
                    "Malappuram" : [] ,
                    "Manjeri" : [] ,
                    "Melmuri" : [] ,
                    "Narukara" : [] ,
                    "Panakkad" : [] ,
                    "Pandallur" : [] ,
                    "Pandikkad" : [] ,
                    "Payyanad" : [] ,
                    "Perakamanna" : [] ,
                    "Pookkottur" : [] ,
                    "Pulpatta" : [] ,
                    "Trikkalangode" : [] ,
                    "Urangattiri" : [] ,
                    "Vettikattiri" : [] ,
                    "Vettilappara" : [] 
                     },
                    "Kondotty" : {
                    "Cheekode" : [] ,
                    "Chelembra" : [] ,
                    "Cherukavu" : [] ,
                    "Kondotty" : [] ,
                    "Kuzhimanna" : [] ,
                    "Morayur" : [] ,
                    "Muthuvallur" : [] ,
                    "Nediyiruppu" : [] ,
                    "Pallikkal" : [] ,
                    "Pulikkal" : [] ,
                    "Vazhakkad" : [] ,
                    "Vazhayoor" : [] 
                    
                    },
                    "Nilambur" : {
                    "Akampadam" : [] ,
                    "Amarambalam" : [] ,
                    "Chokkad" : [] ,
                    "Chungathara" : [] ,
                    "Edakkara" : [] ,
                    "Kalikavu" : [] ,
                    "Karulai" : [] ,
                    "Karuvarakundu" : [] ,
                    "Kerala Estate" : [] ,
                    "Kurumbalangode" : [] ,
                    "Mampad" : [] ,
                    "Moothedam" : [] ,
                    "Nilambur" : [] ,
                    "Porur" : [] ,
                    "Pothukallu" : [] ,
                    "Pullippadam" : [] ,
                    "Thiruvali" : [] ,
                    "Tuvvur" : [] ,
                    "Vazhikkadavu" : [] ,
                    "Vellayur" : [] ,
                    "Wandur" : [] 
                    },
                    "Perinthalmanna" : {
                    "Aliparamba" : [] ,
                    "Anamangad" : [] ,
                    "Angadippuram" : [] ,
                    "Arakkuparamba" : [] ,
                    "Edappatta" : [] ,
                    "Elamkulam" : [] ,
                    "Karyavattam" : [] ,
                    "Keezhattur" : [] ,
                    "Kodur" : [] ,
                    "Koottilangadi" : [] ,
                    "Kuruva" : [] ,
                    "Kuruvambalam" : [] ,
                    "Mankada" : [] ,
                    "Melattur" : [] ,
                    "Moorkkanad" : [] ,
                    "Nenmini" : [] ,
                    "Pathaikara" : [] ,
                    "Perinthalmanna" : [] ,
                    "Pulamanthole" : [] ,
                    "Puzhakkattiri" : [] ,
                    "Thazhekkode" : [] ,
                    "Vadakkanagara" : [] ,
                    "Valambur" : [] ,
                    "Vettathur" : [] 
                    
                    },
                    "Ponnani" : {
                    "Alamkode" : [] ,
                    "Edappal" : [] ,
                    "Ezhuvathiruthy" : [] ,
                    "Kalady" : [] ,
                    "Maranchery" : [] ,
                    "Nannamukku" : [] ,
                    "Perumpadappa" : [] ,
                    "Ponnani Nagaram" : [] ,
                    "Tavanur" : [] ,
                    "Vattamkulam" : [] ,
                    "Veliyancode" : [] 
                    },
                    "Tirur" : {
                    "Ananthavoor" : [] ,
                    "Athavanad" : [] ,
                    "Cheriyamundam" : [] ,
                    "Edayur" : [] ,
                    "Irimbiliyam" : [] ,
                    "Kalpakancheri" : [] ,
                    "Kattiparuthi" : [] ,
                    "Kottakkal" : [] ,
                    "Kurumbathur" : [] ,
                    "Kuttippuram" : [] ,
                    "Mangalam" : [] ,
                    "Marakkara" : [] ,
                    "Melmuri" : [] ,
                    "Naduvattom" : [] ,
                    "Niramaruthur" : [] ,
                    "Ozhur" : [] ,
                    "Pariyapuram" : [] ,
                    "Perumanna" : [] ,
                    "Ponmala" : [] ,
                    "Ponmundam" : [] ,
                    "Purathur" : [] ,
                    "Tanalur" : [] ,
                    "Tanur" : [] ,
                    "Thalakkad" : [] ,
                    "Thirunavaya" : [] ,
                    "Tirur" : [] ,
                    "Trikkandiyur" : [] ,
                    "Triprangode" : [] ,
                    "Valavannur" : [] ,
                    "Vettom" : [] 
                    },
                    "Tirurangadi" : {
                    "A.R.Nagar" : [] ,
                    "Ariyallur" : [] ,
                    "Edarikode" : [] ,
                    "Kannamangalam" : [] ,
                    "Moonniyur" : [] ,
                    "Nannambra" : [] ,
                    "Neduva" : [] ,
                    "Oorakam" : [] ,
                    "Othukkungal" : [] ,
                    "Parappanangadi" : [] ,
                    "Parappur" : [] ,
                    "Peruvallur" : [] ,
                    "Thenhippalam" : [] ,
                    "Thennala" : [] ,
                    "Tiruranagdi" : [] ,
                    "Vallikunnu" : [] ,
                    "Vengara" : [] 
                    },
                    
                    
                    }
                    window.onload = function() {
                      var talukSel = document.getElementById("taluk");
                      var villageSel = document.getElementById("village");
                     
                      for (var x in taluk) {
                        talukSel.options[talukSel.options.length] = new Option(x, x);
                      }
                      talukSel.onchange = function() {
                        //empty Chapters- and Topics- dropdowns
                        
                        villageSel.length = 1;
                        //display correct values
                        for (var y in taluk[this.value]) {
                          villageSel.options[villageSel.options.length] = new Option(y, y);
                        }
                      }
                      
                    }
                   
    
})(jQuery);

