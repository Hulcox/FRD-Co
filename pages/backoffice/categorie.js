import { Delete, Edit, ExpandMore } from "@mui/icons-material"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material"
import { useContext, useEffect } from "react"
import api from "../../src/components/api"
import AppContext from "../../src/components/AppContext"
import DrawerBackOffice from "../../src/components/backOffice/DrawerBackOffice"
import FormCategorie from "../../src/components/backOffice/FormCategorie"
import HeaderNav from "../../src/components/header/header"

const BackOfficeCategorie = () => {
  const { categorie, setCategorie } = useContext(AppContext)

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => {
        console.log(res.data)
        setCategorie(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className="z-0 ">
      <HeaderNav />
      <div className="bg-[#c2c6c8] p-[1vw] rounded-lg">
        <DrawerBackOffice />
        <div className="m-[1vw] mt-[12vh] w-4/5 float-right">
          <Accordion sx={{ backgroundColor: "#929597", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="add-product-panel"
              id="add-product-panel"
            >
              <Typography>Ajouter une nouvelle catégorie</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormCategorie />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#929597", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="modify-product-panel"
              id="modify-product-panel"
            >
              <Typography>Modifier une catégorie</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Supprimer</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {categorie.map(({ id, name }, key) => (
                      <>
                        <TableRow
                          key={key}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {key}
                          </TableCell>
                          <TableCell align="right">{name}</TableCell>
                          <TableCell align="right">
                            <Tooltip title="Supprimez une Catégorie">
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
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
export default BackOfficeCategorie
