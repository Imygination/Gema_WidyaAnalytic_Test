import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData, updateItem } from "../store/actions/actionCreator";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import useFetchId from "../hooks/useFetchId";

function AddProduct() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  let { data: items } = useFetchId(productId);
  console.log(items, "<<<<<<<<<<<<<< items di Home");

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    UserId: "",
  });

  useEffect(() => {
    // Update newItem when items data is available
    if (items) {
      setNewItem({
        name: items.name,
        description: items.description,
        price: items.price,
        imgUrl: items.imgUrl,
        UserId: items.UserId,
      });
    }
  }, [items]);

  const inputHandler = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    console.log(field, value);
    setNewItem({
      ...newItem,
      [field]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(updateItem(newItem, items.id));
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Success Edit ${newItem.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchData("user/item"));
      console.log(response, "<<<<<<<<<<< DARI SERVER ADD");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message[0],
      });
    }
  };
  return (
    <>
      <main
        style={{ marginTop: "58px", marginLeft: "20px", marginRight: "20px" }}
      >
        <div className="container pt-4"></div>
        <h3 className="text-center pb-4">EDIT PRODUCT</h3>
        <form onSubmit={submitHandler}>
          {/* <!-- Name --> */}
          <div className="row mb-4">
            <div className="col">
              <label className="form-label" htmlFor="form6Example1">
                Name
              </label>
              <div className="form-outline">
                <input
                  type="text"
                  id="form6Example1"
                  className="form-control border border-dark rounded"
                  name="name"
                  value={newItem.name}
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>

          {/* <!-- imgUrl input --> */}
          <label className="form-label" htmlFor="form6Example5">
            Image URL
          </label>
          <div className="form-outline mb-4">
            <input
              type="url"
              id="form6Example5"
              className="form-control border border-dark rounded"
              name="imgUrl"
              value={newItem.imgUrl}
              onChange={inputHandler}
            />
          </div>

          {/* <!-- Number input --> */}
          <label className="form-label" htmlFor="form6Example6">
            price
          </label>
          <div className="form-outline mb-4">
            <input
              type="number"
              id="form6Example6"
              className="form-control border border-dark rounded"
              name="price"
              value={newItem.price}
              onChange={inputHandler}
            />
          </div>

          {/* <!-- Text input --> */}
          <label className="form-label" htmlFor="form6Example7">
            Description
          </label>
          <div className="form-outline mb-4">
            <textarea
              className="form-control border border-dark rounded"
              id="form6Example7"
              rows="4"
              name="description"
              value={newItem.description}
              onChange={inputHandler}
            ></textarea>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default AddProduct;
