import { Cancel } from "@mui/icons-material"
import { Button, IconButton, InputAdornment } from "@mui/material"
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik"
import { useCallback, useContext, useEffect } from "react"
import * as Yup from "yup"
import api from "../api"
import AppContext from "../AppContext"
import ProductImages from "../content/ProductImages"
import InputForm from "./InputForm"

const CommentSchema = Yup.object().shape({
  name: Yup.string()
    .required("Requis")
    .min(1, "Please enter the Name of the product"),
  description: Yup.string()
    .required("Requis")
    .min(1, "Please enter the Description of the product"),
  price: Yup.number().positive("Negative value is not allowed").required(),
  rate: Yup.number()
    .positive("Negative value is not allowed")
    .max(5, "Note maximun 5 étoiles")
    .integer()
    .nullable(),
  stock: Yup.number().positive("Negative value is not allowed").integer(),
  images: Yup.array().length(4, "Maximun 4 images").max(4, "Maximun 4 images"),
})

const FormProduct = ({ edit, productDetails }) => {
  const { categorie, setCategorie } = useContext(AppContext)
  const handleFormSubmit = useCallback((value, { resetForm }) => {
    edit
      ? api
          .put("/admin/products/save", {
            //put doesn't work because the route are not added into the api at the 26/06/2022
            id: productDetails.id,
            category: value.category,
            color: value.color,
            description: value.description,
            name: value.name,
            price: value.price,
            rate: value.rate,
            stock: value.stock,
            image1: value.images[0],
            image2: value.images[1],
            image3: value.images[2],
            image4: value.images[3],
          })
          .then(() => {
            resetForm()
          })
          .catch((error) => {
            console.log(error)
          })
      : api
          .post("/admin/products/save", {
            category: value.category,
            color: value.color,
            description: value.description,
            name: value.name,
            price: value.price,
            rate: value.rate,
            stock: value.stock,
            image1: value.images[0],
            image2: value.images[1],
            image3: value.images[2],
            image4: value.images[3],
          })
          .then(() => {
            resetForm()
          })
          .catch((error) => {
            console.log(error)
          })
  }, [])

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => {
        console.log(res.data)
        setCategorie(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <div className="mt-2 md:mt-0 md:col-span-2">
        <Formik
          validationSchema={CommentSchema}
          initialValues={{
            name: productDetails ? productDetails.name : "",
            description: productDetails ? productDetails.description : "",
            category: productDetails ? productDetails.category : "",
            color: productDetails ? productDetails.color : "#000000",
            price: productDetails ? productDetails.price : 0,
            rate: productDetails ? productDetails.rate : 0,
            stock: productDetails ? productDetails.stock : 0,
            images: productDetails
              ? [
                  productDetails.image1,
                  productDetails.image2,
                  productDetails.image3,
                  productDetails.image4,
                ]
              : [],
            imageSelected: "",
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
                        as="select"
                        id="category"
                        name="category"
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
                      >
                        {categorie.map(({ name }, key) => (
                          <option value={name} key={key} className="text-black">
                            {name}
                          </option>
                        ))}
                      </Field>
                    </div>

                    <div className="col-span-12 sm:col-span-12 lg:col-span-1">
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
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Image
                      </label>

                      <FieldArray
                        name="images"
                        render={(imageArray) => (
                          <>
                            <div className="flex ">
                              <Field
                                type="url"
                                name="imageSelected"
                                placeholder="Image"
                                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                as={InputForm}
                              />

                              <Button
                                variant="contained"
                                onClick={() =>
                                  values.images.length < 4
                                    ? imageArray.push(values.imageSelected)
                                    : null
                                }
                                className="bg-[#6667ab] h-[20%] ml-2 self-center"
                              >
                                Add Image
                              </Button>
                            </div>
                            <div className="flex mt-2">
                              {values.images.map((img, key) => (
                                <div className="flex ml-2">
                                  <ProductImages
                                    sx={{ mb: 2 }}
                                    width={150}
                                    height={150}
                                    image={img}
                                    name={"image" + key}
                                    className="m-auto mb-2 max-h-[150px] max-w-[150px] align-baseline"
                                  />
                                  <div>
                                    <IconButton
                                      className="relative right-5 bottom-5"
                                      color="error"
                                      onClick={() => imageArray.remove(key)}
                                    >
                                      <Cancel />
                                    </IconButton>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <ErrorMessage
                              name="images"
                              render={(msg) => (
                                <div className="text-red-500 text-sm">
                                  {msg}
                                </div>
                              )}
                            />
                          </>
                        )}
                      />
                    </div>

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
                        startAdornment={
                          <InputAdornment position="start">€</InputAdornment>
                        }
                        as={InputForm}
                      />
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
                    disabled={isSubmitting || edit}
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
      </div>
    </div>
  )
}

export default FormProduct
