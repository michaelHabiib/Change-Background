const numbers = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
btn = document.getElementById("btn2");
color = document.getElementById("color2");

btn.addEventListener ("click", function () {
    let hexColor = "#"
    for (i=0; i<6; i++) {
        hexColor = hexColor + numbers[getRandomNumber2()]
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor
    console.log(hexColor)
});

function getRandomNumber2 () {
    return  Math.floor(Math.random() * numbers.length)
}