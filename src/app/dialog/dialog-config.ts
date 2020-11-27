// É possível inserir qualquer propriedade nessa classe
// No caso do Material eles usam essa class para inserir propriedades do estilo do dialog, exemplo width e height

export class DialogConfig<D = any> {
  data?: D
}