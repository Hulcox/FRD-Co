import styled from "@emotion/styled"
import { Done, KeyboardArrowDown, Search } from "@mui/icons-material"
import {
  Autocomplete,
  Button,
  FormControl,
  Input,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import AppContext from "../AppContext"

const optionsMenu = [
  "Dernière nouveautés",
  " Prix croissant",
  "Prix décroissant",
  "Note (croissant)",
]

const optionsCategorie = ["Chaise", "Canape", "Table", "Lit"]

const SearchBar = () => {
  const {
    categorieDetail,
    setCategorieDetail,
    productDetail,
    setProductDetail,
    product,
  } = useContext(AppContext)
  const router = useRouter()

  const [menu, setMenu] = useState(null)
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0)
  const open = Boolean(menu)

  const handleClick = (event) => {
    setMenu(event.currentTarget)
  }
  const handleMenuItemClick = (event, index) => {
    setSelectedMenuIndex(index)
    setMenu(null)
  }

  const handleClose = () => {
    setMenu(null)
  }

  const handleChange = (event) => {
    setCategorieDetail(event.target.value)
    router.push("/products/" + event.target.value)
  }
  return (
    <>
      <div className="text-center bg-white p-2 shadow-2xl w-full mx-auto flex justify-start rounded-lg">
        <div className="self-center mx-2 min-w-[7%]">
          <FormControl fullWidth>
            <InputLabel>Catégorie : </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categorieDetail}
              label="Catégorie : "
              onChange={handleChange}
            >
              {optionsCategorie.map((option, index) => (
                <MenuItem value={option}>{option}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="mx-auto self-center">
          <Autocomplete
            disablePortal
            options={product}
            getOptionLabel={(option) => option.name}
            sx={{ width: "30vw" }}
            renderInput={(params) => (
              <div className="flex items-center">
                <TextField {...params} variant="standard" />
                <Search sx={{ ml: 2 }} />
              </div>
            )}
          />
        </div>
        <div className="self-center mx-2">
          <Button
            variant="contained"
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
            className="bg-[#6667ab]"
          >
            Trier par :
          </Button>
          <Menu
            elevation={0}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={menu}
            open={open}
            onClose={handleClose}
            color="primary"
          >
            {optionsMenu.map((option, index) => (
              <MenuItem
                onClick={(event) => handleMenuItemClick(event, index)}
                disableRipple
                selected={index === selectedMenuIndex}
              >
                {index === selectedMenuIndex ? <Done sx={{ mr: 1 }} /> : null}
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </>
  )
}

export default SearchBar
