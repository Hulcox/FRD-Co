import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Pagination,
  Radio,
  RadioGroup,
} from "@mui/material"
import { useEffect, useState } from "react"
import CardDetail from "./CardContent"

const ProductList = ({ product }) => {
  const [pageIndex, setPageIndex] = useState(1)
  const [nbDisplay, setNbDisplay] = useState(10)
  const [productPagine, setProductPagine] = useState(
    product.slice(0, nbDisplay)
  )
  const [count, setCount] = useState(Math.ceil(product.length / nbDisplay))

  const handleChange = (event, value) => {
    setPageIndex(value)
  }

  const handleDisplayPerPage = (event) => {
    setNbDisplay(event.target.value)
  }

  useEffect(() => {
    const indexOfLast = pageIndex * nbDisplay
    const indexOfFirst = indexOfLast - nbDisplay

    setCount(Math.ceil(product.length / nbDisplay))
    setProductPagine(product.slice(indexOfFirst, indexOfLast))

    window.scrollTo(0, 0)
  }, [pageIndex, nbDisplay])

  return (
    <>
      <div className=" ml-14 mt-4 flex justify-between">
        <p>
          1-{count} sur plus de {product.length} résultats
        </p>
        <div>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Produit par page
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={nbDisplay}
              onChange={handleDisplayPerPage}
              row
            >
              <FormControlLabel value="10" control={<Radio />} label="10" />
              <FormControlLabel value="20" control={<Radio />} label="20" />
              <FormControlLabel value="30" control={<Radio />} label="30" />
              <FormControlLabel value="40" control={<Radio />} label="40" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-row flex-wrap justify-center">
          {productPagine.map((elm, key) => (
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
          count={count}
          page={pageIndex}
          onChange={handleChange}
          size="large"
          sx={{ display: "flex", justifyContent: "center", mt: 4 }}
        />
      </div>
    </>
  )
}

export default ProductList
