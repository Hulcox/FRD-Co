import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import { useContext, useEffect, useState } from "react"
import AppContext from "../AppContext"
import { useRouter } from "next/router"

const FilAriane = (productName, step) => {
  const {
    categorieDetail,
    setCategorieDetail,
    productDetail,
    setProductDetail,
  } = useContext(AppContext)
  const router = useRouter()
  const [route, setRoute] = useState([])

  useEffect(() => {
    console.log(route)
    const url = router.asPath.slice(1).split("/")
    setRoute(url)
  }, [])

  const handleClick = (event) => {
    event.preventDefault()
    if (event.target.id == 0) {
      router.push(`/${route[0]}`)
    } else if (event.target.id == 1) {
      router.push(`/${route[0]}/${route[1]}`)
    } else if (event.target.id == 2) {
      router.push(`/${route[0]}/${route[1]}/${route[2]}`)
    }
    console.info(event.target.id)
  }
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {route.map((elm, i) => (
          <Link underline="hover" color="inherit" href={""} id={i}>
            {elm}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  )
}

export default FilAriane
