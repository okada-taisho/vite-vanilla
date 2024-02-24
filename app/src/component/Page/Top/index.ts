import { getDBFood } from "@/utils/firebase/query";
import { FoodDataType } from "@/utils/firebase/type/types";
import { DocumentData } from "firebase/firestore";

const createTopDOM = async ():Promise<string | null> => {
  const FoodListState: DocumentData[] = [];

  try {
    const res: DocumentData[] | null = await getDBFood();
    if (res) {
      res.forEach((el) => {
        FoodListState.push(el);
      });
    }
    const createFoodListDom = async (FoodListState: FoodDataType):Promise<string> => {
      let dom:string = "";
      if (FoodListState.length > 0) {
        FoodListState.forEach(async (el) => {
          const Dom = `<li>
          <a href="/about?productID=${el.id}">
          <img src="${el.image_path}" alt="${el.name}">
          <p>${el.name}</p>
          <p>&yen;${el.value} +tax</p>
          </a>
          </li>`;
          dom = dom + Dom;
        });
        return dom
      }else {
        const ErrorDom:string = `<p>データが存在しませんでした。</p>`;
        return ErrorDom;
      }
    };
    const productDom:string = await createFoodListDom(FoodListState);
    
    const Top = `
    <div class="content wrapper">
      <h1 class="page-title">Products</h1>
      <ul class="product-list">
        ${productDom}
      </ul>
    </div>
  `;
    return Top;
  } catch (err) {
    console.log("Error:", err);
    return null
  }
};
export default createTopDOM;
