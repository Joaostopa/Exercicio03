const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');


const aluno1 = new Aluno("João Vitor", "joao123456", "2210177");
const turma1 = new Turma("AS64b", 10);
const turmaPresencial1 = new TurmaPresencial("AS64b", 6, 80);


console.log(aluno1);
console.log(turma1);
console.log(turmaPresencial1);
console.log("Aprovado na Turma 1:", turma1.aprovado());
console.log("Aprovado na Turma Presencial 1:", turmaPresencial1.aprovado());
