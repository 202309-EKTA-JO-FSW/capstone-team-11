export const eventColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 300,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row._id}</div>;
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.imageUrl} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.description}</div>;
    },
  },

  {
    field: "location",
    headerName: "Location",
    width: 100,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.location}</div>;
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.price}
        </div>
      );
    },
  },
  {
    field: "url",
    headerName: "Link",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.url}
        </div>
      );
    },
  },
  {
    field: "startDateTime",
    headerName: "Start Time",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.startDateTime}
        </div>
      );
    },
  },
  {
    field: "endDateTime",
    headerName: "End Time",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.endDateTime}
        </div>
      );
    },
  },
  {
    field: "isFree",
    headerName: "Is Free",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.isFree}
        </div>
      );
    },
  },
  {
    field: "isPopular",
    headerName: "Is Popular",
    width: 160,
    renderCell: (params) => {
      return <div>{params.row.isPopular}</div>;
    },
  },
  {
    field: "organizer",
    headerName: "Organizer",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.organizer}
        </div>
      );
    },
  },
];

export const userColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 300,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row._id}</div>;
    },
  },
  {
    field: "username",
    headerName: "Username",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 70,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.email}</div>;
    },
  },
  {
    field: "password",
    headerName: "Password",
    width: 70,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.password}</div>;
    },
  },
  {
    field: "isAdmin",
    headerName: "Is Admin",
    width: 70,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.isAdmin}</div>;
    },
  },
  {
    field: "isAdmin",
    headerName: "Is Admin",
    width: 70,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.isAdmin}</div>;
    },
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.createdAt}
        </div>
      );
    },
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.updatedAt}
        </div>
      );
    },
  },
];
