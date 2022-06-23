import { ExpandMore, Search } from "@mui/icons-material"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  IconButton,
  TextField,
  Typography,
} from "@mui/material"
import { useContext, useEffect, useState } from "react"
import api from "../../src/components/api"
import AppContext from "../../src/components/AppContext"
import DrawerBackOffice from "../../src/components/backOffice/DrawerBackOffice"
import FormAccount from "../../src/components/formikComponents/FormAccount"
import HeaderNav from "../../src/components/header/header"

const BackOfficeUser = () => {
  const { users, setUsers } = useContext(AppContext)
  const [usersSelected, setUsersSelected] = useState(null)

  useEffect(() => {
    api
      .get("/users")
      .then((res) => {
        setUsers(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const selectUser = (event, value) => {
    setUsersSelected(value)
  }

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
              <Typography>Ajouter un nouveau utilisateur</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormAccount adminForm />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#929597", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="modify-product-panel"
              id="modify-product-panel"
            >
              <Typography>Modifier un utilisateur</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="mx-auto self-center flex justify-center bg-white p-2 rounded-md">
                <Autocomplete
                  onChange={(event, newValue) => {
                    selectUser(event, newValue)
                  }}
                  disablePortal
                  options={users}
                  getOptionLabel={(option) => option.name}
                  sx={{ width: "30vw" }}
                  renderInput={(params) => (
                    <div className="flex items-center">
                      <TextField {...params} variant="standard" />
                      <IconButton>
                        <Search sx={{ ml: 2 }} />
                      </IconButton>
                    </div>
                  )}
                />
              </div>
              <div className="mt-4">
                {usersSelected ? (
                  <FormAccount userDetails={usersSelected} edit />
                ) : null}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
BackOfficeUser.private = true
BackOfficeUser.administration = true
export default BackOfficeUser
