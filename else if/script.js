/**
 * if (kondisi 1) {
 * aksi
 * } else if (kondisi 2){
 * aksi 2
 * }else{
 * aksi 3
 * }
 */

//example
//  var angka = prompt('masukan angka ;');
//  if (angka % 2 === 0){
//     alert('bilangan ini genap');//jika angka false maka dia keluar dari blok
//  }else if(angka % 2 === 1){
//     alert('bilangan ini ganjil');
//  }
//  else{
//  alert('yang anda masukan bukan angka');
//  }

var jmlAngkot= 10;
var angkotBeroprasi = 6 ;
var noAngkot = 1 ;

for(var noAngkot = 1; noAngkot <= jmlAngkot ; noAngkot++){
   if (noAngkot <= 6 && noAngkot !==5){
    console.log("angkot no " +noAngkot + " beroprasi dengan baik")

   }else if(noAngkot === 8  || noAngkot === 10 || noAngkot=== 5){
    console.log("angkot no " +noAngkot + " sedang lembur")
   }

   else {
    console.log("angkot no " +noAngkot + " tidak beroprasi dengan baik")
   }
}