import db from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
const addData = async () => {
  try {
    const res = await addDoc(collection(db, "Food"), {
      name: "ポテト",
      detail: "ポテトです",
      create_date: "",
    });

    return res;
  } catch (err) {
    console.error("Error:", err);
  }
};

export default addData;
