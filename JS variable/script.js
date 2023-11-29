// variable global (tanpa deklarasi)
// firstName = "roy";

// console.log(firstName);

// let lastName="kiyosi",
//     age= 5,
//     tempatTinggal ="jakarta";
//     // document.getElementById("demo").innerHTML=lastName;
//     console.log(tempatTinggal);

    // var i ="5" + 5 + 2;
    // document.getElementById("demo2").innerHTML=i;
    

    // var i= 2;
    // var i =3;
    // let r =4;
    // const t=6;
    // const o =7;
// const gambar =document.getElementById('gambar');
// gambar.setAttribute('width',300);
// gambar.setAttribute('height',150);

// const buttons = document.querySelectorAll('.button');
// const playButtons=buttons[3];
// const playButtonsElements= playButtons[0];
// playButtonsElements.setAttribute('type', 'submit');
// playButtonsElements
$(document).on('ready', function() {
  
    $('.field').on('focus', function() {
      $('body').addClass('is-focus');
    });
    
    $('.field').on('blur', function() {
      $('body').removeClass('is-focus is-type');
    });
    
    $('.field').on('keydown', function(event) {
      $('body').addClass('is-type');
      if((event.which === 8) && $(this).val() === '') {
        $('body').removeClass('is-type');
      }
    });
    
  });
  ahMasak = document.getElementById('id');
  ahMasak.innerHtml

  