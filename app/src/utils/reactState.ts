
const useState = (initState:any,) => {
    let state = initState

    const setState = (updateState:any) => {
        state = updateState
    }

    return [state,setState]
}

export default useState
