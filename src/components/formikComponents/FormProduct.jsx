import { Cancel } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useCallback, useContext, useState } from "react"
import * as Yup from "yup"
import api from "../api"
import AppContext from "../AppContext"
import ProductImages from "../content/ProductImages"
import InputForm from "./InputForm"

const FormProduct = ({ data }) => {
  const {} = useContext(AppContext)

  const imageTest = []

  const [ImageList, setImageList] = useState([])
  const [imageToAdd, setImageToAdd] = useState(null)

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
    price: Yup.number()
      .positive("Negative value is not allowed")
      .integer()
      .nullable(),
    rate: Yup.number()
      .positive("Negative value is not allowed")
      .max(5, "Note maximun 5 étoiles")
      .integer()
      .nullable(),
    stock: Yup.number()
      .positive("Negative value is not allowed")
      .integer()
      .nullable(),
  })

  const handleFormSubmit = useCallback((value, { resetForm }) => {
    console.log(ImageList, imageTest)
    /*api
      .post("/admin/products/save", {
        ...value,
        image1: ImageList[0],
        image2: ImageList[1],
        image3: ImageList[2],
        image4: ImageList[3],
      })
      .then(() => {})
      .catch((error) => {
        console.log(error)
      })*/
  }, [])

  const setImage = (event, value) => {
    setImageToAdd(event.target.value)
  }
  const addImages = () => {
    if (ImageList.length >= 4) {
      console.log("full")
    } else {
      setImageList([...ImageList, imageToAdd])
      imageTest == ImageList
    }
  }

  const removeImage = (id) => {
    const list = [...ImageList]
    list.splice(id, 1)
    setImageList(list)
  }

  return (
    <div>
      <div className="mt-2 md:mt-0 md:col-span-2">
        <Formik
          validationSchema={CommentSchema}
          initialValues={{
            name: "",
            description: "",
            category: "",
            color: "#000000",
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
                      <div className="flex ">
                        <input
                          type="url"
                          placeholder="Image"
                          className=" flex-1 block w-full rounded-md sm:text-sm border-gray-300 p-2 my-2 text-black"
                          onChange={setImage}
                        />
                        <Button
                          variant="contained"
                          onClick={addImages}
                          className="bg-[#6667ab] h-[20%] ml-2 self-center"
                        >
                          Contained
                        </Button>
                      </div>
                      <div className="flex">
                        {ImageList.map((img, key) => (
                          <div className="flex ml-2">
                            <ProductImages
                              key={key}
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
                                onClick={() => {
                                  removeImage(key)
                                }}
                              >
                                <Cancel />
                              </IconButton>
                            </div>
                          </div>
                        ))}
                      </div>
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
