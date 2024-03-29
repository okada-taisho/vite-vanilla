import createAboutDOM from "@/component/Page/About/index";
import NotFound from "@/component/Page/NotFound/index";
import checkRender from "@/component/Error/checkRender";
import systemError from "@/component/Error/systemError";
import "@/style.scss";
import createTopDOM from "@/component/Page/Top/index";

const setComponent = async (path:string):Promise<string> => {
    let Component:string = "";

    try {
      if (path === "/") {
        const Top:string | null = await createTopDOM();
        Component = checkRender(Top);
        
      } else if (path === "/about") {
        const About:string | null = await createAboutDOM();
        Component = checkRender(About);
        
      } else {
        Component = NotFound;
      }
      return Component
    } catch (err) {
      Component = systemError
      return Component
    }
  };

  export default setComponent
