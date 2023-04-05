import Transaction, { TransactionType } from './transaction'

describe("Transaction Unit test", () => {
    test("should create a Transaction", () => {
        expect(new Transaction({
            type: TransactionType.DEPOSIT,
            value: 100,
            date: new Date()
        }))
    })

    test("should retrun a positive value when transaction type is deposit", () => {
        
        const transaction = new Transaction({
            type: TransactionType.DEPOSIT,
            value: 100,
            date: new Date()
        })
        expect(transaction.value).toBe(100)
    })

    test("should retrun a negative value when transaction type is withdraw", () => {
        
        const transaction = new Transaction({
            type: TransactionType.WITHDRAW,
            value: 100,
            date: new Date()
        })
        expect(transaction.value).toBe(-100)
    })
})