import { Check } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useContext } from "react"
import AppContext from "../AppContext"

const FilterColors = ({ colors }) => {
  const { colorFilter, setColorFilter } = useContext(AppContext)

  const handleClick = (value) => {
    console.log(value)
    if (value == colorFilter) {
      setColorFilter(null)
    } else {
      setColorFilter(value)
    }
  }
  return (
    <div className="m-2 my-5">
      <h3 className="text-lg font-bold my-1">Couleur</h3>
      <div className="flex flex-wrap">
        {colors.map((color) => (
          <Box
            onClick={() => handleClick(color)}
            sx={{
              width: 35,
              height: 35,
              borderRadius: 25,
              m: "5px",
              backgroundColor: color,
              boxShadow: 4,
              border: "1px",
              cursor: "pointer",
            }}
          >
            {colorFilter == color ? (
              <>
                <div className="bg-slate-700 opacity-30 w-full h-full rounded-full text-white relative z-10 flex justify-center items-center">
                  <Check fontSize="medium" />
                </div>
              </>
            ) : null}
          </Box>
        ))}
      </div>
    </div>
  )
}

export default FilterColors
