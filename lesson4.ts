// Lesson 4: let in loop

for (var i = 1; i <= 7; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

for (let j = 1; j <= 7; j++) {
    setTimeout(function () {
        console.log(j);
    }, 1000);
}