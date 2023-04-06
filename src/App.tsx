import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Projetos from "./Container/Projetos";
import Sidebar from "./Container/Sidebar";
import Sobre from "./Container/Sobre";
import EstiloGlobal, { Container } from "./styles";
import temaLight from "./Themes/light";
import temaDark from "./Themes/dark";

function App() {
  const [estaUsandoTemaDark, SetEstaUsandoTemaDark] = useState(false);

  const trocarTema = () => SetEstaUsandoTemaDark(!estaUsandoTemaDark);

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocarTema={trocarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
