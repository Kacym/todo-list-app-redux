const initialState = {
    isLogged: false,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN": {
            return {
                ...state,
                isLogged: true,
            }
        }
        case "LOGOUT": {
            return {
                ...state,
                isLogged: false,
            }
        }

        default: {
            return state
        }
    }
}