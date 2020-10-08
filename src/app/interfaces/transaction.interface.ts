export interface TransactionInterface {
    id: number;
    nomeProduto: string;
    dataEntrega: Date | string;
    quantidade: number;
    valorUnitario: number;
}
