import ProductList from "../../src/components/content/productList"
import SearchBar from "../../src/components/content/searchBar"
import FooterPage from "../../src/components/footer/footer"
import HeaderNav from "../../src/components/header/header"
import api from "../../src/components/api"
import FilterProvider from "../../src/components/filtre/filtreProvider"
import { useContext, useEffect, useState } from "react"
import AppContext from "../../src/components/AppContext"
import { CircularProgress } from "@mui/material"
import { useRouter } from "next/router"
import FilAriane from "../../src/components/content/FilAriane"

const ProductPage = () => {
  const {
    setProduct,
    product,
    colorFilter,
    noteFilter,
    priceFilter,
    categorieDetail,
    setCategorieDetail,
  } = useContext(AppContext)
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState(["products"])

  useEffect(() => {
    console.log(router)
    if (router.query.categorie) {
      setUrl(["products", router.query.categorie])
      setCategorieDetail(router.query.categorie)
    } else {
      setUrl(["products"])
      setCategorieDetail("all")
    }
  }, [router])

  useEffect(() => {
    if (!loading)
      api
        .get("/products")
        .then((res) => {
          console.log(res)
          setLoading(true)
          setProduct(res.data)
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

  console.log(product, product.length)
  return (
    <div>
      <HeaderNav />
      <div className="bg-[#c2c6c8] p-[1vw] rounded-lg">
        <div className=" mt-[12vh] ">
          <SearchBar />
          <div className="w-full p-4">
            <FilAriane url={url} />
          </div>
        </div>
        <div className=" bg-slate-200 w-[96vw] rounded-lg">
          <div className="flex">
            <div className="w-[15vw] bg-[#929597] min-h-screen rounded-tl-lg">
              <FilterProvider />
            </div>
            {product.length == 0 ? (
              <div className="w-[10%] mx-auto flex justify-center items-center">
                <CircularProgress />
              </div>
            ) : (
              <div className="w-[85vw]">
                1-3 sur plus de 100 000 résultats
                <ProductList product={product} />
              </div>
            )}
          </div>
        </div>
        <FooterPage />
      </div>
    </div>
  )
}

export default ProductPage
