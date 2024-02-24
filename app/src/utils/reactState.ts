
const useState = (initState:undefined) => {
    let state = initState

    const setState = (updateState:undefined) => {
        state = updateState
    }

    return [state,setState]
}

export default useState
