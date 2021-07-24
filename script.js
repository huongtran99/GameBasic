class Hero {
    image;
    top;
    left;
    size;

    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }


    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }


    moveRight() {
        this.left += 20;
        console.log('ok: ' + this.left);
    }

    moveLeft() {
        this.left -= 20;
        console.log('ok: ' + this.left);
    }

    moveDown() {
        this.top += 20;
        console.log('ok: ' + this.top);
    }

    moveUp() {
        this.top -= 20;
        console.log('ok: ' + this.top);
    }

}

let hero = new Hero('img/ngobakha.png', 20, 30, 200);
document.getElementById('game').innerHTML = hero.getHeroElement();

function start() {
    switch (event.keyCode) {
        case 39:
            hero.moveRight();
            break;
        case 40:
            hero.moveDown();
            break;
        case 37:
            hero.moveLeft();
            break;
        case 38:
            hero.moveUp();
            break;
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

function play() {
    window.addEventListener('keydown', start);
}

