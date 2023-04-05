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

    test("should create a deposito", () => {
        const wallet = new Wallet({ cpf: "123123" }) 
        wallet.deposit(100)
        expect(wallet.ammount).toBe(100)
    })

    test("should create a deposito", () => {
        const wallet = new Wallet({ cpf: "123123" }) 
        wallet.deposit(100)
        wallet.withdraw(50)
        expect(wallet.ammount).toBe(50)
    })
 
 
})