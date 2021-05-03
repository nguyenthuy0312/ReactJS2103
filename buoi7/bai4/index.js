let n = 10;
function sont(a){
    let dem = 0;
    for (let i = 1; i <= a; i++){
        if (a%i == 0){
            dem += 1;
        }
    }
if (dem == 2){
    return true;
}else if (dem!=2){
    return false;
}
}

for (let i = 1; i <= n; i++){
    if(sont(i) == true){
        console.log(i);
    }
}

