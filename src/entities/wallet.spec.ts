import Transaction from './transaction'
import Wallet from './wallet'

describe("Wallet Unit test", () => {

    test("should create a wallet", () => {
        expect(new Wallet({
            cpf: "123123123"
        }))
    })

    test("should create a wallet with ammount = 0", () => {
        const wallet = new Wallet({ cpf: "123123123" })
        expect(wallet.ammount).toBe(0)
    })

    test("should create a deposit", () => {
        const wallet = new Wallet({ cpf: "123123" }) 
        wallet.addTransaction(new Deposit({ amount : 100, transactionDate : new Date('2022-07-04T15:00:00')}));
        expect(wallet.ammount).toBe(100)
    })

    test.skip("should create a withdraw", () => {
        const wallet = new Wallet({ cpf: "123123" }) 
        wallet.addTransaction(new Deposit({ amount : 100, transactionDate : new Date('2022-07-04T15:00:00')}));
        wallet.addTransaction(new Withdraw({ amount : 50, transactionDate : new Date('2022-10-04T15:00:00')}));
        expect(wallet.ammount).toBe(50)
    })
})