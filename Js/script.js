document.getElementById('calculate').addEventListener('click', function () {
    
    //food
    const food = document.getElementById('food');
    const foodInt = parseFloat(food.value);
    //rent
    const rent = document.getElementById('rent');
    const rentInt = parseFloat(rent.value);
    //clothes
    const cloths = document.getElementById('cloths');
    const clothsInt = parseFloat(cloths.value);

    //costing
    const costing = document.getElementById('costing');
    const costingInt = parseFloat(costing.innerText);
    const a = foodInt + rentInt + clothsInt;
    costing.innerText=a;
    


})