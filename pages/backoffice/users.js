import { Delete, Edit, StarBorder } from "@mui/icons-material"
import {
  Button,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { useContext, useEffect, useState } from "react"
import api from "../../src/components/api"
import AppContext from "../../src/components/AppContext"
import DrawerBackOffice from "../../src/components/backOffice/DrawerBackOffice"
import HeaderNav from "../../src/components/header/header"

const BackOfficeUsers = () => {
  const { users, setUsers } = useContext(AppContext)
  const [idSelected, setIdSelected] = useState(false)

  const handleChange = (id) => {
    if (id == idSelected) {
      setIdSelected(false)
    } else setIdSelected(id)
  }

  useEffect(() => {
    api
      .get("/users")
      .then((res) => {
        setUsers(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [deleteUser])

  const deleteUser = (id) => {
    api.delete("/users/" + id).catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className="z-0">
      <HeaderNav />
      <div className="bg-[#c2c6c8] p-[1vw] rounded-lg flex">
        <DrawerBackOffice />
        <div className="m-[1vw] mt-[12vh] w-full">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Nom</TableCell>
                  <TableCell>Id</TableCell>

                  <TableCell align="right">Prenom</TableCell>
                  <TableCell align="right">Civilité</TableCell>
                  <TableCell align="right">email</TableCell>
                  <TableCell align="right">Supprimer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(
                  (
                    {
                      id,
                      name,
                      lastName,
                      age,
                      email,
                      civility,
                      admin,
                      bankCard,
                    },
                    key
                  ) => (
                    <>
                      <TableRow
                        key={key}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Button
                            variant="contained"
                            disableElevation
                            className="bg-[#6667ab]"
                            onClick={() => {
                              handleChange(id)
                            }}
                          >
                            {lastName}
                          </Button>
                        </TableCell>
                        <TableCell>{key}</TableCell>

                        <TableCell align="right">{name}</TableCell>
                        <TableCell align="right">{civility}</TableCell>
                        <TableCell align="right">{email}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() => {
                              deleteProduct(id)
                            }}
                          >
                            <Delete color="error" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        component="div"
                        disablePadding
                        sx={{ ml: 8, width: "auto" }}
                      >
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0 }}
                          colSpan={6}
                        >
                          <Collapse
                            in={idSelected == id}
                            timeout="auto"
                            unmountOnExit
                          >
                            <div>
                              <Table size="small" aria-label="purchases">
                                <TableHead>
                                  <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Nom</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Admin</TableCell>
                                    <TableCell>Carte de crédit</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow key={key}>
                                    <TableCell>{id}</TableCell>
                                    <TableCell>
                                      {lastName + " " + name}
                                    </TableCell>
                                    <TableCell>{age}</TableCell>
                                    <TableCell>{email}</TableCell>
                                    <TableCell>{admin}</TableCell>
                                    <TableCell>{bankCard}</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}
BackOfficeUsers.private = true
BackOfficeUsers.administration = true
export default BackOfficeUsers
