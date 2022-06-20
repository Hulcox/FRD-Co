import { Delete, Edit, StarBorder } from "@mui/icons-material"
import {
  Button,
  ButtonGroup,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import { useContext, useEffect, useState } from "react"
import api from "../../src/components/api"
import AppContext from "../../src/components/AppContext"
import DrawerBackOffice from "../../src/components/backOffice/DrawerBackOffice"
import HeaderNav from "../../src/components/header/header"

const BackOfficeProducts = () => {
  const { setProduct, product } = useContext(AppContext)
  const [idSelected, setIdSelected] = useState(false)

  const handleChange = (id) => {
    console.log(id)
    if (id == idSelected) {
      setIdSelected(false)
    } else setIdSelected(id)
  }

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        console.log(res)
        setProduct(res.data)
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
                  <TableCell>Nom du produit</TableCell>
                  <TableCell align="right">Catégorie</TableCell>
                  <TableCell align="right">Prix</TableCell>
                  <TableCell align="right">Stock</TableCell>
                  <TableCell align="right">Modifier/Supprimer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.map(
                  (
                    {
                      id,
                      name,
                      description,
                      color,
                      rate,
                      nbVote,
                      category,
                      price,
                      stock,
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
                            {name}
                          </Button>
                        </TableCell>
                        <TableCell align="right">{category}</TableCell>
                        <TableCell align="right">{price + " €"}</TableCell>
                        <TableCell align="right">{stock}</TableCell>
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
                              <p className="font-normal italic ml-2">{name}</p>
                            </div>
                            <div className="font-bold flex">
                              {"Description: "}
                              <p className="font-normal italic ml-2">
                                {description}
                              </p>
                            </div>
                            <div className="font-bold flex">
                              {"Catégorie: "}
                              <p className="font-normal italic ml-2">
                                {category}
                              </p>
                            </div>
                            <div className="font-bold flex">
                              {"Prix: "}
                              <p className="font-normal italic ml-2">
                                {price} €
                              </p>
                            </div>
                            <div className="font-bold flex">
                              {"Couleur: "}
                              <p className="font-normal italic ml-2">{color}</p>
                            </div>
                            <div className="font-bold flex">
                              {"Note: "}
                              <p className="font-normal italic ml-2">
                                {rate} étoiles
                              </p>
                            </div>
                            <div className="font-bold flex">
                              {"NbVote: "}
                              <p className="font-normal italic ml-2">
                                {nbVote}
                              </p>
                            </div>
                            <div className="font-bold flex">
                              {"Stock: "}
                              <p className="font-normal italic ml-2">
                                {stock} unité(s)
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

export default BackOfficeProducts
