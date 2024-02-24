import db from "@/firebase";
import { doc,deleteDoc} from 'firebase/firestore';
const docRef = doc(db,"Food", '9jW94MpewyUS23N6HRwQ'); // 'yourDocumentId'は実際のドキュメントのIDに置き換える

await deleteDoc(docRef);
