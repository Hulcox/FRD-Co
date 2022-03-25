import { Card, CardContent, Skeleton } from "@mui/material"

const ProductList = () => {
  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="p-16">
      <div className="flex flex-row flex-wrap justify-center">
        {row.map((elm) => (
          <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardContent>
              <Skeleton
                variant="rectangular"
                width={250}
                height={210}
                sx={{ mx: "auto" }}
              />
              <h5 className="text-2xl font-bold align-baseline">Product</h5>
              <p>{elm}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ProductList
