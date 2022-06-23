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
import MenuProfile from "./menuProfile"
import MenuNotification from "./menuNotification"

const TabNav = ({ className, window }) => {
  const { cart } = useContext(AppContext)
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
                <MenuNotification />
                <MenuProfile />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  )
}

export default TabNav
