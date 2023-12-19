import { ITEMS_FETCH_SUCCESS, ITEMS_ID_FETCH_SUCCESS } from "./actionsType";

const baseUrl = "http://localhost:3000";

export function itemsFetchSuccess(payload) {
  return {
    type: ITEMS_FETCH_SUCCESS,
    payload,
  };
}

export function itemsIdFetchSuccess(payload) {
  return {
    type: ITEMS_ID_FETCH_SUCCESS,
    payload,
  };
}

export const fetchData = (path) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/${path}`, {
        headers: { access_token: sessionStorage.access_token },
      });
      console.log(response, "<<<<<<<< response AC");
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      const action = itemsFetchSuccess(result);
      console.log(action, "<<<<<<<< response TB");
      dispatch(action);
    } catch (error) {
      console.log(error, "<<<<< error AC");
      throw error;
    }
  };
};

export const fetchDataById = (params) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/product/${params}`, {
        headers: { access_token: sessionStorage.access_token },
      });
      console.log(response, "<<<<<<<< response AC");
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      const action = itemsIdFetchSuccess(result);
      console.log(action, "<<<<<<<< response TB");
      dispatch(action);
    } catch (error) {
      console.log(error, "<<<<< error AC");
      throw error;
    }
  };
};

export const addItem = (newItem) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/product`, {
        method: "POST",
        headers: {
          access_token: sessionStorage.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      return result;
    } catch (error) {
      const { error: err } = error;
      throw err;
    }
  };
};

export const updateItem = (updatedItem, productId) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/product/${productId}`, {
        method: "PUT",
        headers: {
          access_token: sessionStorage.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) {
        const error = await response.json();
        throw { error };
      }
      const result = await response.json();
      return result;
    } catch (error) {
      const { error: err } = error;
      throw err;
    }
  };
};

export const deleteItem = (param) => {
  return async () => {
    try {
      const response = await fetch(`${baseUrl}/product/${param}`, {
        method: "DELETE",
        headers: {
          access_token: sessionStorage.access_token,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const error = response.json();
        throw { error };
      }
      const result = response.json();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
