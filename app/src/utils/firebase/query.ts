import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import db from "@/firebase";

const getDBFood = async () => {
  try {
    const FoodsCol = collection(db, "Food");
    const FoodSnapshot = await getDocs(FoodsCol);
    if (!FoodSnapshot.empty) {
      const FoodList = FoodSnapshot.docs.map((doc) => doc.data());
      return FoodList;
    } else {
      console.log(FoodSnapshot);
      return null;
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

const getDBFoodById = async (documentId:string) => {
    try {
      const FoodsCol = collection(db, "Food");
      const FoodDocRef = doc(FoodsCol, documentId);
  
      const FoodSnapshot = await getDoc(FoodDocRef);
  
      if (FoodSnapshot.exists()) {
        const FoodData = FoodSnapshot.data();
        return FoodData;
      } else {
        console.log("指定されたドキュメントが存在しません。");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };


export {getDBFood, getDBFoodById};
