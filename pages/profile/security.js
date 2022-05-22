import { useState } from "react"
import FormSecurity from "../../src/components/formikComponents/FormSecurity"
import HeaderNav from "../../src/components/header/header"
import ProfileMenu from "../../src/components/profileMenu"

const ProfileSecurityPage = ({ data }) => {
  return (
    <div>
      <HeaderNav />
      <div className="mx-auto w-1/2 mt-20 shadow-gray-100 shadow-md p-4 flex justify-between bg-slate-200 items-center rounded">
        <h1 className="text-xl font-bold">{"My Profile"}</h1>
      </div>
      <ProfileMenu>
        <FormSecurity data={data} />
      </ProfileMenu>
    </div>
  )
}

export default ProfileSecurityPage
