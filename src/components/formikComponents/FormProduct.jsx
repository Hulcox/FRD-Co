import { Button } from "@mui/material"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useCallback, useContext } from "react"
import * as Yup from "yup"
import AppContext from "../AppContext"
import InputForm from "./InputForm"

const FormProduct = ({ data }) => {
  const {} = useContext(AppContext)

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ")
  }

  const CommentSchema = Yup.object().shape({
    name: Yup.string()
      .required(" Required")
      .min(1, "Please enter the Name of the product"),
    description: Yup.string()
      .required(" Required")
      .min(1, "Please enter the Description of the product"),
    category: Yup.string()
      .required(" Required")
      .min(1, "Please enter the Catégory of the product"),
    images: Yup.string().required("Required"),
    price: Yup.number()
      .positive("Negative value is not allowed")
      .integer()
      .nullable(),
    rate: Yup.number()
      .required()
      .positive("Negative value is not allowed")
      .integer()
      .max(5, "Max notation 5"),
    stock: Yup.number()
      .required()
      .positive("Negative value is not allowed")
      .integer(),
  })

  const handleFormSubmit = useCallback((value, { resetForm }) => {
    console.log("NTM", value)
    resetForm()
  }, [])

  return (
    <div>
      <div className="mt-2 md:mt-0 md:col-span-2">
        <Formik
          validationSchema={CommentSchema}
          initialValues={{
            name: "",
            description: "",
            category: "",
            images: "",
            color: "#rrggbb",
            price: 0,
            rate: 0,
            stock: 0,
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
                        Nom du produit
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Nom du produit"
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <Field
                        type="text"
                        name="description"
                        placeholder="Description"
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                      />
                      <ErrorMessage
                        name="description"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Catégorie
                      </label>
                      <Field
                        type="text"
                        name="category"
                        placeholder="Catégorie"
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                      />
                      <ErrorMessage
                        name="category"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>

                    {/*<div className="col-span-12 sm:col-span-12 lg:col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Couleur
                      </label>
                      <Field
                        type="color"
                        name="color"
                        placeholder="Couleur"
                        className="mt-1 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                        required
                      />
                      <ErrorMessage
                        name="color"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                        </div>*/}

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Prix
                      </label>
                      <Field
                        type="number"
                        name="price"
                        placeholder="Prix"
                        min={0}
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                      />{" "}
                      <ErrorMessage
                        name="price"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Notation
                      </label>
                      <Field
                        type="number"
                        name="rate"
                        placeholder="Notation"
                        min={0}
                        max={5}
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                      />
                      <ErrorMessage
                        name="rate"
                        render={(msg) => (
                          <div className="text-red-500 text-sm">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Stock
                      </label>
                      <Field
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        min={0}
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        as={InputForm}
                      />
                      <ErrorMessage
                        name="stock"
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
                  >
                    Submit
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

export default FormProduct
