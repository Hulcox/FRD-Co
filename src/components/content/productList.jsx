import { Pagination } from "@mui/material"
import CardDetail from "./CardContent"
import Card from "./CardContent"

const ProductList = () => {
  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="p-4">
      <div className="flex flex-row flex-wrap justify-center">
        {row.map((elm) => (
          <CardDetail
            name={"Product"}
            description={"TEST"}
            id={elm}
            rating={elm}
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
