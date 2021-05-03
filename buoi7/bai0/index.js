// const a = 10;

// for ( let i =0; i <= a; i++){
//     if ( i % 2 !== 0){
//         console.log('so le la:',i);
//     }else{
//         console.log("so chan la:",i);
//     }
// }
const n = 10;

function soNT (a) {
    if (a<2) {
        return false;
    }
    if (a==2) {
        return true;
    }
    if ( a %2 == 0) {
        return false;
    }
    for(let i=3; i <= (a-1); i+=2){
        if(a % i == 0 ){
            return false;
        }
    }
    return true;
    
}

if (soNT(n)) {
    console.log(n + ' la so nguyen to');
}else {
    console.log(n + ' khong là so nguyen to');
}

    