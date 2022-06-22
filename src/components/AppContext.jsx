import { createContext, useCallback, useEffect, useState } from "react"

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [user, setUser] = useState({ test: "test" })
  const [creditCard, setCreditCard] = useState({
    numero: "123",
    expiration: "12/12/2022",
    crypto: "742",
  })
  const [notification, setNotification] = useState([])
  const [categorie, setCategorie] = useState([])
  const [product, setProduct] = useState([])
  const [categorieDetail, setCategorieDetail] = useState(null)
  const [productDetail, handleSetProductDetail] = useState("Tulepor")
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

  const setProductDetail = useCallback((value) => {
    handleSetProductDetail(value)
  }, [])

  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    let totalPrice = 0
    cart.map(
      ({ price, quantityOnCart }) => (totalPrice += price * quantityOnCart)
    )
    setTotalCart(totalPrice)
  }, [cart])

  useEffect(() => {
    const localCart = localStorage.getItem("cart")
    localCart = JSON.parse(localCart)
    if (localCart) {
      setCart(localCart)
      localCart.map(({ price, quantityOnCart }) => {})
      console.log(localCart)
    }
  }, [])

  const addCartItem = (item) => {
    console.log("addItem", item, cart)
    const cartCopy = [...cart]

    const { id } = item

    const existingItem = cartCopy.find((cartItem) => cartItem.id == id)

    if (existingItem) {
      existingItem.quantityOnCart++
    } else {
      cartCopy.push({ ...item, quantityOnCart: 1 })
    }
    setCart(cartCopy)
    const stringCart = JSON.stringify(cartCopy)
    localStorage.setItem("cart", stringCart)
  }

  const editCartItem = (id, amount) => {
    const cartCopy = [...cart]

    const existingItem = cartCopy.find((item) => item.id == id)
    if (!existingItem) return
    existingItem.quantityOnCart += amount
    if (existingItem.quantityOnCart <= 0) {
      cartCopy = cartCopy.filter((item) => item.id != id)
    }
    setCart(cartCopy)

    const cartString = JSON.stringify(cartCopy)
    localStorage.setItem("cart", cartString)
  }

  const removeCartItem = (id) => {
    const cartCopy = [...cart]

    cartCopy = cartCopy.filter((item) => item.id != id)
    setCart(cartCopy)

    const cartString = JSON.stringify(cartCopy)
    localStorage.setItem("cart", cartString)
  }

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
        cart,
        addCartItem,
        removeCartItem,
        editCartItem,
        totalCart,
        creditCard,
        setCreditCard,
        notification,
        setNotification,
      }}
    />
  )
}

export default AppContext
