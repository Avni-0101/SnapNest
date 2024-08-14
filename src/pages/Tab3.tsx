import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ReviewsContainer from '../components/FeedBack';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feedbacks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reviews</IonTitle>
          </IonToolbar>
        </IonHeader>
        < ReviewsContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
