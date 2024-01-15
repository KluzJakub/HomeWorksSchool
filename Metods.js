// 1 - metoda
let cisla = [20, 5, 6, 1, 5];
function Prumer(cisla) {
    let soucet = 0; 
    let prumer = 0;
    for (let i = 0; i < cisla.length; i++) {
        soucet += cisla[i];
    }
    prumer = soucet / cisla.length; 

    return prumer;
}
console.log(Prumer(cisla));
// 2 - metoda odmocnina
let cislo = 9;
function Odmocnina(cislo)
{
    return Math.sqrt(cislo)
}
console.log(Odmocnina(cislo))
// 3 - metoda lichosh
let cislo = 1;
function Liche(cislo)
{
    if (cislo % 2 == 1)
        return "Je liché";  
    else if (cislo % 2 == 0)
        return "Není Liché";
    else
        return "Neznámá hodnota"
}
console.log(Liche(cislo))
// 4 - metoda v poli
let cisla = [120,150,113,110];
function PrvekVPoli(cisla, b){
    for(let i = 0; i < cisla.length; i++){
        if (b == cisla[i])
        return "Prvek" + b + " je v poli";
    }
    return "Prvek " + b + " není v poli";
}
console.log(PrvekVPoli(cisla, 2))
