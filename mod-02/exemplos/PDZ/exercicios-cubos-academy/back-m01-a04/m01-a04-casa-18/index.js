const disjuntores = [false, false, true, false, false, true, false, false];

for (i = 0; i < disjuntores.length; i++) {
    const disjuntor = disjuntores[i];
    if (disjuntor) {
        console.log(i);
    }
}