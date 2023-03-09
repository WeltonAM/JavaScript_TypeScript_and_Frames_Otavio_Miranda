type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título.',
  texto: 'O texto maior que o título.',
  data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Não existe data.');
