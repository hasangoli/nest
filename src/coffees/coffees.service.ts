import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string): Coffee {
    return this.coffees.find((coffee: Coffee): boolean => coffee.id === +id);
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee: Coffee = this.findOne(id);
    if (existingCoffee) {
      console.log(updateCoffeeDto);
    }
  }

  remove(id: string) {
    const coffeeIndex: number = this.coffees.findIndex(
      (coffee: Coffee): boolean => coffee.id === +id,
    );
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
