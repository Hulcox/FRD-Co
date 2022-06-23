import HeaderNav from "../../src/components/header/header"
import DrawerProduct from "../../src/components/profile/DrawerProduct"
import ProfileMenu from "../../src/components/profileMenu"

const ProfilePage = () => {
  return (
    <div className="z-0">
      <HeaderNav />
      <div className="bg-[#c2c6c8] p-[1vw] rounded-lg">
        <DrawerProduct />
        <div className="m-[1vw] mt-[12vh] w-full"></div>
      </div>
    </div>
  )
}

export default ProfilePage
