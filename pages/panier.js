import {
  CircularProgress,
  Divider,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import AppContext from "../src/components/AppContext"
import HeaderNav from "../src/components/header/header"
import Commande from "../src/components/panier/commande"
import Facturation from "../src/components/panier/facturation"
import Paiement from "../src/components/panier/paiement"

const CartPage = () => {
  const { user } = useContext(AppContext)
  const router = useRouter()
  const [step, setStep] = useState(0)

  const steps = [
    "Verification Commande",
    "Paiement",
    "Addresse de livraison et de facturation",
    "Finalisation",
  ]

  const handleClick = (value) => {
    setStep(value)
  }

  useEffect(() => {
    if (step == 3) setTimeout(redirection, 10000)
  }, [step])

  const redirection = () => {
    router.push("/home")
  }

  return (
    <div>
      <HeaderNav />
      <div className="mt-20 m-12 p-12 bg-gray-200">
        <h5 className="text-xl font-bold pb-8">Mon Panier</h5>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {step == 0 ? (
          <Commande handleClick={handleClick} />
        ) : step == 1 ? (
          <Paiement handleClick={handleClick} />
        ) : step == 2 ? (
          <Facturation handleClick={handleClick} />
        ) : (
          <>
            <div className="flex justify-center w-full h-1/2 mx-auto mt-10">
              <h5 className="text-xl font-bold">
                Felicitation votre commande est en cours de livraison
              </h5>
            </div>
            <div className="mt-20 flex flex-col items-center">
              <CircularProgress />
              <p className="mt-4">Retour à l'acceuil</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartPage
