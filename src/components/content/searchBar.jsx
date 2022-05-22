import { Search } from "@mui/icons-material"
import { Input, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import FilAriane from "./FilAriane"

const SearchBar = () => {
  const [age, setAge] = useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <div>
      <div className="text-center bg-white p-2 shadow-md shadow-black/50 w-full mx-auto flex justify-start ">
        <Select sx={{ mx: 2 }} value={age} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>Salon</MenuItem>
          <MenuItem value={1}>Cuisine</MenuItem>
          <MenuItem value={2}>Chambre</MenuItem>
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
