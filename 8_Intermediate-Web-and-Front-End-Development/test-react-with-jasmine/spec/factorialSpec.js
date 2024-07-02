const factorial = require("../src/factorial");

describe("factorial", () => {
    let calc;


    // This will be called before running each test
    beforeEach(() => {
        calc = factorial;
    });

    describe("when calc is used to perform factorial operations", ()=>{
        it("should be able to calculate factorial of 0",()=>{
            expect(calc.factorial(0)).toEqual(1);
        })

        it("should be able to calculate factorial of 1",()=>{
            expect(calc.factorial(1)).toEqual(1);
        })

        it("should be able to calculate factorial of 5",()=>{
            expect(calc.factorial(5)).toEqual(120);
        })


        it("should be able to throw error in factorial operation when the number is negative", ()=>{
            expect(()=>calc.factorial(-2)).toThrowError(Error);
        })

        it("should be able to throw error in factorial operation when the input is not a number", function () {
            expect(function () {
              calc.factorial(true);
            }).toThrowError(Error);
          });
    })
})