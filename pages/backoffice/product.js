import { ExpandMore } from "@mui/icons-material"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
import DrawerBackOffice from "../../src/components/backOffice/DrawerBackOffice"
import FormAccount from "../../src/components/formikComponents/FormProduct"
import HeaderNav from "../../src/components/header/header"

const BackOfficeProduct = () => {
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
              <Typography>Ajouter un nouveau produit</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormAccount />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#929597", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="modify-product-panel"
              id="modify-product-panel"
            >
              <Typography>Modifier un produit</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default BackOfficeProduct
