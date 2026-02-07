import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { Grid } from '@mui/material';
import { heart } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import Reader from '../components/Reader';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lector de Noticias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Descargar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Reader/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
