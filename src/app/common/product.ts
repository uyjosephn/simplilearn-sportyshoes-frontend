export class Product {

    constructor(
        public id: string,
        public sku: string,
        public productName: string,
        public unitPrice: number,
        public imageUrl: string, 
        public activeFlg: boolean, 
        public unitsInStock: number, 
        public dateCreated: Date,
        public lastUpdated: Date
        ) {}
}
