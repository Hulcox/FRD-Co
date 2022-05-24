import Link from "next/link"

const FooterPage = () => {
  return (
    <div className="h-auto bg-black py-4">
      <div className="text-center flex justify-around mt-2">
        <div className="text-white">
          <h1 className="text-xl font-bold align-baseline"> Contact </h1>
          <a>Fomulaire de contact</a>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-bold align-baseline">Mention Légal</h1>
          <a>Libraries utilisé</a>
        </div>
        <div className="text-white">
          <footer>
            <small>&copy; Copyright 2018, Example Corporation</small>{" "}
          </footer>
        </div>
      </div>
    </div>
  )
}

export default FooterPage
