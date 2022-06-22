import { Add, Clear, Remove } from "@mui/icons-material"
import { Divider, IconButton, Skeleton } from "@mui/material"
import { useContext } from "react"
import AppContext from "../AppContext"

const CartItem = ({ name, price, quantity, id, img, editable }) => {
  const { editCartItem, removeCartItem } = useContext(AppContext)
  return (
    <>
      <div className="flex">
        <div>
          {img ? (
            <img
              className="m-auto max-h-[250px] max-w-[300px] align-baseline"
              src={img}
              alt={"Product picture: " + name}
            />
          ) : (
            <Skeleton
              variant="rectangular"
              width={100}
              height={100}
              sx={{ mb: 2 }}
            />
          )}
        </div>
        <div className="flex flex-col justify-around ml-4 w-full">
          <div className="flex justify-between">
            <h6 className="text-xl font-bold">{name}</h6>
            <h6 className="text-xl font-bold">{price} €</h6>
          </div>
          {editable ? (
            <div className="flex justify-between w-full h-10">
              <div>
                <IconButton
                  color="error"
                  onClick={() => {
                    removeCartItem(id)
                  }}
                >
                  <Clear />
                </IconButton>
              </div>
              <div>
                <IconButton
                  color="success"
                  onClick={() => {
                    editCartItem(id, 1)
                  }}
                >
                  <Add />
                </IconButton>
                {quantity}
                <IconButton
                  color="error"
                  onClick={() => {
                    editCartItem(id, -1)
                  }}
                >
                  <Remove />
                </IconButton>
              </div>
            </div>
          ) : (
            <div className="flex justify-between w-full h-10">
              <div>{quantity}</div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartItem
