import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import { Card, Botao } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo>Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lista de tarefas com filtro utilizando o framework React
    </Paragrafo>
    <Botao>Visualizar</Botao>
  </Card>
);

export default Projeto;
