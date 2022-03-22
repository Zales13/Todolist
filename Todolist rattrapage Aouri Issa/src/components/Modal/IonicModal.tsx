import React, { useState } from "react";
import {
  IonModal,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./IonicModal.css";

// this is a interface props of modal
interface Modal {
  children: any;
  action: any;
  onSubmit: any;
  isOen: boolean;
}

const IonicModal: React.FC<any> = ({ isOpen, onClose, onSubmit }) => {
  const [todo, setTodo] = useState("");

  const onHandleSubmit: any = () => {
    if (todo) {
      // and reset values
      setTodo("");

      // close
      onClose(false);

      // sent data
      return onSubmit({ name: todo, isDone: false });
    }
  };

  return (
    <IonContent>
      <IonModal
        cssClass="ionicModal"
        isOpen={isOpen}
        swipeToClose={true}
        onDidDismiss={() => onClose(false)}
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>New todo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem style={{ margin: "20px 0" }}>
            <IonLabel>Your todo: </IonLabel>
            <IonInput
              placeholder="Your todo need add to todolist"
              value={todo}
              onIonChange={(e) => setTodo(e.detail.value!)}
            ></IonInput>
          </IonItem>

          {/* <IonItem style={{ marginBottom: "20px" }}>
            <IonLabel>Finish day: </IonLabel>
            <IonDatetime
              placeholder="Finish day work"
              value={finishDay}
              onIonChange={(e) => setFinishDay(e.detail.value!)}
            />
          </IonItem> */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <IonButton
              style={{
                width: "40%",
                padding: "0",
              }}
              color="danger"
              type="submit"
              onClick={onClose}
            >
              Cancel
            </IonButton>
            <IonButton
              style={{
                width: "40%",
                padding: "0",
              }}
              color="primary"
              type="submit"
              onClick={onHandleSubmit}
            >
              Save
            </IonButton>
          </div>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};

export default IonicModal;
