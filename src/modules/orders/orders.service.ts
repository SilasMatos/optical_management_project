import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  private orders = []; // Simulação de um banco de dados

  create(createOrderDto: CreateOrderDto) {
    const order = { id: this.orders.length + 1, ...createOrderDto };
    this.orders.push(order);
    return order;
  }

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    return this.orders.find(order => order.id === id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    const orderIndex = this.orders.findIndex(order => order.id === id);
    if (orderIndex > -1) {
      this.orders[orderIndex] = { ...this.orders[orderIndex], ...updateOrderDto };
      return this.orders[orderIndex];
    }
    return null;
  }

  remove(id: number) {
    const orderIndex = this.orders.findIndex(order => order.id === id);
    if (orderIndex > -1) {
      return this.orders.splice(orderIndex, 1);
    }
    return null;
  }
}
