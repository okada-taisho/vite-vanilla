const render = (html: string):void => {
    const app = document.querySelector('#app');
    if(app){
        app.innerHTML = html;
    }
}

export default render
