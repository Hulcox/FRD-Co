import { CircularProgress } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import api from "../../../src/components/api"
import AppContext from "../../../src/components/AppContext"
import ProductList from "../../../src/components/content/productList"
import SearchBar from "../../../src/components/content/searchBar"
import FilterProvider from "../../../src/components/filtre/filtreProvider"
import FooterPage from "../../../src/components/footer/footer"
import HeaderNav from "../../../src/components/header/header"
import { useRouter } from "next/router"

const CategoriePage = () => {
  const {
    setProduct,
    product,
    colorFilter,
    noteFilter,
    priceFilter,
    categorieDetail,
    categorie,
  } = useContext(AppContext)
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    api.get("/users")
  }

  useEffect(() => {
    console.log(categorie)
    if (!loading)
      api
        .get("/products/salon")
        .then((res) => {
          console.log(res)
          setLoading(true)
          setProduct([])
        })
        .catch((error) => {
          console.error(error)
        })
  }, [])

  useEffect(() => {
    if (loading)
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

  console.log(product)
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
          {!loading ? (
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

export default CategoriePage
