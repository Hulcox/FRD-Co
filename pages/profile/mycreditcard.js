import { useState } from "react"
import FormAccount from "../../src/components/formikComponents/FormAccount"
import HeaderNav from "../../src/components/header/header"
import DrawerProduct from "../../src/components/profile/DrawerProduct"

const ProfileCreditCardtPage = ({}) => {
  const [modified, setModified] = useState(false)

  return (
    <div className="z-0">
      <HeaderNav />
      <div className="bg-[#c2c6c8] p-[1vw] rounded-lg">
        <DrawerProduct />
        <div className=" flex justify-center">
          <div className="w-[70%] mt-[12vh]">
            <h2 className="text-black text-xl font-bold my-5">Mon Compte</h2>
            <FormAccount />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCreditCardtPage
