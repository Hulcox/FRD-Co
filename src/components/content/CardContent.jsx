import {
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Skeleton,
} from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

const CardDetail = ({
  name,
  description,
  id,
  rating,
  image,
  price,
  categorie,
}) => {
  const router = useRouter()
  const [value, setValue] = useState(rating)

  const handleClick = () => {
    if (categorie) router.push("/product/" + categorie + "/" + name)
    else router.push("/product/all/" + name)
  }

  return (
    <div>
      {" "}
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            {image ? (
              <Image
                src={image}
                alt="cardContent"
                width={300}
                height={210}
                sx={{ mx: "auto" }}
              />
            ) : (
              <Skeleton
                variant="rectangular"
                width={300}
                height={210}
                sx={{ mx: "auto" }}
              />
            )}
            <div className="flex justify-between">
              <h5 className="text-xl font-bold align-baseline">{name}</h5>
              <h5 className="text-xl font-bold align-baseline">
                {price + " €"}
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
