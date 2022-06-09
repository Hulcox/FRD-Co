import ProductList from "../../../src/components/content/productList"
import SearchBar from "../../../src/components/content/searchBar"
import FooterPage from "../../../src/components/footer/footer"
import HeaderNav from "../../../src/components/header/header"

const CategoriePage = () => {
  const handleClick = () => {
    api.get("/users")
  }
  return (
    <div className={"Product"}>
      <HeaderNav />
      <div className="m-[1vw] my-[12vh] bg-slate-200 w-[96vw]">
        <SearchBar />
        <div className="flex">
          <div className="w-1/2 bg-slate-400">
            Filter
            <button onClick={handleClick}>Click</button>
          </div>
          <ProductList filtreCategorie />
        </div>
      </div>
      <FooterPage />
    </div>
  )
}

export default CategoriePage
