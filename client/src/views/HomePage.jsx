import { NavLink } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import TableItem from "../components/TableProduct";
import useFetch from "../hooks/useFetch";
import "./HomePage.css";

function HomePage() {
  let { data: items, isLoading: loadingItems } = useFetch("product");
  console.log(items, "<<<<<<<<<<<<<< items di Home");
  return (
    <>
      <MainNavigation />
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4"></div>
        <NavLink to="/addProduct"> 
          <button
            type="button"
            className="btn btn-primary btn-sm d-flex flex-row ms-auto me-3"
          >
            + Add Item
          </button>
        </NavLink>
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>User</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loadingItems ? (
              <tr>
                <td>
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </td>
              </tr>
            ) : (
              items.map((item) => {
                return <TableItem item={item} key={item.id} />;
              })
            )}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default HomePage;
