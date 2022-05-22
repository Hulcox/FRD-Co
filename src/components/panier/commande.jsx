import { Divider } from "@mui/material"
import CartItem from "../content/cartItem"

const Commande = ({ step, handleClick }) => {
  return (
    <div className="flex justify-between">
      <div className="basis-[60%]">
        <h5 className="text-xl font-bold pb-8">Verification de la commande</h5>
        <CartItem name={"moldativia"} price={99} quantity={2} editable />
        <CartItem name={"moldativia"} price={99} quantity={1} editable />
        <CartItem name={"moldativia"} price={99} quantity={1} editable />
        <CartItem name={"moldativia"} price={99} quantity={1} editable />
      </div>
      <div className="basis-[25%] mt-14">
        <Divider sx={{ my: 2 }} />
        <div className="flex justify-between">
          <h5 className="text-xl font-bold pb-4">Sous total</h5>
          <h5 className="text-xl pb-4">{"€€"}</h5>
        </div>
        <div className="flex justify-between">
          <h5 className="text-xl font-bold pb-4">Taxes</h5>
          <h5 className="text-xl pb-4">TAV doesn't exist</h5>
        </div>
        <div className="flex justify-between">
          <h5 className="text-xl font-bold pb-4">Fraie de livraison</h5>
          <h5 className="text-xl font-bold pb-4">FREE</h5>
        </div>
        <Divider />
        <div className="flex justify-between pt-2">
          <h5 className="text-xl font-bold pb-4">Total</h5>
          <h5 className="text-xl pb-4">{"€€"}</h5>
        </div>
        <button
          className="bg-[#119DA4] text-gray-700 w-full h-[10%] p-2 mt-8 rounded-md hover:bg-[#129299] hover:text-white transition-all duration-300"
          onClick={() => handleClick(1)}
        >
          Completez la commande
        </button>
      </div>
    </div>
  )
}

export default Commande
