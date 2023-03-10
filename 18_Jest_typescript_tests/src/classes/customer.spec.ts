import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111.111');
    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Otávio');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111.111');
    expect(sut.getName()).toBe('Luiz Otávio');
    expect(sut.getIdn()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have name, cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIdn()).toBe('222');
  });
});
