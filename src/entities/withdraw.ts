import Transaction, {TransactionType} from './transaction';

export default class Withdraw extends Transaction {
    constructor(value: number, transactionDate: Date){
        super({
            type: TransactionType.WITHDRAW,
            value: -value,
            date: transactionDate
        })
    }
}