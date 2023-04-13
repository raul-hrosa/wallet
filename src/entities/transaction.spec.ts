import Transaction, { TransactionType } from './transaction'

type StubTransactionProps = {
    value: number,
    date: Date
}

class StubTransaction extends Transaction {
    constructor(props: StubTransactionProps) {
        super({
            value: props.value,
            type: TransactionType.DEPOSIT,
            date: props.date
        })
    }
}

describe("Transaction Unit test", () => {
    test("should create a Transaction", () => {
        expect(new StubTransaction({
            value: 100,
            date: new Date()
        }))
    })

    test("should retrun a positive value when transaction type is deposit", () => {
        
        const transaction = new StubTransaction({
            value: 100,
            date: new Date()
        })
        expect(transaction.value).toBe(100)
    })

    test.skip("should retrun a negative value when transaction type is withdraw", () => {
        const transaction = new StubTransaction({
            value: 100, 
            date: new Date()
        })
        expect(transaction.value).toBe(-100)
    })
})