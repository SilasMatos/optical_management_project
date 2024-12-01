import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  private customers = []; // Simulação de um banco de dados

  create(createCustomerDto: CreateCustomerDto) {
    const customer = { id: this.customers.length + 1, ...createCustomerDto };
    this.customers.push(customer);
    return customer;
  }

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    return this.customers.find(customer => customer.id === id);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customerIndex = this.customers.findIndex(customer => customer.id === id);
    if (customerIndex > -1) {
      this.customers[customerIndex] = { ...this.customers[customerIndex], ...updateCustomerDto };
      return this.customers[customerIndex];
    }
    return null;
  }

  remove(id: number) {
    const customerIndex = this.customers.findIndex(customer => customer.id === id);
    if (customerIndex > -1) {
      return this.customers.splice(customerIndex, 1);
    }
    return null;
  }
}
