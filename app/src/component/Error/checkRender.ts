import systemError from "./systemError";

const checkRender = (Component:string | null):string => {
  if (Component) {
    return Component 
  } else {
    const ErrorComponent = systemError;

    return ErrorComponent 
    
  }
};

export default checkRender
