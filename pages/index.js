import { useRouter } from "next/router"
import { useEffect } from "react"

const IndexPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/home")
  }, [])

  return <div>INDEX</div>
}

export default IndexPage
