import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  console.log({ path });

  const [list, setList] = useState();
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };
  const { data, loading, error } = useFetch(
    `http://127.0.0.1:3001/api/${path}/`,
    { headers }
  );

  useEffect(() => {
    setList(data);
  }, [data]);

  // const handleDelete = async (id) => {
  //   try {
  //     // console.log({ id });
  //     const token = localStorage.getItem("token");
  //     const headers = { Authorization: `Bearer ${token}` };
  //     const deleted = await axios.delete(
  //       `http://127.0.0.1:3001/api/${path}/${id}`,
  //       { headers }
  //     );
  //     console.log({ token });
  //     console.log({ headers });
  //     console.log({ deleted });
  //     setList(list.filter((item) => item._id !== id));
  //   } catch (err) {
  //     console.error("Error deleting item:", err);
  //   }
  // };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3001/api/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  console.log({ data });

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
