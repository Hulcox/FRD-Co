import { CreditCard, Delete, ExpandMore } from "@mui/icons-material"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
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
import { useContext, useState } from "react"
import AppContext from "../../src/components/AppContext"
import FormCreditCard from "../../src/components/formikComponents/FormCreditCard"
import HeaderNav from "../../src/components/header/header"
import DrawerProduct from "../../src/components/profile/DrawerProfile"

const ProfileCreditCardtPage = ({}) => {
  const { creditCard } = useContext(AppContext)
  const [modified, setModified] = useState(false)

  const deleteCreditCard = (id) => {
    api.delete("/creditcard/" + id).catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className="z-0">
      <HeaderNav />
      <div className="bg-[#c2c6c8] p-[1vw] rounded-lg">
        <DrawerProduct />
        <div className=" flex justify-end">
          <div className="w-[86.5%] mt-[12vh]">
            <Accordion sx={{ backgroundColor: "#929597", color: "white" }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="add-product-panel"
                id="add-product-panel"
              >
                <Typography>Liste des cartes de crédit</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">
                          Numéro de la carte de crédit
                        </TableCell>
                        <TableCell align="right">Date d'expiration</TableCell>
                        <TableCell align="right">Cryptogram</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {creditCard.map(
                        (
                          { id, nbCreditCard, expirationDate, cryptogram },
                          key
                        ) => (
                          <>
                            <TableRow
                              key={key}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
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
                                  {id}
                                </Button>
                              </TableCell>
                              <TableCell align="right">
                                {nbCreditCard}
                              </TableCell>
                              <TableCell align="right">{orderDate}</TableCell>
                              <TableCell align="right">
                                {expirationDate}
                              </TableCell>
                              <TableCell align="right">{cryptogram}</TableCell>
                              <TableCell align="right">
                                <Tooltip title="Supprimez une carte de crédit">
                                  <IconButton
                                    onClick={() => {
                                      deleteCreditCard(id)
                                    }}
                                  >
                                    <Delete color="error" />
                                  </IconButton>
                                </Tooltip>
                              </TableCell>
                            </TableRow>
                          </>
                        )
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#929597", color: "white" }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="modify-product-panel"
                id="modify-product-panel"
              >
                <Typography>Ajoutez une carte de crédit</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormCreditCard />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
ProfileCreditCardtPage.private = true
export default ProfileCreditCardtPage
