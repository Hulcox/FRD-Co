import { Search } from "@mui/icons-material"
import {
  Autocomplete,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { useRouter } from "next/router"
import { useContext } from "react"
import AppContext from "../AppContext"
import FilterByTri from "./filtreTri"

const SearchBar = () => {
  const { categorieDetail, setCategorieDetail, product, categorie } =
    useContext(AppContext)
  const router = useRouter()

  const handleChange = (event) => {
    setCategorieDetail(event.target.value)
    if (event.target.value == "all") router.push("/products")
    else router.push("/products?categorie=" + event.target.value)
  }

  const searchProduct = (event, newValue) => {
    router.push({
      pathname: "/products/" + newValue.name,
      query: { categorie: newValue.category, id: newValue.id },
    })
  }

  return (
    <>
      <div className="text-center bg-white p-2 shadow-2xl w-full mx-auto flex justify-start rounded-lg">
        <div className="self-center mx-2 min-w-[7%]">
          <FormControl fullWidth>
            <InputLabel>Catégorie : </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categorieDetail}
              label="Catégorie : "
              onChange={handleChange}
            >
              <MenuItem value={"all"}>{"All"}</MenuItem>
              {categorie.map((option, index) => (
                <MenuItem value={option.name}>{option.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="mx-auto self-center">
          <Autocomplete
            onChange={(event, newValue) => {
              searchProduct(event, newValue)
            }}
            disablePortal
            options={product}
            getOptionLabel={(option) => option.name}
            sx={{ width: "30vw" }}
            renderInput={(params) => (
              <div className="flex items-center">
                <TextField {...params} variant="standard" />
                <IconButton>
                  <Search sx={{ ml: 2 }} />
                </IconButton>
              </div>
            )}
          />
        </div>
        <FilterByTri />
      </div>
    </>
  )
}

export default SearchBar
