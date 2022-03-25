import CardProduct from "../src/components/content/cardProduct"
import HeaderNav from "../src/components/header/header"
import Chairs from "../public/images/chairs.jpg"
import Table from "../public/images/table.jpg"
import Sofa from "../public/images/sofa.jpg"
import CardCateorie from "../src/components/content/cardCategorie"

export default function Home() {
  return (
    <div className={"Home"}>
      <HeaderNav />
      <div className="Home Content p-10">
        <CardProduct
          image={Chairs}
          title={"Modalvita"}
          description={"Chaise molletonné en tissu d'alpaga"}
          width={640}
          height={800}
        />
        <CardProduct
          image={Chairs}
          title={"Modalvita"}
          description={"Chaise molletonné en tissu d'alpaga"}
          width={640}
          height={800}
          reverse
        />
        <CardCateorie
          imageDroite={Sofa}
          imageGauche={Table}
          descriptionDroite={"Salon"}
          descriptionGauche={"Salle à manger"}
        />
      </div>
    </div>
  )
}
