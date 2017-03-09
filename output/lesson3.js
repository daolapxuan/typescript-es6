// Lesson 3: Let
function xP(name) {
    // Dùng let khai báo thì phải khai báo đầu code (chuẩn strict)
    // Nếu dùng let mà ko khai báo ở đây sẽ ko console.log ra đc, khác var là vậy.
    var x;
    if (name === "Xuan") {
        // Nếu ta khai báo ở đây là let x = "Hello Xuan"
        // thì biến x này sẽ hiểu là x_1 nào đó chứ ko phải biến x ở trên
        // và khi console.log(x) thì x ko có giá trị.
        x = "Hello Xuan!";
    }
    else {
        x = "Hello Vi!";
    }
    console.log(x);
}
xP("XV");
// Một ví dụ khác để hiểu hơn về phạm vi của Let
var a = 2;
var b = 10;
if (a === 2) {
    var a = 3;
    var b_1 = 1;
}
console.log(a);
console.log(b);
// Kết quả: a = 3, b = 10
// Rõ ràng ta thấy khi ta dùng let khai báo biến b trong if
// nó sẽ tạo ra một biến b_1 khác chứ ko phải dùng biến b ban đầu gán = 1
// nên khi in ra (bên ngoài if) thì nó sẽ in kết quả biến b ban đầu.
// Nhưng nếu bên trong if ta ko dùng let khai báo lại biến b thì biến b đó 
// sẽ là biến b ban đầu.
// Để rõ hơn ta có thể truy cập file js. 
//# sourceMappingURL=lesson3.js.map