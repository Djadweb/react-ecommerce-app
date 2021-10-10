export const initialState = {
    basket: []  
}

function reducer(state, action) {
    console.log(action);
    switch(action.type) {    
        case 'ADD_TO_BASKET':
            //ADD TO BASKET LOGIC
            return { 
                ...state,
                basket: [...state.basket, action.item]
             };
        case 'REMOVE_FROM_BASKET':
            //REMOVE FROM BASKET LOGIC
            return { state };    
        default:
            return state;
    }
}

export default reducer;