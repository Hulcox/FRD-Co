import { createContext, useCallback, useEffect, useState } from "react"

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [user, setUser] = useState("")
  const [categorie, setCategorie] = useState([])
  const [product, setProduct] = useState([])
  const [categorieDetail, setCategorieDetail] = useState("Salon")
  const [productDetail, setProductDetail] = useState("Moldativia")

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
      }}
    />
  )
}

export default AppContext
