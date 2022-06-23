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
        {row.map((elm, key) => (
          <CardDetail
            name={elm.name}
            description={elm.description}
            id={elm.id}
            rating={elm.rate}
            image1={elm.image1}
            price={elm.price}
            categorie={elm.category}
            stock={elm.stock}
            color={elm.color}
            key={key}
          />
        ))}
      </Slider>
    </div>
  )
}

export default SliderProduct
