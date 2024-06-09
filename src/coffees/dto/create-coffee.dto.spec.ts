import { CreateCoffeeDto } from './create-coffee.dto';

describe('CreateCoffeeDto', () => {
  it('should be defined', () => {
    expect(new CreateCoffeeDto()).toBeDefined();
  });
});
