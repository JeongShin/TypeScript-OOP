import Coffee, { ICoffe, CoffeeEnum } from './Coffee';

class Americano extends Coffee implements ICoffe {
  name = CoffeeEnum.Americano;

  ingredients = {
    water: 6,
    coffe: 4,
  } as const;

  constructor() {
    super();
  }
}

export default Americano;
