const runner = require('./romanNumber');
describe("Roman IV Number", () => {
   it("Number 1 should be return I", () => {
      var result = runner(1);
      expect(result).toEqual("I");
   });
   it("Number 2 should be return II", () => {
      var result = runner(2);
      expect(result).toEqual("II");
   });
   it("Number 3 should be return III", () => {
      var result = runner(3);
      expect(result).toEqual("III");
   });
   it("Number 4 should be return IV", () => {
      var result = runner(4);
      expect(result).toEqual("IV");
   });
   it("Number 5 should be return V", () => {
      var result = runner(5);
      expect(result).toEqual("V");
   });
   it("Number 6 should be return VI", () => {
      var result = runner(6);
      expect(result).toEqual("VI");
   });
   it("Number 7 should be return VII", () => {
      var result = runner(7);
      expect(result).toEqual("VII");
   });
   it("Number 8 should be return VIII", () => {
      var result = runner(8);
      expect(result).toEqual("VIII");
   });

})