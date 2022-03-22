import React, { useState } from "react";
import {
  IonContent,
  IonToolbar,
  IonPage,
  IonTitle,
  IonHeader,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonIcon,
  IonFab,
  IonFabButton,
  useIonViewDidEnter,
} from "@ionic/react";
import { close, add } from "ionicons/icons";
import { useMath } from "../../../core/computed/Math";
import Skeleton from "../../../components/Skeleton/Skeleton";
import IonicModal from "../../../components/Modal/IonicModal";

const todolist_data = [
  { id: 1, name: "FF 16", isDone: false },
  { id: 2, name: "JavaScript", isDone: false },
  { id: 3, name: "WebMobile", isDone: false },
  { id: 4, name: "Gestion projet", isDone: false },
];

interface Todo {
  id: number;
  name: string;
  isDone: boolean;
}

const initialTodo: Todo[] = [];

const About: React.FC<any> = () => {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState(initialTodo);
  const [isOpen, setIsOpen] = useState(false);

  const onAddTodo = (data: any) => {
    setTodoList([{ id: useMath.computed_id(todoList), ...data }, ...todoList]);
  };

  const onToggleIsDone = (id: number) => () => {
   
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDeleteTodo = (id: number) => () => {
   
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  useIonViewDidEnter(() => {

  
    setLoading(true);

    
    setTimeout(() => {
     
      setLoading(false);

    
      setTodoList(todolist_data);
    }, 900);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo list </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todolist</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ marginTop: "30px" }}>
          {!loading ? (
            todoList.map((todo, index) => (
              <IonItem key={index}>
                <IonCheckbox
                  onClick={onToggleIsDone(todo.id)}
                  checked={todo.isDone}
                />
                <IonLabel
                  style={{
                    marginLeft: "20px",
                    textDecoration: todo.isDone ? "line-through" : "initial",
                    color: todo.isDone ? "#949494" : "inherit",
                  }}
                  onClick={onToggleIsDone(todo.id)}
                >
                  {todo.name}
                </IonLabel>
                <button
                  style={{
                    borderRadius: "50%",
                    background: "white",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    outline: "0",
                  }}
                  onClick={onDeleteTodo(todo.id)}
                >
                  <IonIcon icon={close} />
                </button>
              </IonItem>
            ))
          ) : (
            <Skeleton />
          )}

          <IonicModal
            onSubmit={onAddTodo}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          ></IonicModal>
        </div>
      </IonContent>

      <IonFab
        vertical="top"
        horizontal="end"
        slot="fixed"
        onClick={() => setIsOpen(true)}
      >
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default About;
