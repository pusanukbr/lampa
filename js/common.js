$(function() {
// Плюшка
var Dataget = document.getElementById('data'),
SummSumm=new Date().getFullYear();
Dataget.innerHTML = SummSumm;


// Burger menu
$('.btn_mobile_open').click(function() {
        $(".block_list").removeClass("hidden_menu");
        $(".block_list").addClass("open_menu");
        $(this).css('display', "none");
        $('body').addClass("all");

});
$('.btn_mobile_exit').click(function() {
        $(".block_list").removeClass("open_menu");
        $(".block_list").addClass("hidden_menu");
        $('.btn_mobile_open').css('display', "block");
        $('body').removeClass("all");
});


// Плавный скролл
$(function() {
  $('.dots_navigation ul li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-100
        }, 1000,'easeInOutExpo');
        return false;
      }
    }
  });
});


$(document).ready(function() {
var navli = $(".dots_navigation ul li");
    $('.way').waypoint(function() {
        var hash = $(this).attr("id");
        var one = $(".block_wrapper_video").attr("id");
        navli.removeClass("active");
        $.each( navli, function(){
            if($(this).children("a").attr("href").slice(1) == hash){
                $(this).addClass("active");
            }else if($(this).children("a").attr("href").slice(1) == one){
                $("#one").addClass("active");
        }
        });
    }, {
        offset: '25%'
    });

    $('.block_wrapper_video').waypoint(function(direction) {
        $(".one").addClass("active");
        $(".two").removeClass("active");
        },{
        offset: '0%',
    });

    $('#four').waypoint(function(direction) {
        if(direction == "down"){
           $(".number span").addClass("spincrement");
           $(".spincrement").spincrement({
       duration: 3000,
       from: 0
});
            }
        },{
        offset: '70%',
        triggerOnce: true 
    });

    $('#three').waypoint(function(direction) {
        if(direction == "down"){
           $(".item_ser").addClass("active");
           
            }
        },{
        offset: '70%',
        triggerOnce: true 
    });
    
});


//  owlCarousel
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay: true,
    responsive:{
        0:{
            items:2,
            nav: false,
            dots: false,
        },
        600:{
            items:3,
            mouseDrag: true,
        },
        800:{
            items:4,
            mouseDrag: false,
            nav:true,
        },
        1000:{
            items:5,
            mouseDrag: false,
        }
    }
});
});


// inputs
    var formInput = $(".js-input");

    formInput.on("focus", function() {
        $(this).parent().addClass("active");
    });

    formInput.on("blur", function() {
        if ($(this).val().length === 0) {
            $(this).parent().removeClass("active");
        }    
    });


// contact form
    var form = $('.form'),
        sendFormBtn = $(".js-send-form"),
        lang = (form[0]) ? form.attr('data-lang').substr(0,2) : "ru",
        messages = {
            ru: {
                name: {
                    required: "Введите Ваше имя.",
                },
                message: {
                    required: "Введите Ваше сообщение.",
                },
                policy: {
                    required: "Это поле должно быть отмечено.",
                },
                email: {
                    required: "Введите Ваш Email.",
                    validateEmail: "Введите корректный Email."
                },
                phone: {
                    required: "Введите Ваш телефон.",
                    digits: "Телефон может содержать только цифры."
                }
            },
            en: {
                name: {
                    required: "Enter your name.",
                },
                message: {
                    required: "Enter your message.",
                },
                policy: {
                    required: "This field must be checked.",
                },
                email: {
                    required: "Enter your Email.",
                    validateEmail: "Enter correct Email."
                },
                phone: {
                    required: "Enter your phone number.",
                    digits: "Phone number can only contain digits."
                }
            }
        };

    $.validator.addMethod('validateEmail', function (value) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    });

    form.validate({
        errorClass: "form-group-input-error",
        errorElement: "span",
        errorPlacement: function(error, element) {
            if(element.attr("type") == "checkbox") {
                element.closest(".checkbox").next().after(error);
            } else {
                error.appendTo(element.parent());
            }
        },
        // submitHandler: function(form) {
        //     sendFormBtn.addClass("sending").attr("disabled", "disabled");

        //     axios.post('', {
        //         name: $("input[name=name]").val(),
        //         phone: $("input[name=phone]").val(),
        //         email: $("input[name=email]").val(),
        //         message: $("textarea[name=message]").val()
        //     })
        //     .then(function (response) {
        //         if(response.data.success) {
        //             setTimeout(function(){
        //                 sendFormBtn.removeClass("sending").addClass("sended");
        //             }, 1500);
        //             setTimeout(function(){
        //                 sendFormBtn.removeClass("sended").removeAttr("disabled");
        //                 $(".js-input").val("");
        //             }, 4000);   
        //         } else {
        //             console.log(response.data.message);
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        //     return false;
        // },
        rules: {
            email: {
                required: true,
                validateEmail: true
            },
            phone: {
                required: true,
                digits: true
            }
        },
        messages: {
            name: {
                required: messages[lang].name.required,
            },
            message: {
                required: messages[lang].message.required,
            },
            policy: {
                required: messages[lang].policy.required,
            },
            email: {
                required: messages[lang].email.required,
                validateEmail: messages[lang].email.validateEmail
            },
            phone: {
                required: messages[lang].phone.required,
                digits: messages[lang].phone.digits
            }
        }
    });



});

