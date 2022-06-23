import React, { useContext, useState } from "react"
import { IconButton, Menu, MenuItem } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import { useRouter } from "next/router"
import AppContext from "../AppContext"

const MenuProfile = () => {
  const { userLevel } = useContext(AppContext)
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenu = (value) => {
    router.push(value)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={"Menu Profile"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleMenu("/login/sign-in")}>Sign In</MenuItem>
      <MenuItem onClick={() => handleMenu("/login/sign-up")}>Sign Up</MenuItem>
      {userLevel == "ROLE_USER" || userLevel == "ROLE_ADMIN" ? (
        <MenuItem onClick={() => handleMenu("/profile")}>Profil</MenuItem>
      ) : null}
      {userLevel == "ROLE_ADMIN" ? (
        <MenuItem onClick={() => handleMenu("/backoffice")}>
          Back-Office
        </MenuItem>
      ) : null}
    </Menu>
  )

  return (
    <>
      <IconButton
        size="medium"
        edge="end"
        aria-controls={"Menu profile"}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        sx={{ ml: 2 }}
      >
        <AccountCircle />
      </IconButton>
      {renderMenu}
    </>
  )
}

export default MenuProfile
