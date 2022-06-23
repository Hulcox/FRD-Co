import { Rating } from "@mui/material"
import { useContext } from "react"
import AppContext from "../AppContext"

const FilterNotation = () => {
  const { noteFilter, setNoteFilter } = useContext(AppContext)

  const handleClick = (value) => {
    if (value == noteFilter) {
      setNoteFilter(null)
    } else {
      setNoteFilter(value)
    }
  }
  return (
    <div className="m-2 my-5">
      <h3 className="text-lg font-bold my-1">Note produit</h3>
      <div className="flex flex-col-reverse">
        {[...Array(5)].map((x, i) => (
          <div
            className={
              noteFilter == i + 1
                ? "text-red-600 cursor-pointer"
                : "hover:text-red-400 cursor-pointer"
            }
            onClick={() => handleClick(i + 1)}
          >
            <Rating value={i + 1} readOnly />
            <span className="align-top">{i + 1} étoile</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterNotation
