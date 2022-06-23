import { createContext, useCallback, useEffect, useState } from "react"

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const { pageComponent: Page, router, ...otherProps } = props

  const [user, setUser] = useState({}) //user is required
  const [userId, setUserId] = useState(null) //userId is required
  const [userLevel, setUserLevel] = useState(null) //userLevel is required
  //creditCard is ntt required but backEnd doesn't work (route creditcard)
  const [creditCard, setCreditCard] = useState([])
  const [notification, setNotification] = useState([]) //notification is required
  const [categorie, setCategorie] = useState([]) //categorie is required
  const [product, setProduct] = useState([]) //product not is required
  const [productTop4, setProductTop4] = useState([]) //productTop4 is required
  const [categorieDetail, setCategorieDetail] = useState(null) //categorieDetail is required
  const [productDetail, handleSetProductDetail] = useState("Tulepor") //productDetail is required
  const [colorList, setColorList] = useState([
    //colorList is not required
    "red",
    "blue",
    "black",
    "white",
    "green",
    "grey",
    "pink",
  ])
  const [colorFilter, setColorFilter] = useState(null) //colorFilter is required
  const [noteFilter, setNoteFilter] = useState(null) //noteFilter is required
  const [priceFilter, setPriceFilter] = useState([0, 1000]) //priceFilter is required
  const [orders, setOrders] = useState([]) //orders is not required
  const [livraisonAdress, setLivraisonAdress] = useState(null) //livraisonAdress not is required
  const [users, setUsers] = useState([]) //users is not required
  const [filtreTri, setFiltreTri] = useState("") //filtreTri is required

  const handleSetUser = useCallback((value) => {
    //useCallback for function use often
    setUser(value)
  }, [])

  const setProductDetail = useCallback((value) => {
    //useCallback for function use often
    handleSetProductDetail(value)
  }, [])

  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    //rediraction if your are note authorize to enter in profile menu
    if (userLevel != "ROLE_USER" && Page.private) {
      router.push("/login/sign-in")
    }
  }, [Page.private, router, userLevel])

  useEffect(() => {
    //rediraction if your are note authorize to enter in backoffice
    console.log(userLevel == "ROLE_ADMIN")
    if (userLevel != "ROLE_ADMIN" && Page.administration) {
      router.push("/")
    }
  }, [Page.administration, router, userLevel])

  useEffect(() => {
    //set total cart price
    let totalPrice = 0
    cart.map(
      ({ price, quantityOnCart }) => (totalPrice += price * quantityOnCart)
    )
    setTotalCart(totalPrice)
  }, [cart])

  useEffect(() => {
    // load cart
    const localCart = localStorage.getItem("cart")
    localCart = JSON.parse(localCart)
    if (localCart) {
      setCart(localCart)
      localCart.map(({ price, quantityOnCart }) => {})
    }
  }, [])

  const addCartItem = (item) => {
    // add item into cart
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
    // edit item into cart
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
    // remove item into cart
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
        userLevel,
        setUserLevel,
        productTop4,
        setProductTop4,
        userId,
        setUserId,
        setLivraisonAdress,
        livraisonAdress,
        setFiltreTri,
        filtreTri,
      }}
    />
  )
}

export default AppContext
