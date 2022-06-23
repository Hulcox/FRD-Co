import { ArrowBack } from "@mui/icons-material"
import { Button, Divider } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import api from "../api"
import AppContext from "../AppContext"
import FormAdressLivraison from "../formikComponents/FromAdressLivraison"

const Facturation = ({ step, handleClick }) => {
  const { totalCart, user, livraisonAdress } = useContext(AppContext)
  const [edit, setEdit] = useState(false)
  const verification = () => {
    if (livraisonAdress) {
      handleClick(2)
    } else
      Swal.fire({
        icon: "error",
        title: "Attention",
        text: "Pas d'adresse de livraison selectionner",
      })
  }
  const handleChangeLivraison = () => {
    setEdit(!edit)
  }
  return (
    <div>
      <Button
        variant="contained"
        startIcon={<ArrowBack />}
        onClick={() => handleClick(0)}
        className="my-4 bg-[#6667ab]"
      >
        Retour vers le paiement
      </Button>
      <div className="flex justify-between">
        <div className="basis-[60%]">
          <h5 className="text-xl font-bold pb-8">
            Verification de l'addresse de livraison et de facturation
          </h5>
          <Divider sx={{ my: 2 }} />
          <div className="my-4">
            <h5 className="text-xl font-bold">Adresse de livraison</h5>
            <FormAdressLivraison show={edit} setShow={setEdit} />
            <button
              className="mt-4 text-blue-700"
              onClick={handleChangeLivraison}
            >
              Changer l'adresse de livraison
            </button>
          </div>
          <Divider sx={{ my: 2 }} />
          <div className="my-4">
            <h5 className="text-xl font-bold">Adresse de facturation</h5>
            <h5 className="text-lg "> {user.street}</h5>
            <h5 className="text-lg ">
              {user.zipcode} {user.city}
            </h5>
            <h5 className="text-lg ">
              {user.name} {user.lastName}
            </h5>
          </div>
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
            className="bg-[#6667ab] w-full h-[10%] p-2 mt-8 rounded-md "
            color="primary"
            variant="contained"
          >
            Commander et Payer
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Facturation
