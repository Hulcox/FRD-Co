import { Pagination } from "@mui/material"
import CardDetail from "./CardContent"
import Canape from "../../../public/images/canape.jpg"
import Card from "./CardContent"

const ProductList = ({ filtreCategorie, product }) => {
  const row = filtreCategorie
    ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  return (
    <div className="p-4">
      <div className="flex flex-row flex-wrap justify-center">
        {product.map((elm, key) => (
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
      </div>
      <Pagination
        count={3}
        size="large"
        sx={{ display: "flex", justifyContent: "center", mt: 4 }}
      />
    </div>
  )
}

export default ProductList
