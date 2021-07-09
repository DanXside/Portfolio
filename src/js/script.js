const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      links = document.querySelectorAll('.menu__links');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

links.forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

const counters = document.querySelectorAll('.skills__progress-percents'),
      lines = document.querySelectorAll('.skills__progress-scale-grey span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

function valideForms(form){
    $(form).validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите своё имя",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введён адрес почты"
        }
      },
    });
};

valideForms('#contacts-form');

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    });
});