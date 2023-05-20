import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDMFN3QyfoorS3Bzs5P7HpbgbVCyp9cmRU",
  authDomain: "proyecto-react-72bd1.firebaseapp.com",
  projectId: "proyecto-react-72bd1",
  storageBucket: "proyecto-react-72bd1.appspot.com",
  messagingSenderId: "212479040901",
  appId: "1:212479040901:web:020d6676830e5a545c78ec"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)