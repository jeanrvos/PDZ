const professoresBackend = ['Guido', 'Guilherme', 'Juninho', 'Leo'];
const professoresFrontend = ['Daniel', 'Dina', 'Vitinho'];


const professoresCubos = [...professoresBackend, ...professoresFrontend];
// console.log(professoresCubos);

const [ , , terceiroProfBack] = professoresBackend;
// console.log(terceiroProfBack);

const [primeiro, ...outrosProfessores] = professoresCubos;
// console.log(primeiro);
// console.log(outrosProfessores);

const [primeiroFront, ...outrosFront] = professoresFrontend;

const profFronAlterada = [...outrosFront, primeiroFront];
console.log(profFronAlterada);