import React, { useEffect, useState } from "react";
// import {
//   fetchProjects,
//   createNewProject,
//   deleteThisProject,
// } from "../store/project/project.thunk";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { withStyles } from "@material-ui/core";
import { withSnackbar } from "notistack";
import {
  requestProjects,
  createProject,
  deleteProject,
} from "../store/project/project.action";

const styles = () => ({
  tableCell: {
    border: "1px solid lightgrey",
    borderCollapse: "collapse",
  },
  table: {
    marginTop: "10px",
  },
});

const MainPage = (props) => {
  const { classes } = props;
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projectsList);
  const getProjects = () => {
    dispatch(requestProjects());
  };
  useEffect(() => getProjects(), []);
  const createNewProject1 = async (name) => {
    dispatch(createProject(name));
    setName("");
  };
  const deleteNewProject = async (id) => {
    dispatch(deleteProject(id));
  };
  return (
    <div style={{ margin: "10px 0 0 10px" }}>
      <TextField
        name="project"
        size="small"
        label="Project name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <Button
        variant="outlined"
        onClick={() => createNewProject1(name)}
        style={{ marginRight: "10px" }}
      >
        create project
      </Button>
      {projects && (
        <TableContainer>
          <Table aria-label="simple table" className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>Id</TableCell>
                <TableCell className={classes.tableCell}>Name</TableCell>
                <TableCell className={classes.tableCell} />
                <TableCell className={classes.tableCell} />
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.tableCell}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.name}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => deleteNewProject(row.id)}
                      style={{ marginRight: "10px" }}
                    >
                      delete
                    </Button>
                  </TableCell>

                  <TableCell className={classes.tableCell}>
                    <Button variant="outlined" color="success">
                      More info
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default withSnackbar(withStyles(styles, { withTheme: true })(MainPage));
