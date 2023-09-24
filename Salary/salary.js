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
    {MaxS:Infinity,deduction:1700},
];



//Function for calculating tax.
function calculateTax (GrossSalary){
    let tax = 0  //setting tax to 0
    for (i=0;i<TaxRates.length; i++ ) {
        let {MaxS,rate}=TaxRates[i]  //fetching MaxS and rate for TaxRates array.
        if (GrossSalary<MaxS){
            tax += GrossSalary*rate;
            break;                       // Calculating tax.
        } else if (GrossSalary>=MaxS){
            tax += MaxS*rate;
            GrossSalary -= MaxS          // Calculating tax.
        }
    return tax;
    }  
};

//Function for calculating NHIF deductions.
function calculateNHIF (GrossSalary){
    let Deduc = 0;  // let deduction = 0
    for (i=0; i<NHIFrates.length; i++){
        let {MaxS,deduction} = NHIFrates[i];  //Fetching MaxS and deduction for NHIFrates array.
        if (GrossSalary<=MaxS){
            Deduc=deduction;        //Calculating deduction.
            break;
        }
    }
    return Deduc;
};

//Function for calculating NSSF deduction.
function calculateNSSF(GrossSalary){
    let Deduc =0;
    const LEL = 6000;      // Lower Earning Limit
    const UEL = 18000;     //Upper Earning LImit
    const tier1 = 360;
    const tier2 =720;

    if (GrossSalary<=LEL){
        Deduc= Math.min(tier1,GrossSalary * 0.06)
    }else if (GrossSalary>LEL && GrossSalary<=UEL && GrossSalary>UEL){
        Deduc=Math.min(tier2,GrossSalary * 0.06)
    }
    return Deduc;
}
let BasicSalary;
let Pension;
let Benefits;
// function for calculating Net income.
function netIncome(BasicSalary,Pension,Benefits){
    const grossSalary = BasicSalary + Benefits;
    const NhifDeduction= calculateNHIF(grossSalary);
    const NssfDeduction= calculateNSSF(grossSalary);
    const tax = calculateTax(grossSalary);
    const NetSalary = grossSalary- NhifDeduction- NssfDeduction -tax;
    return {                  //returning all calculation done in the function.
        grossSalary,
        NhifDeduction,
        NssfDeduction,
        tax,
        NetSalary
    }
};
// Exporting functions and arrays.
module.exports = {calculateNHIF,calculateTax,netIncome,calculateNSSF,NHIFrates,TaxRates};





