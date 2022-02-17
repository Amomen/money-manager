function calculation(positive) {
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
    costing.innerText = a;

    // exclude costing from income
    const income = document.getElementById('income');
    const incomeInt = parseFloat(income.value);
    const afterCosting = incomeInt - a;

    //Show total balance after costing
    const balance = document.getElementById('balance');
    const balanceInt = parseFloat(balance.innerText);
    balance.innerText = afterCosting;

    if (isNaN(incomeInt)) throw "not a number";

}

document.getElementById('calculate').addEventListener('click', function () {

    calculation()

})

//savings
document.getElementById('sBtn').addEventListener('click', function () {

    //catch the income
    const income = document.getElementById('income');
    const incomeInt = parseFloat(income.value);

    //saving Input
    const saving = document.getElementById('save');
    const sFloat = parseFloat(saving.value);

    //saving calculation
    const parcent = parseFloat(incomeInt * sFloat) / 100;


    //saving Show
    document.getElementById('sAmount').innerText = parcent;

    //remaining balance
    const balance = document.getElementById('balance');
    const balanceInt = parseFloat(balance.innerText);
    document.getElementById('rBalance').innerText = balanceInt - parcent;

})