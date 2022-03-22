import React from "react";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from "@ionic/react";

import { settings, logOutOutline } from "ionicons/icons";

import JwtService from '../../../core/services/jwt/jwt.service';

import "./About.css";
import { useDispatch } from "react-redux";
import * as userActions from '../../../redux/actions/user.action';

const About: React.FC<any> = ({ ...props }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    JwtService.removeToken();
    dispatch(userActions.setLogout());
  };



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>A propos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">A propos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="about">
          <div className="about-cover"></div>

        </div>

        <div className="about-profile">
          <IonTitle className="about-title" size="large">
            Aouri Issa
          </IonTitle>
        </div>
      </IonContent>

      <IonFab vertical="top" horizontal="end" color="asdsad">
        <IonFabButton>
          <IonIcon icon={settings} />
        </IonFabButton>
        <IonFabList side="bottom">
          <IonFabButton onClick={onLogout}>
            <IonIcon icon={logOutOutline} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonPage>
  );
};

export default About;
