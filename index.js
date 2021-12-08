const suma = (a,b) => {
    return a + b;  
}

const resta = (a,b) => {
    return a - b;
}

function range(_start_, _end_, value) {
    return (new Array(_end_ - _start_ + 1)).fill(undefined).map((_) => value);
}

const multiplicacion = (a,b) => {
    return range(1,b,a)
    .reduce((x,y) => suma(x,y))
}

const division = (num,den) => {
    return range(1,num,den)
    .reduce((acumulador,numero) => {
        if (multiplicacion(numero, den) <= den) {
            return acumulador = acumulador+1;
        }
        return acumulador;
    })
}


console.log(suma(2,5));
console.log(resta(5,2));
console.log(multiplicacion(4,5));//20
console.log(division(95, 3))//3