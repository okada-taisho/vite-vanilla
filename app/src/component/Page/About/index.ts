import { getDBFoodById } from "@/utils/firebase/query";

const createAboutDOM = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const documentID = urlParams.get("productID");

  if (!documentID) {
    return null;
  } else {
    try {
      const data = await getDBFoodById(documentID);
      
      if (!data) {
        return null;
      }

      const dom = `
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
      return null;
    }
  }
};

export default createAboutDOM;
