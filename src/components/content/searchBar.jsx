import { Search } from "@mui/icons-material"
import { Input, MenuItem, Select } from "@mui/material"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import AppContext from "../AppContext"
import FilAriane from "./FilAriane"

const SearchBar = () => {
  const [categorie, setCategorie] = useState("")
  const {
    categorieDetail,
    setCategorieDetail,
    productDetail,
    setProductDetail,
  } = useContext(AppContext)
  const router = useRouter()

  const handleChange = (event) => {
    setCategorie(event.target.value)
    setCategorieDetail(event.target.value)
    router.push("/product/" + event.target.value)
  }
  console.log(router)
  return (
    <div>
      <div className="text-center bg-white p-2 shadow-md shadow-black/50 w-full mx-auto flex justify-start ">
        <Select
          sx={{ mx: 2 }}
          value={categorie}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Chaise"}>Chaise</MenuItem>
          <MenuItem value={"Canape"}>Canapé</MenuItem>
          <MenuItem value={"Table"}>Table</MenuItem>
          <MenuItem value={"Lit"}>Lit</MenuItem>
        </Select>
        <div className="mx-auto self-center">
          <Input sx={{ width: "30vw" }} />
          <Search sx={{ ml: 2 }} />
        </div>
      </div>
      <div className="w-full h-16 bg-gray-600 p-4">
        <FilAriane productId={1} />
      </div>
    </div>
  )
}

export default SearchBar
