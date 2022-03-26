

interface BasketState {
    basket: object,
    status: boolean,
    error: string,
    loading: boolean
}

const initialState : BasketState = {
    basket: {},
    status: false,
    error: '',
    loading: false
}


export const basketReducer = (state = initialState, action: { type: any }) => {
    switch (action.type){
        case "FETCH_BASKET" : return {

        }
    }
}
