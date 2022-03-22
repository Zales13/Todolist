import React from "react";
import { IonItem, IonAvatar, IonLabel, IonSkeletonText } from "@ionic/react";

const Skeleton: React.FC<any> = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <IonItem key={index}>
          <IonAvatar slot="start">
            <IonSkeletonText animated />
          </IonAvatar>
          <IonLabel>
            <h3>
              <IonSkeletonText animated style={{ width: "50%" }} />
            </h3>
            <p>
              <IonSkeletonText animated style={{ width: "80%" }} />
            </p>
            <p>
              <IonSkeletonText animated style={{ width: "60%" }} />
            </p>
          </IonLabel>
        </IonItem>
      ))}
    </>
  );
};

export default Skeleton;
