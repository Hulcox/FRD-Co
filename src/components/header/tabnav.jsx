import React, { useEffect, useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import {
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useScrollTrigger,
} from "@mui/material"
import { AccountCircle, Mail, Notifications } from "@mui/icons-material"
import { useRouter } from "next/router"

const TabNav = ({ className, window }) => {
  const router = useRouter()
  const [value, setValue] = useState(router.asPath.slice(1))
  const [isHovering, setIsHovered] = useState(false)

  console.log(router.asPath)

  const [cssProperties, setCssProperties] = useState(className)
  const [cssPropertiesLogo, setCssPropertiesLogo] = useState("")

  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
    router.push("/" + newValue)
  }

  const [anchorEl, setAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    if (trigger) {
      if (isHovering) {
        setCssProperties("top-[-0px] transition-all duration-300")
        setCssPropertiesLogo("top-[1.5vh] transition-all duration-300")
      } else {
        setCssProperties("top-[-35px] transition-all duration-300")
        setCssPropertiesLogo("top-[7.5vh] transition-all duration-300")
      }
    } else {
      setCssProperties("top-[0px] transition-all duration-300")
      setCssPropertiesLogo("top-[1.5vh] transition-all duration-300")
    }
  }, [trigger, isHovering])

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  return (
    <>
      {console.log(cssProperties)}
      <AppBar position="fixed" className={className + " " + cssProperties}>
        <Toolbar
          className={cssProperties}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexBasis: "20%",
                justifyContent: "flex-start",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                centered
                sx={{ height: 0 }}
              >
                <Tab value="home" label="Home" />
                <Tab value="product" label="Products" />
                <Tab value="contact" label="Contact" />
              </Tabs>
            </Box>
            <div
              className={
                "bg-[#148F77]/[0.7] w-16 h-16 shadow-lg shadow-[#17A589] rotate-45 p-2 relative " +
                cssPropertiesLogo
              }
            >
              <div className="w-12 h-12 p-1 bg-white">
                <div className="w-10 h-10 bg-black"></div>
              </div>
            </div>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexBasis: "20%",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <Mail />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  )
}

export default TabNav
