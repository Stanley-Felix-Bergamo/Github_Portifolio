import Titulo from "../../Components/Titulo";
import Paragrafo from "../../Components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Olá, meu nome é Stanley ! ,Graduado em Ciências da Computação na
      Universidade Estácio de Sá. Tenho conhecimento em: Html, Css, Sass,
      Bootstrap, JavaScript, Jquery, TypeScript, React, Vue.
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Stanley-Felix-Bergamo&show_icons=true&theme=midnight-purple" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Stanley-Felix-Bergamo&layout=compact&langs_count=10&theme=midnight-purple" />
    </GithubSecao>
  </section>
);

export default Sobre;
