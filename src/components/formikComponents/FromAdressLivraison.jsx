import { ErrorMessage, Field, Form, Formik } from "formik"
import { useCallback, useContext, useEffect } from "react"
import InputForm from "./InputForm"
import * as Yup from "yup"
import { Button } from "@mui/material"
import api from "../api"
import AppContext from "../AppContext"

const FormAdressLivraison = ({ show, setShow }) => {
  const { livraisonAdress, setLivraisonAdress } = useContext(AppContext)
  const CommentSchema = Yup.object().shape({
    street: Yup.string().required("Requis"),
    zipCode: Yup.number()
      .positive("Valeur négative non autorisée")
      .integer()
      .nullable(),
    city: Yup.string().nullable(),
  })

  const handleFormSubmit = useCallback((value, { resetForm }) => {
    try {
      setLivraisonAdress(value)
      setShow()
      resetForm()
    } catch (error) {
      resetForm()
    }
  }, [])
  return (
    <div>
      <div className="mt-2 md:mt-0 md:col-span-2">
        <Formik
          validationSchema={CommentSchema}
          initialValues={{
            street: livraisonAdress ? livraisonAdress.street : "",
            zipCode: livraisonAdress ? livraisonAdress.zipCode : null,
            city: livraisonAdress ? livraisonAdress.city : "",
          }}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, isSubmitting, errors, touched, values }) => (
            <Form onSubmit={handleSubmit}>
              <div className="overflow-hidden">
                <div className="  sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Adresse
                      </label>
                      <Field
                        type="text"
                        name="street"
                        placeholder="Adresse"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                        required
                        disabled={!show}
                      />
                      <ErrorMessage
                        name="street"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Ville
                      </label>
                      <Field
                        type="text"
                        name="city"
                        placeholder="City"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                        disabled={!show}
                      />{" "}
                      <ErrorMessage
                        name="city"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <Field
                        type="text"
                        name="zipCode"
                        placeholder="zipCode"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                        disabled={!show}
                      />
                      <ErrorMessage
                        name="zipCode"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                  </div>
                </div>
                {show ? (
                  <div className="px-4 py-3 text-right">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      sx={{ mt: 2 }}
                      color="primary"
                      variant="contained"
                      fullWidth
                      className="bg-[#6667ab] w-1/4 h-[20%] p-2"
                    >
                      Modifier
                    </Button>
                  </div>
                ) : null}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default FormAdressLivraison
