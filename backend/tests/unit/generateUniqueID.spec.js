const generateUniqueID = require('../../src/utils/generateUniqueID')

describe('Generate Unique ID', () => {
    it('Should generate a unique ID', () => {
        const id_1 = generateUniqueID();
        const id_2 = generateUniqueID();
        expect(id_1).toHaveLength(8);
        expect(id_2).toHaveLength(8);
        expect(id_1).not.toBe(id_2);
    })
});