export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket

            // We cloned the basket
            let newBasket = [...state.basket];

            // We check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not a basket.`
                );
            }

            return { 
                ...state, 
                basket: newBasket,
            };
        default:
            return state;
    }
}

export default reducer;