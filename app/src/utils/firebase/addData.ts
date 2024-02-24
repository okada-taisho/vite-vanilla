import db from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { DocumentReferenceType } from "./type/types";

const addData = async (): Promise<DocumentReferenceType> => {
  try {
    const res = await addDoc(collection(db, "Food"), {
      name: "ポテト",
      detail: "ポテトです",
      create_date: "",
    });

    return res;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export default addData;
