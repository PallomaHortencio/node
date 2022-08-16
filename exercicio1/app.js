import artistas from './modulo.js';

/* 
loop for
for (let i = 0; i < 5; i++) {
    console.log(artistas[i]);
} */

var contador = 0
while (contador < artistas.length) {
    console.log(`${artistas[contador]}`)
    contador ++
}

