"use strict";


// 1.Parametr olaraq string tipində ad alıb, konsolda 
// "Salam hörmətli filankəs" yazan funksiya qurun

let hello = function(a,b) {
    return a+b;
};
console.log(hello("Salam hormetli " , "filankes"));

function salam (ad = "filankes" , mesaj= "Salam hormetli") {
    return `${mesaj} ${ad} `;
};
console.log(salam());


// 2. Verilmiş ədədin cüt yoxsa tək olduğunu Boolean 
// tipində (true və ya false) return edən funksiya qurun

function eded(m,n) {
    if(m%2===0){
        return true;
    }
    if (m%2==!0) {
        return false;
    }
};
console.log(eded(40));

// 3.Aşağıdakı nəticəni verən bir funksiya qurun
// const info = createInfo('Cavad', 185, {model: 'Samsung', version: 'Galaxy'}, ['reading', 'coding', 'drawing'])
// console.log(info)
// {name: 'Cavad', height: '185', phone: {model: 'Samsung', version: 'Galaxy'}, hobbies: ['reading', 'coding', 'drawing']}

function info() {
    return {
        ad: "Cavad",
        height: 185,
        phone: {
            model: "Samsung",
            version: "Galaxy"
        },
        hobbies: ["reding", "coding", "drawing"]
    };
};
console.log(info());

// 4.Verilən ədədin kubunu return edən arrow function hazırlayın.
let number = (x)=>{
    return x*x*x;
};
console.log(number(5));

// 5. Farenheyt ilə gələn Number tipindəki temperatur məlumatını Selsiyə çevirib return edən,
//  həmçinin verilən Farenheyt məlumatına görə suyun qaynamasına 
// neçə Selsi qaldığını konsolda göstərən 2 funksiya hazırlayıb, 
// birincini ikinicinin daxilində istifadə edin.
// Qeydlər:
//     1. Farenheyt temperaturu Selsiyə çevirmə qaydası: C° = (F° - 32) / 1.8
//     2. Suyun qaynama temperaturu: 100 C°



