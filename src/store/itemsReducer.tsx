interface itemState {
  items: [];
  loading: boolean;
  error: null | boolean;
}

interface FetchItemsAction {
  type: "FETCH_ITEMS";
}

interface FetchItemsSuccessAction {
  type: "FETCH_ITEMS_SUCCESS";
  payload: any[];
}

interface FetchItemsErrorAction {
  type: "FETCH_ITEMS_ERROR";
  payload: string;
}

interface itemAction {
  type: string;
  payload: any;
}

const initialState: itemState = {
  items: [],
  loading: false,
  error: null,
};

export const reducer = (
  state = initialState,
  action: itemAction
): itemState => {
  switch (action.type) {
    case "FETCH_ITEMS":
      return { loading: true, error: null, items: [] };
    case "FETCH_ITEMS_SUCCESS":
      return { loading: false, error: null, items: action.payload };

    case "FETCH_ITEMS_ERROR":
      return { loading: false, error: action.payload, items: [] };
    case "REASSIGN_ITEMS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
