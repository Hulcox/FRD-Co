import { Search } from "@mui/icons-material"
import { Input, Select } from "@mui/material"

const SearchBar = () => {
  return (
    <div className="text-center bg-white p-2 rounded-lg m-2 shadow-md shadow-black/50 w-1/2 mx-auto flex justify-around items-center">
      <Select sx={{ mx: 2 }} />
      <div>
        <Input sx={{ width: "30vw" }} />
        <Search sx={{ ml: 2 }} />
      </div>
    </div>
  )
}

export default SearchBar
