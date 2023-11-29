/*
operator string kita membuatnya dengan tanda +
+ memiliki dua fungsi = 1- jika operand nya angka maka dia menjadi operator aritmatika 
                        2- jika operand nya string maka dia menjadi operator penggabung string
*/

// contoh 1
var a = 1,
     i =2;
    //maka ini akan menjadi operator aritmatika karena tida ada string
     console.log(a + i)
// contoh 2
var g = "apple",
    h = "pen";
    //maka ini akan menjadi operator pengabungan string    
    console.log(g +" " + h);

    //bagaimana kalau tipe data string + tipe data number
    var l =10,
        m = "20";
    //    /* maka hasilnya akan string "1020" 
    //    string + number = string
    //    number + number = number*/
        console.log(l + m);
