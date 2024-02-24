import render from "@/utils/render";
import "@/style.scss";
import Footer from "@/component/Footer/index";
import Header from "@/component/Header/index";
import setComponent from "@/utils/setComponent";

const Home = async () => {
  const path = window.location.pathname;
  const Component = await setComponent(path)

  const useComponent = () => {
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
