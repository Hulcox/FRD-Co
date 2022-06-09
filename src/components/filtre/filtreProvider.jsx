import { useContext } from "react"
import AppContext from "../AppContext"
import FilterColors from "./filtreColors"
import FilterNotation from "./filtreNotation"
import FilterPrice from "./filtrePrice"

const FilterProvider = () => {
  const { colorList } = useContext(AppContext)
  return (
    <div>
      <FilterPrice />
      <FilterNotation />
      <FilterColors colors={colorList} />
    </div>
  )
}

export default FilterProvider
