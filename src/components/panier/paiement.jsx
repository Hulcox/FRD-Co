import { ArrowBack } from "@mui/icons-material"
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Input,
  Radio,
} from "@mui/material"
import { useContext, useState } from "react"
import CartItem from "../content/cartItem"
import logoCb from "../../../public/images/logo_cb.jpg"
import logoVisa from "../../../public/images/logo_visa.png"
import Image from "next/image"
import AppContext from "../AppContext"
import Swal from "sweetalert2"

const Paiement = ({ step, handleClick }) => {
  const { cart, totalCart, creditCard } = useContext(AppContext)
  const [selectedValue, setSelectedValue] = useState("a")

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const verification = () => {
    console.log(creditCard)
    if (creditCard) {
      handleClick(2)
    } else
      Swal.fire({
        icon: "error",
        title: "Attention",
        text: "Pas de carte de moyen de payement selectionner",
        showCancelButton: true,
        cancelButtonText: "Annuler",
      })
  }

  return (
    <div className="flex justify-between">
      <div className="basis-[50%] mt-8">
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => handleClick(0)}
          className="mb-4 bg-[#6667ab]"
        >
          Retour vers le Panier
        </Button>
        <div className="mt-4">
          <Divider />
          <div className="flex justify-between my-4">
            <div className="flex items-center">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <h1 className="text-lg ml-4 ">Carte bancaire enregistrée</h1>
            </div>
            <Image src={logoVisa} alt="fond" width={120} height={30} />
          </div>
          <Divider />
          <div className=" my-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                <h1 className="text-lg ml-4 ">Nouvelle carte bancaire</h1>
              </div>
              <Image src={logoCb} alt="fond" width={300} height={60} />
            </div>
            <div className=" flex flex-wrap ml-14 mt-8">
              <Input
                type="text"
                placeholder="Numéro de carte"
                sx={{ width: "60%", mr: 20 }}
              />
              <Input
                type="date"
                placeholder="Date de Validité"
                sx={{ width: "35%", mr: 10, mt: 4 }}
              />
              <Input
                type="text"
                placeholder="Cryptogram"
                sx={{ width: "15%", mr: 20, mt: 4 }}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Mémoriser la carte"
                  sx={{ mt: 4 }}
                />
              </FormGroup>
            </div>
          </div>
          <Divider />
          <div>
            <div className="flex items-center my-4">
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-buttons"
                inputProps={{ "aria-label": "C" }}
              />
              <h1 className="text-lg ml-4 ">Autre moyen de paiement</h1>
            </div>
            <Button
              variant="contained"
              className="mb-4 bg-[#6667ab]"
              disabled={selectedValue !== "c"}
            >
              Paiement via Paypal
            </Button>
            <p className="mt-4">
              Avec Paypal reférence en matière de paiement sécurisé sur
              internet, payer sans communiquer vos données bancaire
            </p>
          </div>
          <Divider sx={{ mt: 4 }} />
          <div className="my-4">
            <h5 className="text-xl font-bold">
              Adresse de livraison Enregistrée
            </h5>
            <h5 className="text-lg ">CFA Sup de Vinci</h5>
            <h5 className="text-lg "> 6-12 Av. Léonard de Vinci </h5>
            <h5 className="text-lg ">92400 Courbevoie</h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between basis-[30%]">
        <div className="basis-[30%]">
          <h5 className="text-xl font-bold pb-8">Mon Panier</h5>
          {cart.map(({ quantityOnCart, price, name, id, image1 }, key) => (
            <CartItem
              key={key}
              img={image1}
              id={id}
              name={name}
              price={price}
              quantity={quantityOnCart}
            />
          ))}
          {cart.length == 0 ? <p>Votre panier est vide</p> : null}
        </div>
        <div className="basis-[30%] my-2">
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
          >
            Completez la commande
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Paiement
