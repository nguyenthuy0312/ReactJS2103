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