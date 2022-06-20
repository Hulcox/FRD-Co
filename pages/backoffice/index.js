import DrawerBackOffice from "../../src/components/backOffice/DrawerBackOffice"
import HeaderNav from "../../src/components/header/header"

const BackOffice = () => {
  return (
    <div className="z-0">
      <HeaderNav />
      <div className="bg-[#c2c6c8] p-[1vw] rounded-lg">
        <DrawerBackOffice />
      </div>
    </div>
  )
}

export default BackOffice
