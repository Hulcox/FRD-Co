import CardProduct from "../src/components/content/cardProduct"
import HeaderNav from "../src/components/header/header"
import Chairs from "../public/images/chairs.jpg"
import Table from "../public/images/table.jpg"
import Sofa from "../public/images/sofa.jpg"
import Table2 from "../public/images/table_petit.jpg"
import Commode from "../public/images/commode.jpg"
import Canape from "../public/images/canape.jpg"
import CardCateorie from "../src/components/content/cardCategorie"
import SliderProduct from "../src/components/content/sliderProduct"
import FooterPage from "../src/components/footer/footer"

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  }

  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className={"Home"}>
      <HeaderNav image />
      <div className="p-10">
        <h2 className="text-2xl font-bold align-baseline">
          Produit Populaire :{" "}
        </h2>
        <CardProduct
          image={Chairs}
          title={"Modalvita"}
          description={"Chaise molletonné en tissu d'alpaga"}
          width={640}
          height={800}
        />
        <CardProduct
          image={Canape}
          title={"Tulepor"}
          description={"Canapé en cuir"}
          width={640}
          height={426}
          reverse
        />
        <CardProduct
          image={Table2}
          title={"Cadiac"}
          description={"Chaise molletonné en tissu d'alpaga"}
          width={640}
          height={800}
        />
        <CardProduct
          image={Commode}
          title={"Felix"}
          description={"Canapé en cuir"}
          width={640}
          height={426}
          reverse
        />
        <CardCateorie
          imageDroite={Sofa}
          imageGauche={Table}
          descriptionDroite={"Canapé"}
          descriptionGauche={"Table"}
        />
        <SliderProduct settings={settings} row={row} nameCategory={"Salon"} />
        <SliderProduct
          settings={settings}
          row={row}
          nameCategory={"Salle à manger"}
        />
      </div>
      <FooterPage />
    </div>
  )
}
