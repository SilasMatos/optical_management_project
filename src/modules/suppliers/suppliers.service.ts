import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  private suppliers = []; // Simulação de um banco de dados

  create(createSupplierDto: CreateSupplierDto) {
    const supplier = { id: this.suppliers.length + 1, ...createSupplierDto };
    this.suppliers.push(supplier);
    return supplier;
  }

  findAll() {
    return this.suppliers;
  }

  findOne(id: number) {
    return this.suppliers.find(supplier => supplier.id === id);
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    const supplierIndex = this.suppliers.findIndex(supplier => supplier.id === id);
    if (supplierIndex > -1) {
      this.suppliers[supplierIndex] = { ...this.suppliers[supplierIndex], ...updateSupplierDto };
      return this.suppliers[supplierIndex];
    }
    return null;
  }

  remove(id: number) {
    const supplierIndex = this.suppliers.findIndex(supplier => supplier.id === id);
    if (supplierIndex > -1) {
      return this.suppliers.splice(supplierIndex, 1);
    }
    return null;
  }
}
