
describe("addNumbers", function () {
    it("should add 2 numbers and return total sum", function () {
        var x = 5;
        var y = 5;
        var expectedResult = 10;
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
    it("should add 2 numbers and return total sum", function () {
        var x = 5;
        var y = -5;
        var expectedResult = 0;
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
    it("should add 2 numbers and return total sum", function () {
        var x = -5;
        var y = -5;
        var expectedResult = -10;
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
    it("should add 2 numbers and return total sum", function () {
        var x = 0;
        var y = 5;
        var expectedResult = 5;
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
    it("should add 2 numbers and return total sum", function () {
        var x = 0;
        var y = 0;
        var expectedResult = 0;
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
    it("should add 2 numbers and return total sum", function () {
        var x = 5;
        var y = null;
        var expectedResult = 5;
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
    it("should add 2 numbers and return total sum", function () {
        var x = 5;
        var y = "";
        var expectedResult = "5";
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
    it("should add 2 numbers and return total sum", function () {
        var x = 5;
        var y = "n";
        var expectedResult = "5n";
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
    it("should add 2 numbers and return total sum", function () {
        var x = 5;
        var y = 100;
        var expectedResult = 105;
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
    it("should add 2 numbers and return total sum", function () {
        var x = 598765432;
        var y = 5;
        var expectedResult = 598765437;
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
    it("should add 2 numbers and return total sum", function () {
        var x = -598765432;
        var y = 5;
        var expectedResult = -598765427;
        var actualResult = addNumbers(x, y);
        expect(actualResult).toBe(expectedResult);
    });
});