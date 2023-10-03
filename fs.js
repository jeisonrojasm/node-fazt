const fs = require('fs')
/*
const first = fs.readFileSync('./data/first.txt', 'utf8')
const second = fs.readFileSync('./data/second.txt', 'utf8')

console.log(first);
console.log(second);

const title = 'Este es el contenido se ha añadido'

fs.writeFileSync('./data/third.txt', title)  */

fs.readFile('./data/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);

    fs.writeFile('./data/newFile.txt', 'Archivo creado desde fs asíncrono', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
        fs.writeFile('./data/newFile2.txt', 'Archivo 2 creado desde fs asíncrono', (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        })
        fs.writeFile('./data/newFile3.txt', 'Archivo 3 creado desde fs asíncrono', (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        })
    })
})