import render from "./utils/render";
// スタイルシート（Sass）を読み込む
import "./style.scss";
import Footer from "./component/Footer/index";
import Header from "./component/Header/index";
import Top from "./component/Page/Top/index";
import About from "./component/Page/About/index";
import NotFound from "./component/Page/NotFound/index";
import db from "./firebase";
import { Firestore } from "firebase/firestore/lite";
import { collection, getDocs } from 'firebase/firestore/lite';

const Home = async () => {
  // 状態管理
  // const state:any = { name: null };

  // const setState = (key: any, value: any) => (state[key] = value);
  
  const path = window.location.pathname;
  
  // Get a list of cities from your database
  const getCities = async (db: Firestore) => {
    const citiesCol = collection(db, 'Food');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  };
  
  // Example usage inside an async function
  const fetchData = async () => {
    const res = await getCities(db);
    console.log(res);
  };
  
  // Call fetchData function
  fetchData();


  
  let Component = ""
  if(path === "/" ){
    Component = Top
  }else if (path === "/about" ){

    Component = About
  }else {
    Component = NotFound
  }
  const userComponent = () => {
    render(
      `${Header}
          <body>
          ${Component}
          </body>
      ${Footer}`
    );
  }
  userComponent()
}

Home();
