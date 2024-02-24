import { getDBFood } from "@/utils/firebase/query";

const createTopDOM = async () => {
  const FoodListState: any = [];

  try {
    const res = await getDBFood();
    if (res) {
      res.forEach((el) => {
        FoodListState.push(el);
      });
    }
    const createFoodListDom = async (FoodListState: any) => {
      let dom = "";
      if (FoodListState.length > 0) {
        FoodListState.forEach(async (el: any) => {
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
        const ErrorDom = `<p>データが存在しませんでした。</p>`;
        return ErrorDom;
      }
    };
    const productDom = await createFoodListDom(FoodListState);
    
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
  }
};
export default createTopDOM;
