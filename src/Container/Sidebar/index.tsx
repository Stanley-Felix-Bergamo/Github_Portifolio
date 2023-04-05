import Avatar from "../../Components/Avatar";
import Paragrafo from "../../Components/Paragrafo";
import Titulo from "../../Components/Titulo";
import { BotaoTema, Descricao, SidebarContainer } from "./styles";
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Stanley Felix Bergamo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Stanley-Felix-Bergamo
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
