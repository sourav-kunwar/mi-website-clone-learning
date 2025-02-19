// "use strict";

function cutfruit(fruit)
{
    return fruit*4;
}

function fruitprocessor(apples,oranges)
{
    const applepieces = cutfruit(apples);
    const orangepieces = cutfruit(oranges);
    const juice =`juice with ${applepieces} apples and ${orangepieces} oranges`;
    return juice;
}
console.log(fruitprocessor(3,4));