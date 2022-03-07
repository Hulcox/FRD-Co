import Image from "next/image"
import React, { useState } from "react"
import TabNav from "./tabnav"
import FrdImage from "../../../public/images/FRDLogo.png"
import photo from "../../../public/images/spacejoy.jpg"
import { AppBar, Toolbar } from "@mui/material"

const HeaderNav = () => {
  return (
    <>
      <div className="bg-[#148F77]/[0.7] shadow-lg shadow-[#17A589] pt-1 pb-1 z-50 sticky top-0">
        <Toolbar>
          <TabNav />
        </Toolbar>
      </div>
      <div className="z-0 relative">
        <Image src={photo} alt="fond" width={1920} height={720} />
      </div>
    </>
  )
}

export default HeaderNav
