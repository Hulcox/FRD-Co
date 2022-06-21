import FooterPage from "../../src/components/footer/footer"
import HeaderNav from "../../src/components/header/header"
import { useRouter } from "next/router"
import FilAriane from "../../src/components/content/FilAriane"
import { Divider, Rating, Skeleton, Typography } from "@mui/material"
import AppContext from "../../src/components/AppContext"
import { useContext, useEffect, useState } from "react"
import api from "../../src/components/api"

const ProductDetail = () => {
  const {
    productDetail,
    setProductDetail,
    categorieDetail,
    setCategorieDetail,
  } = useContext(AppContext)
  const [value, setValue] = useState(0 || productDetail.rate)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const [url, setUrl] = useState(["products"])
  const { productName, id, categorie } = router.query

  useEffect(() => {
    if (categorie && productName) {
      setUrl(["products", categorie, productName])
      setCategorieDetail(categorie)
    } else {
      setUrl(["products"])
      setCategorieDetail("all")
    }
  }, [router])

  useEffect(() => {
    if (id)
      api
        .get("/products/" + id)
        .then((res) => {
          setLoading(true)
          setProductDetail(res.data)
        })
        .catch((error) => {
          setLoading(false)
          console.error(error)
        })
  }, [id])

  let [cart, setCart] = useState([])

  //this is called on component mount
  useEffect(() => {
    let localCart = localStorage.getItem("cart")
    //turn it into js
    localCart = JSON.parse(localCart)
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart)
  }, [])

  const addItem = () => {
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...cart]

    //assuming we have an ID field in our item
    let { id } = productDetail

    //look for item in cart array
    let existingItem = cartCopy.find((cartItem) => cartItem.id == id)

    //if item already exists
    if (existingItem) {
      existingItem.quantityOnCart += productDetail.quantityOnCart //update item
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push({ ...productDetail, quantityOnCart: 1 })
    }

    //update app state
    setCart(cartCopy)

    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy)
    localStorage.setItem("cart", stringCart)
  }

  console.log(router.query, productDetail)
  if (!loading) return <div></div>
  else
    return (
      <div>
        <HeaderNav />
        <div className="m-[2vw] my-[10vh] w-[96vw] h-screen">
          <FilAriane url={url} option={id} />
          <Divider sx={{ m: 2 }} />
          <div className="p-8 flex">
            <div className="flex">
              <div className="pr-12 ">
                <Skeleton
                  variant="rectangular"
                  width={200}
                  height={200}
                  sx={{ mb: 2 }}
                />
                <Skeleton
                  variant="rectangular"
                  width={200}
                  height={200}
                  sx={{ mb: 2 }}
                />
                <Skeleton
                  variant="rectangular"
                  width={200}
                  height={200}
                  sx={{ mb: 2 }}
                />
              </div>
              <Skeleton variant="rectangular" width={600} height={600} />
            </div>
            <div className="pl-14">
              <div className="flex justify-between text-4xl font-bold align-baseline">
                <h5>{productDetail.name}</h5>
                <h5>{productDetail.price + " €"}</h5>
              </div>
              <Divider sx={{ mt: 2 }} />
              <div className="align-baseline pt-10">
                <p>{productDetail.description}</p>
                <div className="mt-12">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue)
                    }}
                  />
                </div>
              </div>
              <Divider sx={{ mt: 2 }} />
              <div className="text-xl font-bold align-baseline text-green-600 pt-2">
                <h5>En stock: {productDetail.stock}</h5>
                <button
                  onClick={addItem}
                  className="bg-[#119DA4] text-gray-700 w-full h-[20%] p-2 mt-8 rounded-md hover:bg-[#129299] hover:text-white transition-all duration-300"
                >
                  Ajoutez au panier
                </button>
              </div>
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    )
}

export default ProductDetail
