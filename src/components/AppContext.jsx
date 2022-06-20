import { createContext, useCallback, useState } from "react"

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [user, setUser] = useState("")
  const [categorie, setCategorie] = useState([])
  const [product, setProduct] = useState([])
  const [categorieDetail, setCategorieDetail] = useState(null)
  const [productDetail, setProductDetail] = useState("Tulepor")
  const [colorList, setColorList] = useState([
    "red",
    "blue",
    "black",
    "white",
    "green",
    "grey",
    "pink",
  ])
  const [colorFilter, setColorFilter] = useState(null)
  const [noteFilter, setNoteFilter] = useState(null)
  const [priceFilter, setPriceFilter] = useState([0, 1000])
  const [orders, setOrders] = useState([])
  const [users, setUsers] = useState([])

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
        orders,
        setOrders,
        users,
        setUsers,
      }}
    />
  )
}

export default AppContext
