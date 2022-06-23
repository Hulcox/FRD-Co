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
import { useContext, useEffect } from "react"
import api from "../src/components/api"
import AppContext from "../src/components/AppContext"

const Home = () => {
  const { productTop4, setProductTop4 } = useContext(AppContext)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  }

  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    api
      .get("/products/top4")
      .then((res) => {
        setProductTop4(res.data)
      })
      .catch((error) => {})
  }, [])

  return (
    <div className="bg-white">
      <HeaderNav image />
      <div className="p-10">
        <h2 className="text-2xl font-bold align-baseline">
          Produit Populaire :{" "}
        </h2>
        {productTop4.map(({ image1, name, description }, key) => (
          <CardProduct
            image={image1}
            title={name}
            description={description}
            reverse={key % 2 == 1}
          />
        ))}
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
Home.private = false
export default Home
