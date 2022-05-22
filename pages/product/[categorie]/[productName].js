import FooterPage from "../../../src/components/footer/footer"
import HeaderNav from "../../../src/components/header/header"
import { useRouter } from "next/router"
import FilAriane from "../../../src/components/content/FilAriane"
import { Divider, Rating, Skeleton, Typography } from "@mui/material"
import AppContext from "../../../src/components/AppContext"
import { useContext, useState } from "react"

const ProductDetail = () => {
  const { productDetail, setProductDetail } = useContext(AppContext)
  const [value, setValue] = useState(2)

  const router = useRouter()
  const { productName } = router.query

  return (
    <div className={"Product"}>
      <HeaderNav />
      <div className="m-[2vw] my-[10vh] w-[96vw] h-screen">
        <FilAriane productId={productID} />
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
          <div className=" pl-14">
            <div className="flex justify-between text-4xl font-bold align-baseline">
              <h5>{productDetail}</h5>
              <h5>{"99" + " €"}</h5>
            </div>
            <Divider sx={{ mt: 2 }} />
            <div className="align-baseline pt-10">
              <p>
                Mensarum enim voragines et varias voluptatum inlecebras, ne
                longius progrediar, praetermitto illuc transiturus quod quidam
                per ampla spatia urbis subversasque silices sine periculi metu
                properantes equos velut publicos signatis quod dicitur calceis
                agitant, familiarium agmina tamquam praedatorios globos post
                terga trahentes ne Sannione quidem, ut ait comicus, domi
                relicto. quos imitatae matronae complures opertis capitibus et
                basternis per latera civitatis cuncta discurrunt.
              </p>
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
              <h5>En stock: 15</h5>
              <button className="bg-[#119DA4] text-gray-700 w-full h-[20%] p-2 mt-8 rounded-md hover:bg-[#129299] hover:text-white transition-all duration-300">
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
