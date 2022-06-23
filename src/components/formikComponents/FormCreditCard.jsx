import { Button } from "@mui/material"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useRouter } from "next/router"
import { useCallback, useContext } from "react"
import * as Yup from "yup"
import AppContext from "../AppContext"
import InputForm from "./InputForm"

const FormCreditCard = () => {
  const CommentSchema = Yup.object().shape({
    nbCreditCard: Yup.string()
      .max(16, "Numéro de carte ne peux pas dépasser 16 chiffre")
      .required("Numéro de carte requis"),
    expirationDate: Yup.date().required("Date de Validité requis"),
    cryptogram: Yup.string()
      .min(3, "Minimun 3 chiffre")
      .max(4, "Maximun 4 chiffre")
      .required("Cryptogram / CVC requis"),
  })

  const handleFormSubmit = useCallback((value, { resetForm }) => {
    try {
      // route to change password doesn't existe
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
            nbCreditCard: "",
            expirationDate: "",
            cryptogram: "",
          }}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, isSubmitting, errors, touched, values }) => (
            <Form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-5">
                      <label className="block text-sm font-medium text-gray-700">
                        Numéro de carte
                      </label>
                      <Field
                        type="text"
                        placeholder="Numéro de carte"
                        name="nbCreditCard"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                        required
                      />
                      <ErrorMessage
                        name="nbCreditCard"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Date de Validité
                      </label>
                      <Field
                        type="date"
                        placeholder="Date de Validité"
                        name="expirationDate"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                        required
                      />
                      <ErrorMessage
                        name="password"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Cryptogram
                      </label>
                      <Field
                        type="text"
                        placeholder="Cryptogram"
                        name="cryptogram"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                        required
                      />
                      <ErrorMessage
                        name="confirm_password"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    sx={{ mt: 2 }}
                    color="primary"
                    variant="contained"
                    fullWidth
                    className="bg-[#6667ab] w-full h-[20%] p-2"
                  >
                    Envoyer
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default FormCreditCard
