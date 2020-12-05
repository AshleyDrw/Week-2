let i = 0;

while (i <= 100) {
    console.log(i);
    i += 2;
}


let j = 100;

while (j >= 0) {
    console.log(j);
    j -= 3;
}

for (let i = 1; i < 100; i+= 2) {
    console.log (i);
}


for (let i = 0; i < 101; i++) {
    if (i % 3 == 0) {
        console.log('Hello');
    } else if (i % 5 == 0) {
        console.log('World');
    } else if (i % 15 == 0) {
        console.log('HelloWorld');
    } else {
        console.log(i);
    }
}