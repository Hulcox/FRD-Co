import { Delete, Edit } from "@mui/icons-material"
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
  Tooltip,
  Typography,
} from "@mui/material"
import { useContext, useEffect, useState } from "react"
import api from "../../src/components/api"
import AppContext from "../../src/components/AppContext"
import DrawerBackOffice from "../../src/components/backOffice/DrawerBackOffice"
import FormProduct from "../../src/components/formikComponents/FormProduct"
import HeaderNav from "../../src/components/header/header"

const BackOfficeProducts = () => {
  const { setProduct, product } = useContext(AppContext)
  const [idSelected, setIdSelected] = useState(null)
  const [openModify, setOpenModify] = useState(false)

  const handleChange = (id) => {
    if (id == idSelected) {
      setIdSelected(null)
    } else setIdSelected(id)
  }

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProduct(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const deleteProduct = (id) => {
    api.delete("/products/delete/" + id).catch((error) => {
      console.error(error)
    })
  }

  const handleClickModify = (id) => {
    handleChange(id)
    setOpenModify(!openModify)
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
                  <TableCell>Nom du produit</TableCell>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Catégorie</TableCell>
                  <TableCell align="right">Prix</TableCell>
                  <TableCell align="right">Stock</TableCell>
                  <TableCell align="right">Modifier/Supprimer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.map((productItem, key) => (
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
                            handleChange(key)
                          }}
                        >
                          {productItem.name}
                        </Button>
                      </TableCell>
                      <TableCell>{key}</TableCell>
                      <TableCell align="right">
                        {productItem.category}
                      </TableCell>
                      <TableCell align="right">
                        {productItem.price + " €"}
                      </TableCell>
                      <TableCell align="right">{productItem.stock}</TableCell>
                      <TableCell align="right">
                        <Tooltip title="Modifier un produit">
                          <IconButton onClick={() => handleClickModify(key)}>
                            <Edit color="success" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Supprimez un produit">
                          <IconButton
                            onClick={() => {
                              deleteProduct(productItem.id)
                            }}
                          >
                            <Delete color="error" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow component="div" sx={{ ml: 8, width: "auto" }}>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse
                          in={!openModify && idSelected == key}
                          timeout="auto"
                          unmountOnExit
                        >
                          <div>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow>
                                  <TableCell>ID</TableCell>
                                  <TableCell>Nom</TableCell>
                                  <TableCell>Description</TableCell>
                                  <TableCell>Catégorie</TableCell>
                                  <TableCell>Prix</TableCell>
                                  <TableCell>Couleur</TableCell>
                                  <TableCell>Note</TableCell>
                                  <TableCell>NbVote</TableCell>
                                  <TableCell>stock</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow key={key}>
                                  <TableCell>{productItem.id}</TableCell>
                                  <TableCell>{productItem.name}</TableCell>
                                  <TableCell>
                                    {productItem.description}
                                  </TableCell>
                                  <TableCell>{productItem.category}</TableCell>
                                  <TableCell>{productItem.price} €</TableCell>
                                  <TableCell>{productItem.color}</TableCell>
                                  <TableCell>{productItem.rate}</TableCell>
                                  <TableCell>{productItem.nbVote}</TableCell>
                                  <TableCell>
                                    {productItem.stock} unité(s)
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                    <TableRow component="div" sx={{ ml: 8, width: "auto" }}>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse
                          in={openModify && idSelected == key}
                          timeout="auto"
                          unmountOnExit
                        >
                          <div>
                            <FormProduct productDetails={productItem} edit />
                          </div>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}
BackOfficeProducts.private = true
BackOfficeProducts.administration = true
export default BackOfficeProducts
