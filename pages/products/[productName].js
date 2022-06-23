import FooterPage from "../../src/components/footer/footer"
import HeaderNav from "../../src/components/header/header"
import { useRouter } from "next/router"
import FilAriane from "../../src/components/content/FilAriane"
import { Button, Divider, Rating, Skeleton, Typography } from "@mui/material"
import AppContext from "../../src/components/AppContext"
import { useContext, useEffect, useState } from "react"
import api from "../../src/components/api"
import ProductImages from "../../src/components/content/ProductImages"

const ProductDetail = () => {
  const { productDetail, setProductDetail, addCartItem } =
    useContext(AppContext)
  const [value, setValue] = useState(0 || productDetail.rate)
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(0)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id)
      api
        .get("/products/" + id)
        .then((res) => {
          setLoading(true)
          setProductDetail(res.data)
          setImages([
            res.data.image1,
            res.data.image2,
            res.data.image3,
            res.data.image4,
          ])
        })
        .catch((error) => {
          setLoading(false)
          console.error(error)
        })
  }, [id])
  if (!loading) return <div></div>
  else
    return (
      <div>
        <HeaderNav />
        <div className="m-[2vw] my-[10vh] w-[96vw] h-screen">
          <FilAriane />
          <Divider sx={{ m: 2 }} />
          <div className="p-8 flex">
            <div className="flex">
              <div className="pr-12 ">
                {images.map((image, key) => (
                  <div onClick={() => setSelectedImage(key)}>
                    <ProductImages
                      key={key}
                      sx={{ mb: 2 }}
                      width={150}
                      height={150}
                      image={image}
                      name={"image" + key}
                      className="m-auto mb-2 max-h-[150px] max-w-[150px] align-baseline"
                    />
                  </div>
                ))}
              </div>
              <ProductImages
                sx={{ mb: 2 }}
                width={575}
                height={575}
                image={images[selectedImage]}
                name={"image" + 1}
                className="m-auto mb-2 max-h-[650px] max-w-[650px] align-baseline transition-all duration-300"
              />
            </div>
            <div className="pl-14">
              <div className="flex justify-between text-4xl font-bold align-baseline">
                <h5>{productDetail.name}</h5>
                <h5 className="ml-1">{productDetail.price + " €"}</h5>
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
              <div className="text-xl font-bold align-baseline  pt-2">
                {productDetail.stock >= 10 ? (
                  <h5 className="text-green-600">
                    En stock: {productDetail.stock}
                  </h5>
                ) : productDetail.stock > 0 ? (
                  <h5 className="text-yellow-600">
                    Il n'en plus reste que {productDetail.stock} en stock
                  </h5>
                ) : (
                  <h5 className="text-red-600">Hors Stock</h5>
                )}
                <Button
                  onClick={() => addCartItem(productDetail)}
                  className="bg-[#6667ab] w-full h-[20%] p-2 mt-8 rounded-md"
                  color="primary"
                  variant="contained"
                >
                  Ajoutez au panier
                </Button>
              </div>
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    )
}

export default ProductDetail
