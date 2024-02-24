import db from '@/firebase';
import { doc,updateDoc} from 'firebase/firestore';



// 更新するデータを指定
const updatedData = {
    name: 'Updated Food',
    detail: "150",
    // 他のフィールドも更新できます
  };
  

  const update = async() => {

    const docRef = doc(db,"Food", '9jW94MpewyUS23N6HRwQ'); // 'yourDocumentId'は実際のドキュメントのIDに置き換える
    await updateDoc(docRef, updatedData);
  }


  export default update;
