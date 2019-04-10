var first_play = 1;
var vet = [
            ["","",""],
            ["","",""],
            ["","",""]

];
var vet1 = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"]

];

for(var i=0; i<9; i++){
    (document.getElementById(toString(i)).innerHTML=""); 
}
function play(id){
if(document.getElementById(id).innerHTML=="") 
    if(first_play % 2 == 0){
        document.getElementById(id).innerHTML = "<img src= 'o1.png'>";
var imagem = "o";

    }else{
        document.getElementById(id).innerHTML = "<img src= 'x1.png'>";
        var imagem = "x";
    }
    switch(parseInt(id)) {
        case 1:
        case 2:
        case 3:
            vet[0][parseInt(id)-1]=imagem;
          break;        
        case 4:
        case 5:
        case 6:
            vet[1][parseInt(id)-4]=imagem;
          break;
        case 7:
        case 8:
        case 9:
            vet[2][parseInt(id)-7]=imagem;
      }
console.log(vet);
    first_play ++;
}

