export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    // console.log(action.user.email);
    // console.log(action.user);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":

            const index = state.basket.findIndex(
                (basketItem) => basketItem.title === action.item.title
            );

            // console.log(action.item.title);

            // for (let i = 0; i < state.basket.length; i++) {
            //     if (state.basket[i].title === action.item.title) {
            //         console.log(state.basket[i].title);

            //         index = i;
            //         break;
            //     }


            // }

            let newBasket = [...state.basket];


            if (index >= 0) {
                console.log(index);
                newBasket.splice(index, 1);
            }
            else {
                console.log("not correct");
                console.log(index);
            }

            return {
                ...state,
                basket: newBasket
            };

        case "SET_USER":

            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default reducer;