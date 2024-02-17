const { addressParser } = require('../address-parser');

 describe('Address Parser', () => {
     test('should parse correctly', () => {
         expect(addressParser("test to...")
         ).toEqual({
             action1: "1",
             action2: "2",
             action3: "3",
         });
     });
 });