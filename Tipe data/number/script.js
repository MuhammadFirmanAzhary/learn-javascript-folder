/*tipe data number
didalam tipe data number itu bilangnya floating point(bilangan-pecahaan) dan 
ukuran angka yang bisa ditampung javascript itu 64-bit (18 x 1 miliar miliar)
ada beberapa angka didalam tipe data number
 */

/* - angka tanpa desimal (integer) 10 , 1500, 1234567
 (akurat sampai 15 digit)*/
 var i = 10;
 console.log(i);
 var b = 999999999999999;
 console.log(b)
  var n = 99999999999999999;
  console.log(n);

/* -angka dengan desimal 3.14,0.5,100.00(didalam javascript koma menggunakan titik)
(maksimal kita hanya bisa menyimpan 17 digit dibelakang koma)
*/
     var $k = 12.6799;
     console.log($k);
     var $j = 20.00;
     console.log($j);
     var $digit= 123.7777777777777777;
     console.log($digit);

/* cuman hati hati dalam menggunakan bilangan 
pecahan karena terkadang hasilnya tidak sesuai yang kita harapkan*/ 
     var $p = 0.3 + 0.7;
     console.log($p);
     var _u = 0.2 + 0.1;
     console.log(_u); //outputya 0.30000000000000004 karena ada bilangan yang lebih kecil lagi kelipatanya
 
/* ada angka spesial didalam javascript
    Infinity
    -Infinity
    NaN 
 */    
    // Infinity terjadi ketika bilangan positif / 0
     var z = 2 / 0 ,
    // -Infinity terjadi ketika bilangan negatif /0
         v = -10 / 0,
    // NaN  terjadi ketika 0 /0   
         x = 0 / 0,
     // NaN  terjadi ketika number / string    
         s = 5 /"syayyid";

         console.log(z);
         console.log(v);
         console.log(x);
         console.log(s);

        /*catatan
        apabila nilai angka yang dijadikan string dibagi angka number
         maka angka tersebut menjadi number
        */
       var angkaNumber =10,
             numberAngka = "10";
            console.log(angkaNumber / numberAngka);//outputnya 1 number bukan NaN