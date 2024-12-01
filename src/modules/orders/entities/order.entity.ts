export class Order {
  id: number;
  customerId: number;
  productIds: string; // Lista de IDs de produtos separados por vírgula
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
