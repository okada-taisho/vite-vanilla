import render from "@/utils/render";
import "@/style.scss";
import Footer from "@/component/Footer/index";
import Header from "@/component/Header/index";
import setComponent from "@/utils/setComponent";

const Home = async ():Promise<void> => {
  const path:string = window.location.pathname;
  const Component = await setComponent(path)

  const useComponent = ():void => {
    render(
      `${Header}
          <body>
          ${Component}
          </body>
      ${Footer}`
    );
  };
  useComponent();
};

Home();
