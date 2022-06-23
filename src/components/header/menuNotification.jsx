import React, { useContext, useEffect, useState } from "react"
import { Badge, IconButton, Menu, MenuItem } from "@mui/material"
import { Close, Notifications } from "@mui/icons-material"
import { useRouter } from "next/router"
import AppContext from "../AppContext"
import api from "../api"

const MenuNotification = () => {
  const { setNotification, notification, userId } = useContext(AppContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    if (userId)
      api
        .get("/orders/" + userId + "/last5Orders")
        .then((res) => {
          setNotification(res.data)
        })
        .catch((error) => {
          console.error(error)
        })
  }, [notification])

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
      {notification.length == 0 ? (
        <MenuItem>{"Pas de Notification !"}</MenuItem>
      ) : (
        notification.map((item) => (
          <MenuItem>
            {item}{" "}
            <IconButton>
              <Close />
            </IconButton>
          </MenuItem>
        ))
      )}
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
      >
        <Badge badgeContent={notification.length} color="error">
          <Notifications />
        </Badge>
      </IconButton>
      {renderMenu}
    </>
  )
}

export default MenuNotification
