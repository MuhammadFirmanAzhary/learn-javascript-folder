/* popup box
- alert
- prompt 
- confirm 
*/

/*alert box buat nampilin pesan sederhana
*/ 
//kita bisa membuat alert lebih dari satu

//  alert("hayyy");
//  alert("nama saya rifki");
//  alert("apaka kabar semua");
//  alert("hayyy");

/*prompt box bisa memasukan inputan
*/ 
 // sebenernya pop up prompt itu mengembalikan nilai apapun yang kita tulis
 //prompt('masukan nama');

// var i= prompt('masukan nama ;');
//   alert(i);

/*confirm box gunanya untuk meminta konfirmasi kepada user
*/ 
/*sama confirm juga mengembalikan nilai cuman bedanya dia mengembalikan nilai true / false 
true ketika user mengklick ok dan false sebaliknya*/



    // var tes = confirm('kamu yakin ?');
    // //  alert(tes);
    // if (tes == true){
    //     alert("user menekan tombol oke");
    // }else{
    //     alert("user menekan tombol cancel");
    // }


//aplikasi sederhana
    //  alert("selamat datang teman-teman");
    //  var coba= true;

    //  while(coba === true) {
    //      var nama = prompt('masukan nama :');
    //     alert('halo ' + nama);

    //      coba = confirm('coba lagi ?');

    //  }
    // alert('terima kasih..')
    var i = prompt('Masukan angka :    ');
    if( i % 2 === 0){
        alert(i +' ' + 'Bilangan ini adalah genap');
    }else{
       alert(i + ' ' + 'Bilangan ini adalah ganjil');
    }