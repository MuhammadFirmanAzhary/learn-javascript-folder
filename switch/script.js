/*switch ini sama dengan if and else
 syntax nya

 switch(ekspresi){
    case "nilai 1":
        aksi 1
        [break;]
        case "nilai 2":
            aksi 2
            [break;]
            default:
                aksi default
                [break;]
 }
*/
// var angka =parseInt ((prompt('masukan angka :')));
// switch(angka){
//     case 1:// harus nilai 
//         alert('anda memasukan angka 1');
//         break;
//     case 2:
//         alert('anda memasukan angka 2');
//         break;
//     case 3:
//         alert('anda memasukan angka 3')
//         break;
//     default:
//         alert('anda memasukan angka yang salah');
//         break;    
// }




















//  if (angka === '1'){
//     alert('anda memasukan angka 1');

//  }else if (angka === '2'){
//     alert(' anda memasukan angka 2');
//  }else if (angka === '3'){
//     alert('anda memasukan angka 3')

//  }else{
//     alert('anda memasukan angka yang salah')
//  }
 

//



// var item = prompt('masukan nama makanan / minuman : \n(cth:nasi, daging , susu , humberger, soda');
// switch(item){
//     case 'nasi':  
//     case 'daging':
//     case 'susu':
//         alert('makanan\ minuman ini sehat');
//        break; 
//     case 'humberger':
//     case 'soda':
//        alert('makanan \ minuman ini tidak sehat')   ;
//        break;
//     default:
//         alert('anda memasukan makanan yang tidak terdaftar')
//      break;
// }




var hari = 1;
var namaHari;

    switch (hari) {
    case 1:
        namaHari = "Minggu";
        break;
    case 2:
        namaHari = "Senin";
        break;
    case 3:
        namaHari = "Selasa";
        break;
    // ...
    default:
        namaHari = "Hari tidak valid";
    }

    console.log("Hari ini adalah " + namaHari);

    // const newElement =document.createElement('p');
    // newElement.innerText='hay sayang';
    // console.log
