import Image from "next/image"
import React, { useState } from "react"
import TabNav from "./tabnav"
import FrdImage from "../../../public/images/FRDCo.gif"
import { AppBar, Toolbar } from "@mui/material"

const HeaderNav = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Image src={FrdImage} alt="logo" width={70} height={70} />
          <TabNav />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default HeaderNav
