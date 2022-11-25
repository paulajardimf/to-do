
import { useState } from "react";
import TarefasConcluidas from "./TarefasConcluidas";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaConcluida, setListaConcluida] = useState([])

  const renderizaLista = lista.map((tarefa, index) => {
    return (
      <li key={index}>
        <p>{tarefa}</p>
        <button onClick={() => removeTarefa(index)}>
          <img src="" alt="" width="16px" />
        </button>
      </li>
    );
  })

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (indexTarefa) => {
    const itemConcluido = lista.filter((item, index) => index === indexTarefa);
    const listaFiltrada = lista.filter((item, index) => index !== indexTarefa);
    setLista(listaFiltrada);
    setListaConcluida([...listaConcluida, itemConcluido])
  };

  const adicionaTarefaTecla = (event) => {
    if (event.charCode === 13) {
      adicionaTarefa()
    }
  }

  return (
    <div>
      <div>
        <input
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={(event) => adicionaTarefaTecla(event)}
        />
        <button onClick={adicionaTarefa}>Adicionar</button>
      </div>
      <div>
        <ul>{renderizaLista}</ul>
      </div>
      <hr/>
      <TarefasConcluidas listaConcluida={listaConcluida}/>
    </div>
  );
}