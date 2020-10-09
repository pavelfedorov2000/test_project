$(document).ready(function() {

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name:  {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} cимвола!")
                },
                tel: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    }

    validateForms('.price__form');
    validateForms('#consultation form');


    $('input[name=phone]').mask("+375 (99) 999-99-99"); //  маска ввода в инпутах

    $("a[href^='#']").click(function(){
        const href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(href).offset().top+"px"}); // плавный скролл по ссылкам
        return false;
    });

    new WOW().init(); // для анимации блоков как только пользователь долистывает до их секции
});