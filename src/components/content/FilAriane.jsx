import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import { useContext, useEffect, useState } from "react"
import AppContext from "../AppContext"
import { useRouter } from "next/router"

const FilAriane = () => {
  const { setCategorieDetail } = useContext(AppContext)
  const router = useRouter()

  const [url, setUrl] = useState(["products"])
  const { productName, categorie } = router.query

  useEffect(() => {
    console.log(router)
    if (categorie && productName) {
      setUrl(["products", categorie, productName])
      setCategorieDetail(categorie)
    } else if (categorie) {
      setUrl(["products", categorie])
      setCategorieDetail(categorie)
    } else {
      setUrl(["products"])
      setCategorieDetail("all")
    }
  }, [categorie, productName])

  const handleClick = (event) => {
    event.preventDefault()
    if (event.target.id == 0) {
      router.push(`/${url[0]}`)
    } else if (event.target.id == 1) {
      router.push(`/${url[0]}?categorie=${url[1]}`)
    } else if (event.target.id == 2) {
      router.push(`/${url[0]}/${url[2]}?categorie=${url[1]}&id=${url[3]}`)
    }
    console.info(event.target.id)
  }
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {url.map((elm, i) => (
          <Link underline="hover" color="inherit" href={""} id={i}>
            {elm}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  )
}

export default FilAriane
