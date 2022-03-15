import CardProduct from "../src/components/content/cardProduct"
import HeaderNav from "../src/components/header/header"
import Chairs from "../public/images/chairs.jpg"
import Table from "../public/images/table.jpg"
import Sofa from "../public/images/sofa.jpg"
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
      <HeaderNav />
      <div className="p-10">
        <CardProduct
          image={Chairs}
          title={"Modalvita"}
          description={"Chaise moltoner en tissu d'alpaga"}
          width={640}
          height={800}
        />
        <CardProduct
          image={Chairs}
          title={"Modalvita"}
          description={"Chaise moltoner en tissu d'alpaga"}
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
        <SliderProduct settings={settings} row={row} />
        <SliderProduct settings={settings} row={row} />
      </div>
      <FooterPage />
    </div>
  )
}
