import Transaction, {TransactionType} from './transaction';

export default class Deposit extends Transaction {
    constructor(value: number, transactionDate: Date){
        super({
            type: TransactionType.DEPOSIT,
            value: value,
            date: transactionDate
        })
    }
}