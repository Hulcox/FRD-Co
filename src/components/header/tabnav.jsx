import React, { useContext, useEffect, useState } from "react"
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
import AppContext from "../AppContext"

const TabNav = ({ className, window }) => {
  const { cart, notification, userLevel } = useContext(AppContext)
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
  const [anchorE2, setAnchorE2] = useState(null)
  const isMenuNotificationOpen = Boolean(anchorE2)
  const isMenuOpen = Boolean(anchorEl)
  const handleNotificationMenuOpen = (event) => {
    setAnchorE2(event.currentTarget)
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenu = (value) => {
    router.push(value)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleMenuNotificationClose = () => {
    setAnchorE2(null)
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
      {userLevel == "user" || userLevel == "admin" ? (
        <MenuItem onClick={() => handleMenu("/profile")}>Profil</MenuItem>
      ) : null}
      {userLevel == "admin" ? (
        <MenuItem onClick={() => handleMenu("/backoffice")}>
          Back-Office
        </MenuItem>
      ) : null}
    </Menu>
  )
  const renderMenuNotification = (
    <Menu
      anchorEl={anchorE2}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={"Menu Notification"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuNotificationOpen}
      onClose={handleMenuNotificationClose}
    >
      {notification.map((item) => (
        <MenuItem>{item}</MenuItem>
      ))}
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
                  aria-label="Cart button"
                  color="inherit"
                  onClick={() => router.push("/panier")}
                >
                  <Badge badgeContent={cart.length} color="error">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <IconButton
                  size="medium"
                  edge="end"
                  aria-controls={"Menu notification"}
                  aria-haspopup="true"
                  onClick={handleNotificationMenuOpen}
                  color="inherit"
                  sx={{ ml: 1 }}
                >
                  <Badge badgeContent={notification.length} color="error">
                    <Notifications />
                  </Badge>
                </IconButton>
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
      {renderMenuNotification}
    </>
  )
}

export default TabNav
