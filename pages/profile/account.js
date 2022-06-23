import { useContext, useEffect, useState } from "react"
import api from "../../src/components/api"
import AppContext from "../../src/components/AppContext"
import FormAccount from "../../src/components/formikComponents/FormAccount"
import HeaderNav from "../../src/components/header/header"
import DrawerProduct from "../../src/components/profile/DrawerProfile"

const ProfileAccountPage = ({}) => {
  const { userId, user } = useContext(AppContext)
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    api
      .get("/users/" + userId)
      .then((res) => {
        setUserSelected(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className="z-0">
      <HeaderNav />
      <div className="bg-[#c2c6c8] p-[1vw] rounded-lg">
        <DrawerProduct />
        <div className=" flex justify-end">
          <div className="w-[86.5%] mt-[12vh]">
            <h2 className="text-black text-xl font-bold my-5">Mon Compte</h2>
            {user ? <FormAccount userDetails={user} edit /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
ProfileAccountPage.private = true
export default ProfileAccountPage
