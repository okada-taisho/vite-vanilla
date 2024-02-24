import { getDBFoodById } from "@/utils/firebase/query";
import { DocumentData } from "firebase/firestore";

const createAboutDOM = async ():Promise<string | null> => {
  const urlParams:URLSearchParams = new URLSearchParams(window.location.search);
  const documentID:string | null = urlParams.get("productID");

  if (!documentID) {
    return null;
  }

  try {
    const data: DocumentData | null = await getDBFoodById(documentID);

    if (!data) {
      return null;
    }

    const dom:string = `
        <div class="content wrapper">
          <h1 class="page-title">${data.name}</h1>
          <div id="item">
            <div class="item-img">
              <img src="${data.image_path}" alt="${data.name}">
            </div>
            <div class="item-text">
              <p>${data.detail}</p>
              <p>&yen;${data.value} +tax</p>
            </div>
          </div>
          <a class="link-text" href="/">Back To Products</a>
        </div>
      `;

    return dom;
  } catch (error) {
    console.error("Error:", error);
    throw error
  }
};

export default createAboutDOM;
