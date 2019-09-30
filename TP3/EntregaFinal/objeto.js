export class Objeto {
    constructor(data) {
        let divFondo = document.getElementById('game');
        let node = document.createElement('div');
        node.className = data.class;
        divFondo.appendChild(node);
    }
}