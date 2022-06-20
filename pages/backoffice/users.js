import { Delete, Edit, StarBorder } from "@mui/icons-material"
import {
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
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
    console.log(id)
    if (id == idSelected) {
      setIdSelected(false)
    } else setIdSelected(id)
  }

  useEffect(() => {
    api
      .get("/users")
      .then((res) => {
        console.log(res)
        setUsers(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const deleteProduct = (id) => {
    console.log(id)
    //api.delete('/product/id')
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
                  <TableCell>Id</TableCell>
                  <TableCell>Nom</TableCell>
                  <TableCell align="right">Prenom</TableCell>
                  <TableCell align="right">Civilité</TableCell>
                  <TableCell align="right">email</TableCell>
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
                        <TableCell>{key}</TableCell>
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
                        <TableCell align="right">{name}</TableCell>
                        <TableCell align="right">{civility}</TableCell>
                        <TableCell align="right">{email}</TableCell>
                        <TableCell align="right">
                          <IconButton>
                            <Edit color="success" />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              deleteProduct(id)
                            }}
                          >
                            <Delete color="error" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <Collapse
                        in={idSelected == id}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List
                          component="div"
                          disablePadding
                          sx={{ ml: 8, width: "auto" }}
                        >
                          <ListItem
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <div className="font-bold flex">
                              {"ID: "}
                              <p className="font-normal italic ml-2">{id}</p>
                            </div>
                            <div className="font-bold flex">
                              {"Nom: "}
                              <p className="font-normal italic ml-2">
                                {lastName + " " + name}
                              </p>
                            </div>
                            <div className="font-bold flex">
                              {"Age: "}
                              <p className="font-normal italic ml-2">{age}</p>
                            </div>
                            <div className="font-bold flex">
                              {"Email: "}
                              <p className="font-normal italic ml-2">{email}</p>
                            </div>
                            <div className="font-bold flex">
                              {"Admin: "}
                              <p className="font-normal italic ml-2">{admin}</p>
                            </div>
                            <div className="font-bold flex">
                              {"Carte de crédit: "}
                              <p className="font-normal italic ml-2">
                                {bankCard}
                              </p>
                            </div>
                          </ListItem>
                        </List>
                      </Collapse>
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

export default BackOfficeUsers
