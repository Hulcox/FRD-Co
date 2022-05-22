import { ArrowBack } from "@mui/icons-material"
import { Button, Divider } from "@mui/material"
import { useEffect } from "react"

const Facturation = ({ step, handleClick }) => {
  return (
    <div>
      <Button
        variant="contained"
        startIcon={<ArrowBack />}
        onClick={() => handleClick(1)}
        className="my-4"
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
            <h5 className="text-lg ">CFA Sup de Vinci</h5>
            <h5 className="text-lg "> 6-12 Av. Léonard de Vinci </h5>
            <h5 className="text-lg ">92400 Courbevoie</h5>
            <button className="mt-4 text-blue-700">
              Changer l'adresse de livraison
            </button>
          </div>
          <Divider sx={{ my: 2 }} />
          <div className="my-4">
            <h5 className="text-xl font-bold">Adresse de facturation</h5>
            <h5 className="text-lg ">CFA Sup de Vinci</h5>
            <h5 className="text-lg "> 6-12 Av. Léonard de Vinci </h5>
            <h5 className="text-lg ">92400 Courbevoie</h5>
            <h5 className="text-lg ">Bidault Romain</h5>
            <h5 className="text-lg ">07 56 20 10 23</h5>
            <button className="mt-4 text-blue-700">
              Changer l'adresse de facturation
            </button>
          </div>
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
            onClick={() => handleClick(3)}
          >
            Commander et Payer
          </button>
        </div>
      </div>
    </div>
  )
}

export default Facturation
