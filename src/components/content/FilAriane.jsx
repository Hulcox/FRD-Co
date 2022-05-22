import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import { useContext } from "react"
import AppContext from "../AppContext"
import { useRouter } from "next/router"

const FilAriane = (productId, step) => {
  const {
    categorieDetail,
    setCategorieDetail,
    productDetail,
    setProductDetail,
  } = useContext(AppContext)

  const router = useRouter()

  console.log(categorieDetail, productDetail)

  const handleClick = (event) => {
    event.preventDefault()
    router.push(event.target.href)
    console.info(event.target.href, event)
  }
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/product">
          Produit
        </Link>
        <Link underline="hover" color="inherit" href="/product">
          {categorieDetail}
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href={"/product/" + productId}
          aria-current="page"
        >
          {productDetail}
        </Link>
      </Breadcrumbs>
    </div>
  )
}

export default FilAriane
