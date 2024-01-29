export interface LastOrdersReceipts {
    each: {
        name: string;
        date: string;
        amount: string;
        status: string;
        imgUrl: string;
    }
}[]