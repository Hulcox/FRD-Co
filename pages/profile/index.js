import HeaderNav from "../../src/components/header/header"
import DrawerProduct from "../../src/components/profile/DrawerProfile"
import ProfileMenu from "../../src/components/profileMenu"

const ProfilePage = () => {
  return (
    <div className="z-0">
      <HeaderNav />
      <div className="bg-[#c2c6c8] p-[1vw] rounded-lg">
        <DrawerProduct />
        <div className=" flex justify-end">
          <div className="w-[86.5%] mt-[12vh]">
            Mon profile Mes Commandes : Voir toutes mes commandes. Mon Compte :
            Modifier mon compte. Sécurité: Modifier mon mot de passe. Mes cartes
            de crédit: Gérer toutes les carte de crédit enregistrée
          </div>
        </div>
      </div>
    </div>
  )
}
ProfilePage.private = true
export default ProfilePage
