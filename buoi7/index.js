// bai 1

// const n = 10;

// function soNT (a) {
//     if (a<2) {
//         return false;
//     }
//     if (a==2) {
//         return true;
//     }
//     if ( a %2 == 0) {
//         return false;
//     }
//     for(let i=3; i <= (a-1); i+=2){
//         if(a % i == 0 ){
//             return false;
//         }
//     }
//     return true;
    
// }

// if (soNT(n)) {
//     console.log(n + ' la so nguyen to');
// }else {
//     console.log(n + ' khong là so nguyen to');
// }

// bai 2

//     const n =10;
//     for(let i=1; i <= n; i++){
//         console.log(i);

//     }
    
// bai3
//     const n = 10;
//     for(let i = 0; i <= n; i++){
//         if(i % 2 == 0)
//             console.log(i);
//     }

// bai4
//     let n = 10;
//     function sont(a){
//         let dem = 0;
//         for (let i = 1; i <= a; i++){
//             if (a%i == 0){
//                 dem += 1;
//             }
//         }
//     if (dem == 2){
//         return true;
//     }else if (dem!=2){
//         return false;
//     }
//     }
    
//     for (let i = 1; i <= n; i++){
//         if(sont(i) == true){
//             console.log(i);
//         }
//     }
    
// bai5
//     const n = 10;
//     tong = 0;
//     for (let i = 0; i <=n; i++){
//         tong += i;
//     }
//     console.log(tong);
    
// bai6
//     const n = 10;
//     let tong = 0;
//     let a = 1;
//     for ( let i = 1; i <= n; i++){
//         a = i * i;
//         tong += a;
//     }
    
//     console.log(tong);

// bai 7

// let n = 10;
// let tong = 0;
//  for ( let i = 0; i <= n; i ++){
//      if(i % 2 != 0) {
//          tong += i;
//      }
//  }
//  console.log(tong);

// bai8
const n = 135;

function kiemtra(n){
    while(n > 0){
        let t = n % 10;
        if ( t % 2 == 0)
            return false;
        n /= 10;
    }
    return true;
}

if (kiemtra(n) == true){
    console.log(`${n} có các chữ số lẻ`)
}else{
    console.log(`${n} có chữ số chẵn`);
}
