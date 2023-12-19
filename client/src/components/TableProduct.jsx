import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteItem, fetchData } from "../store/actions/actionCreator";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function TableItem({ item }) {
  const dispatch = useDispatch();
  const deleteHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(deleteItem(item.id));
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Success Delete ${response.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchData("product"));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={item.imgUrl}
              alt=""
              style={{ width: "100px", height: "100px" }}
              className="rounded"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{item.name}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{item.price}</p>
        </td>
        <td>
          <p className="fw-normal mb-1">Seller: {item.User.username}</p>
        </td>
        <td>
          <NavLink to={`/editProduct/${item.id}`}>
            <button
              type="button"
              className="btn btn-warning btn-sm btn-rounded ms-2"
            >
              Edit
            </button>
          </NavLink>
          <button
            type="button"
            className="btn btn-danger btn-sm btn-rounded ms-2"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableItem;
