import { createContext, useCallback, useState } from "react"

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [user, setUser] = useState("")
  const [categorie, setCategorie] = useState([])
  const [product, setProduct] = useState([])
  const [categorieDetail, setCategorieDetail] = useState("Canapé")
  const [productDetail, setProductDetail] = useState("Tulepor")
  const [colorList, setColorList] = useState([
    "red",
    "blue",
    "black",
    "white",
    "green",
    "gray",
    "pink",
  ])
  const [colorFilter, setColorFilter] = useState(null)
  const [noteFilter, setNoteFilter] = useState(null)
  const [priceFilter, setPriceFilter] = useState([0, 1000])

  const handleSetUser = useCallback((value) => {
    setUser(value)
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{
        user,
        handleSetUser,
        categorie,
        setCategorie,
        product,
        setProduct,
        categorieDetail,
        setCategorieDetail,
        productDetail,
        setProductDetail,
        colorList,
        setColorList,
        colorFilter,
        setColorFilter,
        noteFilter,
        setNoteFilter,
        priceFilter,
        setPriceFilter,
      }}
    />
  )
}

export default AppContext
