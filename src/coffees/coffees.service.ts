import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
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

  create(createCoffeeDto: CreateCoffeeDto) {
    this.coffees.push({
      id: this.coffees.length + 1,
      ...createCoffeeDto,
    });

    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
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
