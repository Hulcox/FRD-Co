import React, { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

const TabNav = () => {
  const [value, setValue] = useState("home")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ mx: "auto" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
        <Tab value="home" label="Home" />
        <Tab value="product" label="Products" />
        <Tab value="contact" label="Contact" />
      </Tabs>
    </Box>
  )
}

export default TabNav
