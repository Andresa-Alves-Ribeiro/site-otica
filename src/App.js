import './App.css';
import Topo from "./components/Topo/Topo";
import Conteudo from './components/Conteudo/Conteudo';
import Rodape from './components/Rodape/Rodape';

export default function App() {
  return (
    <div>
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}