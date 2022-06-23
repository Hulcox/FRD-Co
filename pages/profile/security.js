import { useContext, useState } from "react"
import AppContext from "../../src/components/AppContext"
import FormSecurity from "../../src/components/formikComponents/FormSecurity"
import HeaderNav from "../../src/components/header/header"
import DrawerProduct from "../../src/components/profile/DrawerProfile"
import ProfileMenu from "../../src/components/profileMenu"

const ProfileSecurityPage = () => {
  const { handleSetUser, user } = useContext(AppContext)
  return (
    <div className="z-0">
      <HeaderNav />
      <div className="bg-[#c2c6c8] p-[1vw] rounded-lg">
        <DrawerProduct />
        <div className=" flex justify-end">
          <div className="w-[86.5%] mt-[12vh]">
            <h2 className="text-black text-xl font-bold my-5">
              Securité: Changer mon mot de passe
            </h2>
            <FormSecurity userId={user.di} />
          </div>
        </div>
      </div>
    </div>
  )
}
ProfileSecurityPage.private = true
export default ProfileSecurityPage
