// Array consisting of the tax rates.
const TaxRates = [
    {MaxS:24000,rate:0.1},
    {MaxS:32333,rate:0.25},
    {MaxS:500000,rate:0.3},
    {MaxS:800000,rate:0.325},
    {MaxS:Infinity,rate:0.35}
];

//Array consisting of NHIF rates.

const NHIFrates= [
    {MaxS:5999,deduction:150},
    {MaxS:7999,deduction:300},
    {MaxS:11999,deduction:400},
    {MaxS:14999,deduction:500},
    {MaxS:19999,deduction:600},
    {MaxS:24999,deduction:750},
    {MaxS:29999,deduction:850},
    {MaxS:34999,deduction:900},
    {MaxS:39999,deduction:950},
    {MaxS:44999,deduction:1000},
    {MaxS:49999,deduction:1100},
    {MaxS:59999,deduction:1200},
    {MaxS:69999,deduction:1300},
    {MaxS:79999,deduction:1400},
    {MaxS:89999,deduction:1500},
    {MaxS:99999,deduction:1600},
    {MaxS:Infinity,deduction:11700},
];



//Function for calculating tax.
function calculateTax (GrossSalary){
    let tax = 0  //setting tax to 0
    for (i=0,i<TaxRates.length, i++ ) {
        const {MaxS,rate}=TaxRates[i]  //fetching MaxS and rate for TaxRates array.
        if (GrossSalary<MaxS){
            tax = GrossSalary*rate;   // Calculating tax.
        } else if (MaxS=GrossSalary){
            tax = MaxS*rate;          // Calculating tax.
            break;
        }
    return tax;
    }  
};



