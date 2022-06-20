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

const BackOfficeOrders = () => {
  const { orders, setOrders } = useContext(AppContext)
  const [idSelected, setIdSelected] = useState(false)

  const handleChange = (id) => {
    console.log(id)
    if (id == idSelected) {
      setIdSelected(false)
    } else setIdSelected(id)
  }

  useEffect(() => {
    api
      .get("/orders")
      .then((res) => {
        console.log(res)
        setOrders(res.data)
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
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Date de Livraison</TableCell>
                  <TableCell align="right">Adresse de Livraison</TableCell>
                  <TableCell align="right">total</TableCell>
                  <TableCell align="right">Utilisateur</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(
                  (
                    {
                      id,
                      orderNumber,
                      status,
                      orderDate,
                      user,
                      Total,
                      cart,
                      deliveryAddress,
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
                            {orderNumber}
                          </Button>
                        </TableCell>
                        <TableCell align="right">{status}</TableCell>
                        <TableCell align="right">{orderDate}</TableCell>
                        <TableCell align="right">{deliveryAddress}</TableCell>
                        <TableCell align="right">{Total}</TableCell>
                        <TableCell align="right">{user}</TableCell>
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
                                {orderDate}
                              </p>
                            </div>
                            <div className="font-bold flex">
                              {"Description: "}
                              <p className="font-normal italic ml-2">
                                {deliveryAddress}
                              </p>
                            </div>
                            <div className="font-bold flex">
                              {"Catégorie: "}
                              <p className="font-normal italic ml-2">{Total}</p>
                            </div>
                            <div className="font-bold flex">
                              {"Prix: "}
                              <p className="font-normal italic ml-2">
                                {user} €
                              </p>
                            </div>
                            <div className="font-bold flex">
                              {"Note: "}
                              <p className="font-normal italic ml-2">{cart}</p>
                            </div>
                            <div className="font-bold flex">
                              {"NbVote: "}
                              <p className="font-normal italic ml-2">
                                {orderNumber}
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

export default BackOfficeOrders
