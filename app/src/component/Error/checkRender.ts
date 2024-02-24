import systemError from "./systemError";

const checkRender = (Component: any) => {
  if (Component) {
    return Component 
  } else {
    const ErrorComponent = systemError;

    return ErrorComponent 
    
  }
};

export default checkRender
