import Slider from "react-slick"
import CardDetail from "./CardContent"

const SliderProduct = ({ row, settings, nameCategory }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold align-baseline">
        Produit de la catégorie : {nameCategory}
      </h2>
      <Slider {...settings}>
        {row.map((elm) => (
          <CardDetail
            name={"Product"}
            description={"TEST"}
            id={elm}
            rating={elm}
          />
        ))}
      </Slider>
    </div>
  )
}

export default SliderProduct
