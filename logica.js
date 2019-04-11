var plays = 1;
var fim = "";
var vet = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
var velha = "DEU VELHA!!!"
for (var i = 0; i < 9; i++) {
    (document.getElementById(toString(i)).innerHTML = "");
}
function play(id) {
    if (fim == "x" || fim == "o") {
        return null;
    }
    const el = document.getElementById(id);
    if (el.innerHTML == "")
        if (plays % 2 == 0) {
            el.innerHTML = "<img src='o1.png' class='imagem'>";
            var imagem = "o";
        } else {
            el.innerHTML = "<img src= 'x1.png' class='imagem'>";
            var imagem = "x";
        }
    switch (parseInt(id)) {
        case 1:
        case 2:
        case 3:
            vet[0][parseInt(id) - 1] = imagem;
            break;
        case 4:
        case 5:
        case 6:
            vet[1][parseInt(id) - 4] = imagem;
            break;
        case 7:
        case 8:
        case 9:
            vet[2][parseInt(id) - 7] = imagem;
    }
    console.log(vet);
    plays++;
    fim = vitoria();
    console.log(fim)
}
function vitoria() {
    for (var i = 0; i < 3; i++) {
        if (vet[i][0] == vet[i][1] && vet[i][0] == vet[i][2]) { //AQUI O LOOP ESTÁ COMPARANDO AS LINHAS DO VETOR.
            if (vet[i][0] == "x") {
                console.log(1)
                alert('O VENCEDOR FOI X!');
                return 'x';
            }
            else if (vet[i][0] == "o") {
                alert('O VENCEDOR FOI "O" (BOLINHA)!');
                return 'o';
            }
        }
        else if (vet[0][i] == vet[1][i] && vet[0][i] == vet[2][i]) { //AQUI O LOOP ESTÁ COMPARANDO AS COLUNAS DO VETOR.
            if (vet[0][i] == "x") {
                alert('O VENCEDOR FOI X!');
                return 'x';
            }
            else if (vet[0][i] == "o") {
                alert('O VENCEDOR FOI "O" (BOLINHA)!');
                return 'o';
            }
        }
    }
    if (vet[0][0] == vet[1][1] && vet[0][0] == vet[2][2]) { //AQUI O LOOP ESTÁ COMPARANDO A DIAGONAL ESQUERDA \
        if (vet[0][0] == 'x') {
            alert('O VENCEDOR FOI X!');
            return 'x';
        }
        else if (vet[0][0] == "o") {
            alert('O VENCEDOR FOI "O" (BOLINHA)!');
            return 'o';
        }
    }
    if (vet[0][2] == vet[1][1] && vet[0][2] == vet[2][0]) { //AQUI O LOOP ESTÁ COMPARANDO A DIAGONAL DIREITA /
        if (vet[0][2] == 'x') {
            alert('O VENCEDOR FOI X!');
            return 'x';
        }
        else if (vet[0][2]) {
            alert('O VENCEDOR FOI "O" (BOLINHA)!');
            return 'o';
        }
    }
    if (plays == 10) { //AQUI ELE VERIFICA SE É VELHA ATRAVÉS DA VERIFICAÇÃO DO NÚMERO DE JOGADAS.
        alert(velha);
    }
}
function newgame() {
    window.location.reload()
}