import { Done, KeyboardArrowDown } from "@mui/icons-material"
import { Button, Menu, MenuItem } from "@mui/material"
import { useContext, useState } from "react"
import AppContext from "../AppContext"

const FilterByTri = () => {
  const { filtreTri, setFiltreTri } = useContext(AppContext)
  const optionsMenu = [
    "Dernière nouveautés",
    " Prix croissant",
    "Prix décroissant",
    "Note (croissant)",
  ]
  const [menu, setMenu] = useState(null)
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0)
  const open = Boolean(menu)

  const handleClick = (event) => {
    setMenu(event.currentTarget)
  }
  const handleMenuItemClick = (event, index) => {
    setSelectedMenuIndex(index)
    setFiltreTri(optionsMenu[index])
    setMenu(null)
  }
  const handleClose = () => {
    setMenu(null)
  }

  return (
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
  )
}

export default FilterByTri
