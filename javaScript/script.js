window.onload = function () {

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d")
    document.addEventListener("keydown", keyPush)
    setInterval(game, 60);

    const vel = 1;


    var tamanhoPixel = 10;
    var qtdPixel = 40;
    var velocidadeX = velocidadeY = 0;
    var posicaoX = 10;
    var posicaoY = 15;
    var appleX = appleY = 15;

    var trail = [];
    tail = 5;



    function game() {
        posicaoX += velocidadeX;
        posicaoY += velocidadeY;
        if (posicaoX < 0) {
            posicaoX = qtdPixel - 1;
        }
        if (posicaoX > qtdPixel - 1) {
            posicaoX = 0;
        }
        if (posicaoY < 0) {
            posicaoY = qtdPixel - 1;
        }
        if (posicaoY > qtdPixel - 1) {
            posicaoY = 0;
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.clientWidth, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(appleX * tamanhoPixel, appleY * tamanhoPixel, tamanhoPixel, tamanhoPixel);

        ctx.fillStyle = "gray";
        for (let i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tamanhoPixel, trail[i].y * tamanhoPixel, tamanhoPixel, tamanhoPixel);
            if (trail[i].x == posicaoX && trail[i].y == posicaoY) {
                velocidadeX = velocidadeY = 0;
            }
        }

        trail.push(
            {
                x: posicaoX,
                y: posicaoY
            }
        )
        while (trail.length > tail) {
            trail.shift();
        }

        if (appleX == posicaoX && appleY == posicaoY) {
            tail++;
            appleX = Math.floor(Math.random() * qtdPixel);
            appleY = Math.floor(Math.random() * qtdPixel);
        }
    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 37: //left
                if (velocidadeX != vel) {
                    velocidadeX = -vel;
                    velocidadeY = 0;
                    
                }
                break;
            case 38: //up
            if (velocidadeY != vel) {
                velocidadeX = 0;
                velocidadeY = -vel;
                
            }
            break;
            case 39://right
            if (velocidadeX != -vel) {
                velocidadeX = vel;
                velocidadeY = 0;
                
            }
            break;
            case 40: //down
            if (velocidadeY != -vel) {
                velocidadeX = 0;
                velocidadeY = vel;
                
            }
            break;

        }
    }
}