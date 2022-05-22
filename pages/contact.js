import { useRouter } from "next/router"
import { useEffect } from "react"
import HeaderNav from "../src/components/header/header"

const ContactPage = () => {
  const router = useRouter()

  return (
    <div>
      <HeaderNav />
    </div>
  )
}

export default ContactPage
