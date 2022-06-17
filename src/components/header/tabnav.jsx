import React, { useEffect, useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import {
  Box,
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useScrollTrigger,
} from "@mui/material"
import {
  AccountCircle,
  Login,
  Mail,
  Notifications,
  ShoppingCart,
} from "@mui/icons-material"
import { useRouter } from "next/router"
import FDR from "../../../public/images/FRD.png"
import Image from "next/image"

const TabNav = ({ className, window }) => {
  const router = useRouter()
  const [value, setValue] = useState(false)
  const [isHovering, setIsHovered] = useState(false)

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

  const handleMenu = (value) => {
    router.push(value)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    if (
      router.asPath.slice(1) == "home" ||
      router.asPath.slice(1) == "products"
    )
      setValue(router.asPath.slice(1))
  }, [])

  useEffect(() => {
    if (trigger) {
      if (isHovering) {
        setCssProperties("top-[-0px] transition-all duration-300")
        setCssPropertiesLogo("top-[0vh] transition-all duration-300")
      } else {
        setCssProperties("top-[-35px] transition-all duration-300")
        setCssPropertiesLogo("top-[0vh] transition-all duration-300")
      }
    } else {
      setCssProperties("top-[0px] transition-all duration-300")
      setCssPropertiesLogo("top-[0vh] transition-all duration-300")
    }
  }, [trigger, isHovering])

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
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
      <MenuItem onClick={() => handleMenu("/login/sign-in")}>Sign In</MenuItem>
      <MenuItem onClick={() => handleMenu("/login/sign-in")}>Sign Up</MenuItem>
      <MenuItem onClick={() => handleMenu("/profile")}>Profil</MenuItem>
    </Menu>
  )

  return (
    <>
      <Box
        position="fixed"
        sx={{ width: "100vw", px: 4 }}
        className={className + " " + cssProperties}
      >
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
                textColor="inherit"
                indicatorColor="primary"
                centered
                sx={{ height: 0 }}
              >
                <Tab value="home" label="Home" />
                <Tab value="products" label="Products" />
              </Tabs>
            </Box>
            <div
              className={
                "absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2" +
                cssPropertiesLogo
              }
            >
              <Image src={FDR} alt="fond" width={120} height={120} />
            </div>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexBasis: "20%",
                justifyContent: "flex-end",
              }}
            >
              <Box sx={{ mt: 1 }} className="bg-[#9695dd] rounded-md mx-4 px-4">
                <IconButton
                  size="medium"
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={() => router.push("/panier")}
                >
                  <Badge badgeContent={4} color="error">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <IconButton
                  size="medium"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <Notifications />
                  </Badge>
                </IconButton>
                <IconButton
                  size="medium"
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
          </Box>
          <IconButton
            size="medium"
            edge="end"
            aria-haspopup="true"
            onClick={() => {
              router.push("/profile/back-office")
            }}
            color="inherit"
          >
            <Login />
          </IconButton>
        </Toolbar>
      </Box>
      {renderMenu}
    </>
  )
}

export default TabNav
