import { useRouter } from "next/router"

const CardCateorie = ({
  imageDroite: img1,
  imageGauche: img2,
  descriptionDroite: descpD,
  descriptionGauche: descpG,
}) => {
  const router = useRouter()
  const styling = {
    backgroundImage: `url(${img1.src})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
  const styling2 = {
    backgroundImage: `url(${img2.src})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  const handleClick = (value) => {
    router.push(value)
  }

  return (
    <div className={"flex p-4 mx-32 h-[75vh]"}>
      <div className="bg-salt w-1/2 box-content h-[75vh] relative">
        <div className="team text-center" style={styling2}>
          <button
            className="bg-white width-2 py-4 px-8 rounded-lg mt-56 shadow-lg shadow-black/50 text-5xl font-bold align-baseline"
            onClick={() => handleClick("/product")}
          >
            {descpG}
          </button>
        </div>
      </div>
      <div className="bg-salt w-1/2 box-content h-[75vh] relative">
        <div className="team text-center" style={styling}>
          <button
            className="bg-white width-2 py-4 px-8 rounded-lg mt-56 shadow-lg shadow-black/50 text-5xl font-bold align-baseline"
            onClick={() => handleClick("/product")}
          >
            {descpD}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardCateorie
