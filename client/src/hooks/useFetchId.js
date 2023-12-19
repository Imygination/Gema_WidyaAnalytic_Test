import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataById } from "../store/actions/actionCreator";

export default function useFetchId(productId) {
  // const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.itemIdReducer.item;
  });
  console.log(data, "<<<<<<<<<<<<<< ini data");

  useEffect(() => {
    setLoading(true);
    dispatch(fetchDataById(productId));
    try {
      console.log("FETCH SUCCESS");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
