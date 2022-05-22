import Image from "next/image"
import React, { useState } from "react"
import TabNav from "./tabnav"
import photo from "../../../public/images/spacejoy.jpg"

const HeaderNav = ({ image }) => {
  return (
    <>
      <TabNav
        className={"bg-[#119DA4]/[0.7] shadow-lg shadow-[#119DA4] z-50"}
      />
      {image ? (
        <div className="z-0 relative">
          <Image src={photo} alt="fond" width={1920} height={720} />
        </div>
      ) : null}
    </>
  )
}

export default HeaderNav
