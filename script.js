const annualIncome = document.getElementById("annualIncome")
const creditScore = document.getElementById("creditScore")

const errorMsg = document.getElementById("errorMsg")
const displayLoan = document.getElementById("results")

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

displayLoan.innerHTML = `You qualify for a duplex, condo, and car loan.`


const checkEligibility = () => {
    // alert('yes')
    if (annualIncome.value.trim() === "" || creditScore.value.trim() === "") {
        errorMsg.style.display = "block"
    } else {
        errorMsg.style.display = "none"
        if (creditScore.value.trim() >= minCreditScoreForDuplex && annualIncome.value.trim() >= minIncomeForDuplex) {
            displayLoan.innerHTML = `You qualify for a duplex, condo, and car loan.`
            displayLoan.style.border = "2px solid red"
            console.log(" sjfn knw");
            
        } else if (annualIncome.value.trim() >= minIncomeForCondo && creditScore.value.trim() >= minCreditScoreForCondo) {
            displayLoan.innerHTML = `You qualify for a condo, and car loan.`
        } else if (annualIncome.value.trim() >= minIncomeForCar && creditScore.value.trim() >= minCreditScoreForCar) {
            displayLoan.innerHTML = `You qualify for a car loan.`
        } else {
            displayLoan.innerHTML = `You don't qualify for any loans.`
        }
    }

    
}
