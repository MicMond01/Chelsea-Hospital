import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  setItems,
  setSelectedItemId,
} from "../../redux/slice/appointmentSlice";
import DeleteDialog from "./popup/DeleteDialog";
import EditDialog from "./popup/EditDialog";
import CustomTextInput from "./Models/CustomTextInput";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "image",
    numeric: false,
    disablePadding: true,
    label: "Image",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "gender",
    numeric: true,
    disablePadding: false,
    label: "Gender",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "from",
    numeric: true,
    disablePadding: false,
    label: "From",
  },
  {
    id: "mobile",
    numeric: true,
    disablePadding: false,
    label: "Mobile",
  },
  {
    id: "doctor",
    numeric: true,
    disablePadding: false,
    label: "Consulting Doctor",
  },
  {
    id: "injury/condition",
    numeric: true,
    disablePadding: false,
    label: "Injury/Condition",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontWeight: 700 }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

function EnhancedTableToolbar(props) {
  const formattedDynamicPath = useSelector(
    (state) => state.breadcrumb.formattedDynamicPath
  );

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%", fontWeight: 700 }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {formattedDynamicPath}
      </Typography>

      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

export default function ContentTable({ responseValue }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openModal, setOpenModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState(null);
  const [editingItem, setEditingItem] = React.useState(null);

  const tableItem = useSelector((state) => state.appointmentList.items);
  // console.log(tableItem);

  const dispatch = useDispatch();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableItem.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(tableItem, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, tableItem]
  );

  const deleteConfirmation = () => {
    const updatedItems = responseValue.filter(
      (item) => item.id !== itemToDelete
    );
    dispatch(setItems(updatedItems));
    console.log(itemToDelete);
    setOpenModal(false);
  };

  const editAppointmentRecord = (id) => {
    const selectedItem = responseValue.find((item) => item.id === id);
    console.log(selectedItem);
    setEditingItem(selectedItem);
    dispatch(setSelectedItemId(id));

    setOpenEditModal(true);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={() => setItemToDelete(row.id)}
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell align="center">
                      <Avatar src={row.url} alt={row.patient_name} />
                    </TableCell>
                    <TableCell
                      style={{ width: 160 }}
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.patient_name}
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: 600,
                        color: row.gender === "Male" ? "#198754" : "#6f42c1",
                      }}
                    >
                      <span
                        style={{
                          borderRadius: "5px",
                          padding: "5px 12px",
                          background:
                            row.gender === "Male" ? "#19875426" : "#6f42c126",
                        }}
                      >
                        {row.gender}
                      </span>
                    </TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.time_from}</TableCell>
                    <TableCell align="left">{row.mobile}</TableCell>
                    <TableCell align="left" style={{ width: 150 }}>
                      {row.consulting_doctor}
                    </TableCell>
                    <TableCell align="left">{row.injury_condition}</TableCell>
                    <TableCell align="left">
                      <IconButton
                        onClick={() => editAppointmentRecord(row.id)}
                        sx={{
                          backgroundColor: "rgba(0, 255, 10, 0.2)",
                          color: "#4caf50",
                          padding: "8px",
                          marginRight: "0.5rem",
                          borderRadius: "5px",
                        }}
                      >
                        <EditIcon
                          sx={{
                            fontSize: "15px",
                          }}
                        />
                      </IconButton>
                      <IconButton
                        sx={{
                          backgroundColor: "rgba(255, 68, 0, 0.2)",
                          color: "#fa6c39",
                          padding: "8px",
                          borderRadius: "5px",
                        }}
                        onClick={() => setOpenModal(true)}
                      >
                        <DeleteOutlineOutlinedIcon
                          sx={{
                            fontSize: "15px",
                          }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={responseValue.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {openEditModal && (
        <EditDialog
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
          editingItem={editingItem}
        />
      )}

      {openModal && (
        <DeleteDialog
          openModal={openModal}
          setOpenModal={setOpenModal}
          deleteConfirmation={deleteConfirmation}
        />
      )}
    </Box>
  );
}
