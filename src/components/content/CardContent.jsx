import {
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Skeleton,
} from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"

const CardDetail = ({ name, description, id, rating }) => {
  const router = useRouter()
  const [value, setValue] = useState(rating)

  const handleClick = () => {
    router.push("/product/Salon/" + id)
  }

  return (
    <div>
      {" "}
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Skeleton
              variant="rectangular"
              width={250}
              height={210}
              sx={{ mx: "auto" }}
            />
            <div className="flex justify-between">
              <h5 className="text-xl font-bold align-baseline">{name}</h5>
              <h5 className="text-xl font-bold align-baseline">
                {"99" + " €"}
              </h5>
            </div>
            <p>{description}</p>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default CardDetail
