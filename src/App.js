import { styled } from "styled-components";
import "./App.css";
import Header from "./components/header/Header";
import AppRouters from "./routers/AppRouters";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <AppRouters />
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
`;

export default App;
