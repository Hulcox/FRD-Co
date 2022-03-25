import ProductList from "../../src/components/content/productList"
import SearchBar from "../../src/components/content/searchBar"
import FooterPage from "../../src/components/footer/footer"
import HeaderNav from "../../src/components/header/header"

const ProductPage = () => {
  return (
    <div className={"Product"}>
      <HeaderNav />
      <div className="m-[2vw] bg-slate-200 w-[96vw]">
        <SearchBar />
        <ProductList />
      </div>
      <FooterPage />
    </div>
  )
}

export default ProductPage
