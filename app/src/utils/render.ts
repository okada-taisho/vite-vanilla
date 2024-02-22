const render = (html: string) => {
    const app = document.querySelector('#app');
    if(app){
        app.innerHTML = html;
    }
}

export default render
