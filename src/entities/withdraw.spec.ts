import Withdraw from './withdraw'
import { TransactionType } from './transaction'

describe( "Should test the withdraw Class", () => {
    test("Should instatiate a depostic Class",function() {
        const transactionDate = new Date('2023-08-07T15:00:00')
        const withdraw = new Withdraw(100, transactionDate)
        expect(withdraw.type).toBe(TransactionType.WITHDRAW)
        expect(withdraw.value).toBe(-100)
        expect(withdraw.date).toBe(transactionDate)
    })
})