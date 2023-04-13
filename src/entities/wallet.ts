import Transaction, { TransactionType } from './transaction'

export type WalletProps = {
    cpf: string,
    ammount?: number,
    transactions?: Transaction[]
}

export default class Wallet {
    private transactions: Transaction[] = []

    constructor(private readonly props: WalletProps) {
        this.cpf = props.cpf
        this.ammount = props.ammount | 0
    }

    get cpf() : string {
        return this.props.cpf
    }

    private set cpf(value: string) {
        this.props.cpf = value;
    }

    get ammount() : number {
        return this.transactions.reduce((accumlator: number, current: Transaction) => {
            return accumlator + current.value
        }, 0)
    }

    private set ammount(value: number) {
        this.props.ammount = value;
    }

    public addTransaction(transaction: Transaction) {
        this.transactions.push(transaction)
    }
    
}

