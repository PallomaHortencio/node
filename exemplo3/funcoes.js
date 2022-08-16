function ola(texto) {
    return `Ola ${texto}`;
}

//export {ola};  EcmaSript (forma mais atual)

module.exports = ola; //CommonJS (forma mais antiga)
/*   em commonjs não é necessario ter um arquivo package.json */