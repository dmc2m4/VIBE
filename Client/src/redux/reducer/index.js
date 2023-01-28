import types from "../actions/types";

const initialState = {
  Products: [],
  backUpProducts: [],
  Page: 0,
  Num: 0,
  Filters: {},
  Detail: {},
  Favorites: [],
  User: {},
  Cart: {
    items: [],
    total: 0,
  },
  Account: {},
};

export default function rootReducer(state = initialState, action) {
  if (action.type === types.UPDATE_FILTERS) {
    return {
      ...state,
      Filters: action.payload,
    };
  }
  if (action.type === types.SET_CURRENT_PAGE) {
    return {
      ...state,
      Page: action.payload,
    };
  }
  if (action.type === types.GET_PAGE) {
    return {
      ...state,
      Products: action.payload.rows,
      Num: action.payload.count,
    };
  }
  if (action.type === types.DELETE_PRODUCT) {
    return {
      ...state,
      Products: [...state.Products].filter(
        (product) => product.id !== action.payload
      ),
    };
  }
  if (action.type === types.ADD_TO_CART) {
    const result = [...state.Cart.items];
    let num = 0;
    result.forEach((e) => {
      if (e.id === action.payload.id) {
        e.quantity++;
        num++;
      }
    });
    if (num === 0) {
      result.push({
        id: action.payload.id,
        name: action.payload.name,
        cost: action.payload.cost,
        img: action.payload.img,
        quantity: 1,
      });
    }
    return {
      ...state,
      Cart: {
        items: result,
        total: state.Cart.total + action.payload.cost,
      },
    };
  }

  if (action.type === types.ADD_ONE_TO_CART) {
    const itemsCopy = [...state.Cart.items];
    const index = itemsCopy.findIndex((e) => e.id === action.payload.id);
    itemsCopy[index].quantity = itemsCopy[index].quantity + 1;
    return {
      ...state,
      Cart: {
        items: itemsCopy,
        total: state.Cart.total + action.payload.cost,
      },
    };
  }

  if (action.type === types.REMOVE_ONE_FROM_CART) {
    const itemsCopy = [...state.Cart.items];
    const index = itemsCopy.findIndex((e) => e.id === action.payload.id);
    itemsCopy[index].quantity = itemsCopy[index].quantity - 1;
    const shouldDelete = !itemsCopy[index].quantity;

    return {
      ...state,
      Cart: {
        items: shouldDelete
          ? itemsCopy.filter((product) => product.id !== action.payload.id)
          : itemsCopy,
        total: state.Cart.total - action.payload.cost,
      },
    };
  }
  if (action.type === types.REMOVE_ALL_FROM_CART) {
    return {
      ...state,
      Cart: {
        items: [],
        total: 0,
      },
    };
  }
  if (action.type === types.PRODUCT_DETAIL) {
    return {
      ...state,
      Detail: action.payload,
    };
  }
  if (action.type === types.CLEAN_PAGE) {
    return {
      ...state,
      Page: 0,
    };
  }
  if (action.type === types.CLEAN_DETAIL) {
    return {
      ...state,
      Detail: {},
    };
  }
  if (action.type === types.LOGIN_USER) {
    return {
      ...state,
      User: action.payload,
    };
  }
  if (action.type === types.GET_FAVORITES){
    return {
      ...state,
      Favorites: action.payload
    }
  }
  return { ...state };
}
