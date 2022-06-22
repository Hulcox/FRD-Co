import { Button, Divider } from "@mui/material"
import { useContext } from "react"
import AppContext from "../AppContext"
import CartItem from "../content/cartItem"
import Swal from "sweetalert2"
import { useRouter } from "next/router"
import withReactContent from "sweetalert2-react-content" // SweetAlertForReact doesn't work

const Commande = ({ step, handleClick }) => {
  const { cart, totalCart, user } = useContext(AppContext)
  const router = useRouter()

  const verification = () => {
    console.log(user)
    if (user) {
      handleClick(1)
    } else
      Swal.fire({
        icon: "error",
        title: "Attention",
        text: "Vous n'etes pas connecter ?",
        showCancelButton: true,
        cancelButtonText: "Annuler",
        confirmButtonText: "connexion",
        footer: '<a href="/login/sign-in">Aller a la page de connexion</a>',
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login/sign-in")
        }
      })
  }
  return (
    <div className="flex justify-between">
      <div className="basis-[60%]">
        <h5 className="text-xl font-bold pb-8">Verification de la commande</h5>
        {cart.map(({ quantityOnCart, price, name, id, image1 }, key) => (
          <CartItem
            key={key}
            img={image1}
            id={id}
            name={name}
            price={price}
            quantity={quantityOnCart}
            editable
          />
        ))}
        {cart.length == 0 ? <p>Votre panier est vide</p> : null}
      </div>
      <div className="basis-[25%] mt-14">
        <Divider sx={{ my: 2 }} />
        <div className="flex justify-between">
          <h5 className="text-xl font-bold pb-4">Sous total</h5>
          <h5 className="text-xl pb-4">{totalCart + " €"}</h5>
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
          <h5 className="text-xl pb-4">{totalCart + " €"}</h5>
        </div>

        <Button
          onClick={verification}
          className="bg-[#6667ab] w-full h-[20%] p-2 mt-8 rounded-md"
          color="primary"
          variant="contained"
          disabled={cart.length == 0}
        >
          Completez la commande
        </Button>
      </div>
    </div>
  )
}

export default Commande
