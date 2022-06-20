import Image from "next/image"
import React, { useState } from "react"
import TabNav from "./tabnav"
import photo from "../../../public/images/spacejoy.jpg"

const HeaderNav = ({ image }) => {
  return (
    <div>
      <TabNav
        className={"bg-[#6667ab]/[0.8] shadow-lg shadow-[#373d7b] z-50"}
      />
      {image ? (
        <div className="z-0 relative">
          <Image src={photo} alt="fond" width={1920} height={720} />
        </div>
      ) : null}
    </div>
  )
}

export default HeaderNav
