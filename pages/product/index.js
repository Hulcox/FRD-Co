import ProductList from "../../src/components/content/productList"
import SearchBar from "../../src/components/content/searchBar"
import FooterPage from "../../src/components/footer/footer"
import HeaderNav from "../../src/components/header/header"
import api from "../../src/components/api"
import FilterProvider from "../../src/components/filtre/filtreProvider"
import { useContext, useEffect } from "react"
import AppContext from "../../src/components/AppContext"
import { CircularProgress } from "@mui/material"

const ProductPage = () => {
  const {
    setProduct,
    product,
    colorFilter,
    noteFilter,
    priceFilter,
    categorieDetail,
  } = useContext(AppContext)
  const handleClick = () => {
    api.get("/users")
  }

  useEffect(() => {
    api
      .post("/products/filter", {
        price: null,
        rate: noteFilter,
        color: colorFilter,
        category: categorieDetail,
      })
      .then((res) => {
        console.log(res)
        setProduct(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [priceFilter, noteFilter, colorFilter, categorieDetail])

  console.log(product, product.length)
  return (
    <div className={"Product"}>
      <HeaderNav />
      <div className="m-[1vw] my-[12vh] bg-slate-200 w-[96vw]">
        <SearchBar />
        <div className="flex">
          <div className="w-[15vw] bg-gray-400 min-h-screen">
            Filter
            <button onClick={handleClick}>Click</button>
            <FilterProvider />
          </div>
          {product.length == 0 ? (
            <div className="w-[10%] mx-auto flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <div className="w-[85vw]">
              <ProductList product={product} />
            </div>
          )}
        </div>
      </div>
      <FooterPage />
    </div>
  )
}

export default ProductPage
