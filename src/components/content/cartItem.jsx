import { Add, Clear, Remove } from "@mui/icons-material"
import { Divider, IconButton, Skeleton } from "@mui/material"

const CartItem = ({ name, price, quantity, editable }) => {
  return (
    <>
      <div className="flex">
        <div>
          <Skeleton
            variant="rectangular"
            width={100}
            height={100}
            sx={{ mb: 2 }}
          />
        </div>
        <div className="flex flex-col justify-around ml-4 w-full">
          <div className="flex justify-between">
            <h6 className="text-xl font-bold">{name}</h6>
            <h6 className="text-xl font-bold">{price} €</h6>
          </div>
          {editable ? (
            <div className="flex justify-between w-full h-10">
              <div>
                <IconButton color="error">
                  <Clear />
                </IconButton>
              </div>
              <div>
                <IconButton color="success">
                  <Add />
                </IconButton>
                {quantity}
                <IconButton color="error">
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
