import Coffee, { ICoffe, CoffeeEnum } from './Coffee';

class Ristretto extends Coffee implements ICoffe {
  name = CoffeeEnum.Ristretto;

  ingredients = {
    coffe: 2,
  } as const;

  constructor() {
    super();
  }
}

export default Ristretto;
