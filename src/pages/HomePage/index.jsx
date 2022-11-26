import { useState, useEffect } from "react";
import deleteIcon from "../../assets/delete.svg";
import checkIcon from "../../assets/check.svg";
import { HomePageStyled } from "./styled";

export default function HomePage() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["Tarefa Exemplo"]);
  const [listaConcluida, setListaConcluida] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    novaTarefa === "" ? alert("Insira uma tarefa") : setLista(novaLista);
    setNovaTarefa("");
  };

  const adicionaTarefaTecla = (event) => {
    if (event.charCode === 13) {
      adicionaTarefa();
    }
  };

  const removeTarefa = (indexTarefa) => {
    const itemConcluido = lista.filter((item, index) => index === indexTarefa);
    const listaFiltrada = lista.filter((item, index) => index !== indexTarefa);
    setLista(listaFiltrada);
    setListaConcluida([...listaConcluida, itemConcluido]);
    localStorage.setItem("lista", JSON.stringify((listaFiltrada)))
  };
  const deletaTarefa = (indexTarefa) => {
    const itemADeletar = listaConcluida.filter(
      (item, index) => index === indexTarefa
    );
    const listaSemItemDeletado = [...listaConcluida];
    listaSemItemDeletado.splice(itemADeletar, 1);
    setListaConcluida([...listaSemItemDeletado]);
    localStorage.setItem("listaConcluida", JSON.stringify((listaSemItemDeletado)))
  };

  const renderizaLista = lista.map((tarefa, index) => {
    return (
      <li className="card" key={index}>
        <p>{tarefa}</p>
        <button onClick={() => removeTarefa(index)}>
          <img className="image-delete" src={checkIcon} alt="" width="16px" />
        </button>
      </li>
    );
  });

  useEffect(() => {
    if (lista.length > 1) {
      localStorage.setItem("lista", JSON.stringify(lista));
    }
  }, [lista]);

  useEffect(() => {
    const listaJson = JSON.parse(localStorage.getItem("lista"));
    if (listaJson) {
      setLista(listaJson);
    }
  }, []);

  useEffect(() => {
    if (listaConcluida.length > 0) {
      localStorage.setItem("listaConcluida", JSON.stringify(listaConcluida));
    }
  }, [listaConcluida]);

  useEffect(() => {
    const listaJson = JSON.parse(localStorage.getItem("listaConcluida"));
    if (listaJson) {
      setListaConcluida(listaJson);
    }
  }, []);

  return (
    <HomePageStyled>
      <section className="background">
        <section className="input">
          <input
            placeholder="Digite aqui uma tarefa"
            value={novaTarefa}
            onChange={onChangeTarefa}
            onKeyPress={(event) => adicionaTarefaTecla(event)}
          />
          <button onClick={adicionaTarefa}>Adicionar</button>
        </section>
        <section>
          <div>
            <div className="container-card">
              <ul>{renderizaLista}</ul>
            </div>
            <hr />
            <div>
              <ul>
                {listaConcluida.map((tarefa, index) => {
                  return (
                    <li className="card" key={index}>
                      <s>{tarefa}</s>
                      <button onClick={() => deletaTarefa(index)}>
                        <img
                          className="image-delete"
                          src={deleteIcon}
                          alt=""
                          width="16px"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </section>
    </HomePageStyled>
  );
}
