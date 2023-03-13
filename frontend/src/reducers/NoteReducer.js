const noteReducer = (
    state = {
        notes: [],
    },
    action
) => {
    switch (action.type) {
        case "FETCH_NOTE":
            return { ...state, notes: action.data };

        case "ADD_NOTE":
            return { ...state, notes: [...state.notes, action.data] };

        case "UPDATE_NOTE":
            return { ...state, notes: [action.data] };

        case "DELETE_NOTE":
            return {
                ...state, notes: state.notes.filter((note) => {
                    return note._id !== action.data
                })
            };

        default:
            return state
    };
}

export default noteReducer