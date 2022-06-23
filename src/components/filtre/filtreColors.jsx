import { Check } from "@mui/icons-material"
import { Box, Collapse, Fade } from "@mui/material"
import { useContext } from "react"
import AppContext from "../AppContext"

const FilterColors = ({ colors }) => {
  const { colorFilter, setColorFilter } = useContext(AppContext)

  const handleClick = (value) => {
    if (value == colorFilter) {
      setColorFilter(null)
    } else {
      setColorFilter(value)
    }
  }
  return (
    <div className="m-2 my-5">
      <h3 className="text-lg font-bold my-1">Couleur</h3>
      <div className="flex flex-wrap mx-[20%] justify-between">
        {colors.map((color) => (
          <Box
            onClick={() => handleClick(color)}
            sx={{
              width: 30,
              height: 30,
              borderRadius: 25,
              m: "10px",
              backgroundColor: color,
              boxShadow: 4,
              border: "1px",
              cursor: "pointer",
            }}
          >
            {colorFilter == color ? (
              <>
                <div className=" w-full h-full rounded-full text-white relative z-10 flex justify-center items-center">
                  <Fade orientation="horizontal" in={true} timeout={800}>
                    <Check
                      fontSize="medium"
                      className={color == "white" ? "text-black" : ""}
                    />
                  </Fade>
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
