/*
operator logika 
&& = AND
|| = OR 
!  = NOT
*/

// && dua duanya harus true
var o = 10,
    p = 10;
console.log(o > 2 );
console.log(p % 2 == 0);
console.log( (o > 2 ) && (p % 2== 0 ));
    
// || asal salah satunya benar pasti true
console.log( (o + 10 == 20) || (p < 1));

// ! menfalse kan nilai yang true
console.log(o < 20);
console.log(!(o < 20));
