const getAmount = require("./index")

describe('getAmount', ()=>{
    it('should be error, if end date more than start date',()=>{
        const from = '04/07'
        const to = '02/07'
        const result = getAmount(from, to)
        expect(result).toEqual("error")
    })
    it('should be 3, if month is match',()=>{
        const from = '02/07'
        const to = '04/07'
        const result = getAmount(from, to)
        expect(result).toEqual(3)
    })

    it('should be 114, if month is match',()=>{
        const from = '20/06'
        const to = '04/07'
        const result = getAmount(from, to)
        expect(result).toEqual(114)
    })

    it('should be 300, if month is match',()=>{
        const from = '10/03'
        const to = '02/07'
        const result = getAmount(from, to)
        expect(result).toEqual(9124)
    })


})