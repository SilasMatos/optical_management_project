import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  private inventory = []; // Simulação de um banco de dados

  create(createInventoryDto: CreateInventoryDto) {
    const inventoryItem = { id: this.inventory.length + 1, ...createInventoryDto };
    this.inventory.push(inventoryItem);
    return inventoryItem;
  }

  findAll() {
    return this.inventory;
  }

  findOne(id: number) {
    return this.inventory.find(item => item.id === id);
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    const itemIndex = this.inventory.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      this.inventory[itemIndex] = { ...this.inventory[itemIndex], ...updateInventoryDto };
      return this.inventory[itemIndex];
    }
    return null;
  }

  remove(id: number) {
    const itemIndex = this.inventory.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      return this.inventory.splice(itemIndex, 1);
    }
    return null;
  }
}
