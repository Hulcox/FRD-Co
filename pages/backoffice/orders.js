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
  Tooltip,
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
    if (id == idSelected) {
      setIdSelected(false)
    } else setIdSelected(id)
  }

  useEffect(() => {
    api
      .get("/orders")
      .then((res) => {
        setOrders(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [deleteOrders])

  const deleteOrders = (id) => {
    api.delete("/orders/" + id).catch((error) => {
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
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Date de Livraison</TableCell>
                  <TableCell align="right">Adresse de Livraison</TableCell>
                  <TableCell align="right">total</TableCell>
                  <TableCell align="right">Utilisateur</TableCell>
                  <TableCell align="right">Supprimer</TableCell>
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
                      total,
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
                        <TableCell align="right">{total}</TableCell>
                        <TableCell align="right">
                          {user ? user.lastName + " " + user.name : null}
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip title="Supprimez un produit">
                            <IconButton
                              onClick={() => {
                                deleteOrders(id)
                              }}
                            >
                              <Delete color="error" />
                            </IconButton>
                          </Tooltip>
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
                                    <TableCell>Id</TableCell>
                                    <TableCell>Numéro de livraison</TableCell>
                                    <TableCell>Date de livraison</TableCell>
                                    <TableCell>Adresse de livraison</TableCell>
                                    <TableCell>Panier</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Utilisateur</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow key={key}>
                                    <TableCell>{id}</TableCell>
                                    <TableCell>{orderNumber}</TableCell>
                                    <TableCell>{orderDate}</TableCell>
                                    <TableCell>{deliveryAddress}</TableCell>
                                    <TableCell>{cart}</TableCell>
                                    <TableCell>{total} €</TableCell>
                                    <TableCell>
                                      {user
                                        ? user.lastName + " " + user.name
                                        : null}
                                    </TableCell>
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

BackOfficeOrders.private = true
BackOfficeOrders.administration = true

export default BackOfficeOrders
