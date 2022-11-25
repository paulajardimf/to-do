
// import { ListaContainer, Tarefa } from "./styled";

export default function TarefasConcluidas(props) {
  return (
    <div>
      <div>
        <ul>
          {props.listaConcluida.map((tarefa, index) => {
            return (
              <li key={index}>
                <s>{tarefa}</s>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}