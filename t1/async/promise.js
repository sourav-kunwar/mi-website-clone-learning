// const rect1 = {
//     l : 20,
//     b : 30
// }
// function area(rect){
//     return rect.l * rect.b;
// }
// const ans = area(rect1);
// console.log(ans);

class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width * this.height;
        return area;
    }
    paint(){
        console.log(`painting the color ${this.color}`);
    }
}
//creating the object

const rect = new Rectangle(2,4,"red");
const area = rect.area();
console.log(rect.height*rect.width);
rect.paint();
console.log(area);



//creating the class for cirle

class Circle
{
    constructor(radius,color)
    {
        this.radius = radius;
        this.color = color;
    }
    area(){
        const area = 3.14 * this.radius*this.radius;
        return area;
    }
    paint(){
        console.log("color is ${this.color}");
    }
}

const circle = new Circle(10,'red');
const are = circle.area();
console.log(are);
console.log(circle.radius*circle.radius);