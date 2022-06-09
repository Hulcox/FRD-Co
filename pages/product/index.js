import ProductList from "../../src/components/content/productList"
import SearchBar from "../../src/components/content/searchBar"
import FooterPage from "../../src/components/footer/footer"
import HeaderNav from "../../src/components/header/header"
import api from "../../src/components/api"
import FilterProvider from "../../src/components/filtre/filtreProvider"

const ProductPage = () => {
  const handleClick = () => {
    api.get("/users")
  }
  return (
    <div className={"Product"}>
      <HeaderNav />
      <div className="m-[1vw] my-[12vh] bg-slate-200 w-[96vw]">
        <SearchBar />
        <div className="flex">
          <div className="w-1/2 bg-gray-400">
            Filter
            <button onClick={handleClick}>Click</button>
            <FilterProvider />
          </div>
          <ProductList />
        </div>
      </div>
      <FooterPage />
    </div>
  )
}

export default ProductPage
