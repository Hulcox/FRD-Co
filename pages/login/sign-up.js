import FormSignUp from "../../src/components/formikComponents/FormSignUp"
import HeaderNav from "../../src/components/header/header"

const LoginPageSignUp = () => {
  return (
    <div>
      <HeaderNav />
      <div className="mt-28 w-1/2 mx-auto">
        <div className="mt-2 md:mt-0 md:col-span-2">
          <h3 className="text-lg font-medium leading-6 text-gray-900 p-2">
            Enregistrement
          </h3>
          <FormSignUp />
        </div>
      </div>
    </div>
  )
}

export default LoginPageSignUp
