
const initialState = {
    data: [
        {id: 1, name: "Karen", job: "SW Engineer"}
    ],
    loading: false
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                data: [ ...state.data, { ...action.payload, id: state.data.length + 1 } ]
            }
        default: return initialState
    }
}