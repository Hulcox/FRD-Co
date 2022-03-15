import Image from "next/image"

const CardCateorie = ({
  imageDroite: img1,
  imageGauche: img2,
  descriptionDroite: descpD,
  descriptionGauche: descpG,
}) => {
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

  return (
    <div className={"flex p-4 mx-32 h-[75vh]"}>
      <div className="bg-salt w-1/2 box-content h-[75vh] relative">
        <div className="team text-center" style={styling2}>
          <button className="bg-white width-2 py-4 mt-56 shadow-lg shadow-black/50 text-5xl font-bold align-baseline">
            {descpG}
          </button>
        </div>
      </div>
      <div className="bg-salt w-1/2 box-content h-[75vh] relative">
        <div className="team text-center" style={styling}>
          <button className="bg-white py-4 mt-56 shadow-lg shadow-black/50 text-5xl font-bold align-baseline">
            {descpD}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardCateorie
