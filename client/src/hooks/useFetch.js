import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions/actionCreator";

export default function useFetch(path) {
  // const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.itemReducer.items;
  });
  console.log(data, "<<<<<<<<<<<<<< ini data");

  useEffect(() => {
    setLoading(true);
    dispatch(fetchData(path));
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
