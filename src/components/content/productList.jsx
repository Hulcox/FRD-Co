import { Pagination } from "@mui/material"
import CardDetail from "./CardContent"

const ProductList = ({ filtreCategorie, product }) => {
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
