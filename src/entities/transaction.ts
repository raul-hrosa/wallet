export enum TransactionType {
    WITHDRAW = "withdraw",
    DEPOSIT = "deposit"
}

export type TransactionProps = {
    type: TransactionType,
    value: number,
    date: Date
}

export default abstract class Transaction {

    constructor(private readonly props: TransactionProps) {
        this.type = props.type
        this.value = props.value
        this.date = props.date
    }
    
    get type() : TransactionType {
        return this.props.type
    }

    private set type(value: TransactionType) {
        this.props.type = value;
    }

    get value() : number {
        return this.props.value 
    }

    private set value(value: number) {
        this.props.value = value;
    }

    get date() : Date {
        return this.props.date
    }

    private set date(value: Date) {
        this.props.date = value;
    }
}

