type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AcountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string };

const accountMongo: AccountMongo = {
  _id: 'asdasd8u987s$53as',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'Miranda',
};

function mapAccount(accountMongo: AccountMongo): AcountApi {
  const { _id, ...acountData } = accountMongo;
  return { ...acountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

export default 1;
