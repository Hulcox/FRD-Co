import Image from "next/image"

const CardCateorie = ({
  imageDroite: img1,
  imageGauche: img2,
  descriptionDroite: descpD,
  descriptionGauche: descpG,
}) => {
  return (
    <div className={"flex p-4 mx-32 h-[75vh]"}>
      <div className="bg-salt w-1/2 box-content h-[75vh] relative">
        <Image src={img2} alt="test" layout="fill" />
        <div className="bg-white mx-32 p-4 relative my-56 shadow-lg shadow-black/50">
          <button className=" text-center text-5xl font-bold align-baseline ">
            {descpG}
          </button>
        </div>
      </div>
      <div className="bg-salt w-1/2 box-content h-[75vh] relative">
        <Image src={img1} alt="test" layout="fill" />
        <div className="text-center my-56">
          <button className="text-5xl bg-white hover:bg-blue-500 text-blue-700 font-semibold py-4 px-32 border border-blue-500 hover:border-transparent rounded relative">
            {descpD}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardCateorie
