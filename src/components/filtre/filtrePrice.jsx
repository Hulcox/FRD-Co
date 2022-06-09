import { Input, Slider } from "@mui/material"
import { useContext } from "react"
import AppContext from "../AppContext"

const FilterPrice = () => {
  const { priceFilter, setPriceFilter } = useContext(AppContext)

  const handleChange = (event, newValue) => {
    setPriceFilter(newValue)
  }
  const handleInputMinPrice = (event) => {
    console.log(Number(event.target.value))
    setPriceFilter([Number(event.target.value), priceFilter[1]])
  }
  const handleInputMaxPrice = (event) => {
    console.log(Number(event.target.value))
    setPriceFilter([priceFilter[0], Number(event.target.value)])
  }

  console.log(priceFilter)

  return (
    <div className="m-2 my-5">
      <h3 className="text-lg font-bold my-1">Prix</h3>
      <div className="m-2">
        <Slider
          min={0}
          max={1000}
          marks
          step={100}
          value={priceFilter}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
        <div className="flex justify-between">
          <Input
            value={priceFilter[0]}
            size="small"
            onChange={handleInputMinPrice}
            inputProps={{
              step: 50,
              min: 0,
              type: "number",
            }}
            sx={{ flexBasis: "30%" }}
          />
          <Input
            value={priceFilter[1]}
            size="small"
            onChange={handleInputMaxPrice}
            inputProps={{
              step: 50,
              max: 1000,
              type: "number",
            }}
            sx={{ flexBasis: "30%" }}
          />
        </div>
      </div>
    </div>
  )
}

export default FilterPrice
