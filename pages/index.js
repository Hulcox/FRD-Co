import { useRouter } from "next/router"
import { useEffect } from "react"
import HeaderNav from "../src/components/header/header"

const IndexPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/home")
  }, [])

  return (
    <div>
      <HeaderNav />
    </div>
  )
}

export default IndexPage
