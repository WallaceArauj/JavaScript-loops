let  ageText = prompt ('Digite sua idade: ');
let  age = Number(ageText);

while (age < 18){
    ageText = prompt ('O site só pode ser acessado por maiores de idade. Digite sua idade novamente: ');
    age = Number(ageText); 
}

document.write ('Seja bem vinde!!!');

let optionText;
let option;
do {
    optionText = prompt('Escolha uma opção: \n\n1 - Caviar \n2 - Almondega \n3 - feijoada de fígado');
    option = Number(optionText);
} while (option < 1 || option > 3)

document.write('<br><br>')

switch (option){
    case 1:
        document.write('Escolheu caviar, mas levou pão com ovo!');
        break;
        
    case 2:
        document.write('Escolheu almôndega, mas levou frango!');
        break;
    case 3:
        document.write('Escolheu feijoada com fígado, vc precisa de psicólogo!!')
        break;   
}


const boletim = [];
const qtdMaterias = 3;
const qtdProvas = 3;

for (let i = 0; i < qtdMaterias; i++){
   boletim[i] = [];
   for(let j = 0; j < qtdProvas; j++){
    const nota = prompt(`Digite a nota da ${j + 1}ª prova da ${i + 1} matéria `);
    boletim[i][j] = Number (nota);
   }
}

for (let i = 0; i < qtdMaterias; i++){
    document.write(`<br>${i + 1}ª Matérias: `)
    for(let j = 0; j < qtdProvas; j++){
    document.write(`${boletim [i][j]} \n`);
    }
}
