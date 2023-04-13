import Deposit from './deposit'
import { TransactionType } from './transaction'

describe( "Should test the deposit Class", () => {
    test("Should instatiate a depostic Class",function() {
        const transactionDate = new Date('2023-08-07T15:00:00')
        const deposit = new Deposit(100, transactionDate)
        expect(deposit.type).toBe(TransactionType.DEPOSIT)
        expect(deposit.value).toBe(100)
        expect(deposit.date).toBe(transactionDate)
    })
})