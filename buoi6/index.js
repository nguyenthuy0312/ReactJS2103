// console.log("helooooo");//in ra man hinh
// //khai bao bien
// //var, let, const
// var a = 10;
// console.log(typeof a);
// var b ='chuoi1'
// var c = "chuoi 2"
// var d = `day la ${b} 1234 ${c} chuoi ${a}`
// var e = b + c ;
// console.log(d);
// console.log(typeof c);
// var car = {
//     color: 'red',
//     price: 1000,
//     isBuy: true
// }
// console.log(typeof car);

// Giải phuong trinh bac 2

let a = prompt('Nhap gia tri cua a');
let b = prompt('Nhap gia tri cua b');
let c = prompt('Nhap gia tri cua c');

let delta = b*b - 4*a*c;

    if(a == 0){
        if(b == 0){
            if(c == 0){
                alert('Phuong trinh vo so nghiem');
            }else {
                alert('Phuong trinh vo nghiem');
            }
        }else {
            alert('Phuong trinh co nghiem duy nhat:' + (-c/b));
        }
    }else {
        if(delta > 0) {
            let x1 = (-b + Math.sqrt(delta))/(2*a);
            let x2 = (-b - Math.sqrt(delta))/(2*a);
            alert('Phuong trinh có hai nghiem phan biet: x1 = ' + x1 +', x2 = ' +x2);
        }else if (delta == 0) {
            let x = (-b + Math.sqrt(delta))/a;
            alert('Phuong trinh co nghiem duy nhat x ='+x);
        }else {
            alert('Phuong trinh vo nghiem');
        }
    }
