import Titulo from "../../Components/Titulo";
import Paragrafo from "../../Components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
      deserunt, qui eaque sed iusto ex provident necessitatibus animi vero
      corporis eum non quae debitis ea beatae veniam placeat. Deserunt, magnam.
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Stanley-Felix-Bergamo&show_icons=true&theme=midnight-purple" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Stanley-Felix-Bergamo&layout=compact&langs_count=10&theme=midnight-purple" />
    </GithubSecao>
  </section>
);

export default Sobre;
