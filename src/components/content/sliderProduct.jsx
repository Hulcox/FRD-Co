import Slider from "react-slick"
import CardDetail from "./CardContent"
import Canape from "../../../public/images/canape.jpg"

const SliderProduct = ({ row, settings, nameCategory }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold align-baseline">
        Produit de la catégorie : {nameCategory}
      </h2>
      <Slider {...settings}>
        {row.map((elm) => (
          <CardDetail
            name={"Tulepor"}
            description={"Canapé en cuir"}
            id={elm}
            rating={elm}
            image={elm % 2 ? Canape : false}
            price={99}
            categorie={"Canape"}
          />
        ))}
      </Slider>
    </div>
  )
}

export default SliderProduct
