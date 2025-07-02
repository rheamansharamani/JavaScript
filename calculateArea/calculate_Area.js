let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

   let area = length * width;
   document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }

function calculateTotalAmount(){
    Grocery1 = parseFloat(document.getElementById('Grocery-1').value);
    Grocery2 = parseFloat(document.getElementById('Grocery-2').value);
    Grocery3 = parseFloat(document.getElementById('Grocery-3').value);
    let TotalAmount = Grocery1 + Grocery2 + Grocery3;
    document.getElementById('TotalAmount').innerText = `The total amount is :$ ${TotalAmount}`;
}