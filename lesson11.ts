// Spread Parameter

let showNames = function(...names) {
    
    for (let name in names) {
        console.log(names[name]);
    }
}

let someName: string[] = ['a', 'b'];
let someName2 = "loved";
let someNames = ['Diem', 'Dung', 'Ngoc', 'Tu', 'Vi'];

showNames(someName[1], someName2, ...someNames);

let showNames1 = function(someName1, names: string[]) {
    
    for (let name in names) {
        console.log(names[name]);
    }
}

let someName1 = "Xuan";
let someNames1 = ['Diem', 'Dung', 'Ngoc', 'Tu', 'Vi'];

showNames1(someName1, someNames1);