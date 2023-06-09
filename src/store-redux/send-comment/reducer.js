const initialState = {
    data: {},
    waiting: false,
    error: null,
    active: '',
}

function reducer (state = initialState, action) {
    switch(action.type) {

        //Отправка комментария
        case "comments/sendMessage-start":
            return { ...state, waiting: true, error: null };
          
        case "comments/sendMessage-success":
            return { ...state, data: action.payload.data, waiting: false, error: null};
          
        case "comments/sendMessage-error":
            return { ...state, data: null, waiting: false, error: action.payload};

        case "comments/sendMessage-changeActive":
            return { ...state, active: action.payload, waiting: false, error: null};

        default: 
            return state;

    }
}

export default reducer;