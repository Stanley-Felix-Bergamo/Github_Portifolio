import Projetos from "./Container/Projetos";
import Sidebar from "./Container/Sidebar";
import Sobre from "./Container/Sobre";
import EstiloGlobal, { Container } from "./styles";
function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  );
}

export default App;
