import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
  color: #ffff;
  width: 120px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => (props.principal ? '#fafa' : '#ffaf')};
  }
`

const BotaoAlerta = styled(Botao)`
  background-color: #fafd0f;
  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <div>
        <Botao principal>Enviar</Botao>
      </div>
      <div>
        <Botao principal={false}>Cancelar</Botao>
      </div>
      <div>
        <BotaoAlerta as="a" principal>
          <span>Alerta</span>
        </BotaoAlerta>
      </div>
    </>
  )
}

export default Teste
