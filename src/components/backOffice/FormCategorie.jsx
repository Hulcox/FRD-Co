import { Button } from "@mui/material"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useCallback } from "react"
import api from "../api"
import InputForm from "../formikComponents/InputForm"

const FormCategorie = ({ edit, categorieName, categorieId }) => {
  const handleFormSubmit = useCallback((value, { resetForm }) => {
    try {
      edit
        ? api
            .put("/categorie/save", {
              //put doesn't work because the route are not added into the api at the 26/06/2022
              id: categorieId,
              name: value.name.toLowerCase(),
            })
            .then(() => {
              resetForm()
            })
            .catch((error) => {
              console.log(error)
            })
        : api
            .post("/categorie/save", {
              id: categorieId,
              name: value.name.toLowerCase(),
            })
            .then(() => {
              resetForm()
            })
            .catch((error) => {
              console.log(error)
            })
    } catch (error) {
      resetForm()
    }
  }, [])

  return (
    <Formik
      initialValues={{
        name: categorieName ? categorieName : "",
      }}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, isSubmitting, errors, touched, values }) => (
        <Form onSubmit={handleSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-3 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Nom de la catégorie
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Nom de la catégorie"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    as={InputForm}
                    required
                  />
                  <ErrorMessage
                    name="name"
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
                Submit
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormCategorie
