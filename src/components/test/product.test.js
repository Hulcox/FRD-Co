//Imposible to start test because backEnd doesn't work
import React from "react"
//import { mount, shallow } from "enzyme"
//import axios from "axios"
//import { act } from "react-dom/test-utils"
import CardProduct from "../content/cardProduct"
import { render, screen, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup() // Resets the DOM after each test suite
})

describe("CardProduct Component", () => {
  const setToggle = jest.fn()
  render(
    <CardProduct
      image={
        "https://cdn.laredoute.com/products/a/0/c/a0c4b1062ca570435430869520fd48a1.jpg?imgopt=twic&twic=v1/resize=640"
      }
      title={"test"}
      description={"description"}
      reverse //test reverse effect on the cardProduct Component
    />
  )
  const cardProduct = screen.getByTestId("cardProduct")

  // Test 1
  test("CardProduct Rendering", () => {
    expect(cardProduct).toBeInTheDocument()
  })

  // Test 2
  test("CardProduct Text", () => {
    expect(cardProduct).toHaveTextContent("test")
  })

  // Test 3
  test("CardProduct Description", () => {
    expect(cardProduct).toHaveTextContent("description")
  })

  test("CardProduct Reverse", () => {
    expect(cardProduct).toHaveAttribute("reverse")
  })
})

/*jest.mock("axios")
// mock data
const data = { // test with axios doesn't work

  config: {
    iamge:
      "https://cdn.laredoute.com/products/a/0/c/a0c4b1062ca570435430869520fd48a1.jpg?imgopt=twic&twic=v1/resize=640",
    title : "test",
    description : "test",
  },
}

describe("CardProduct test", () => {
  let wrapper

  // clear all mocks
  afterEach(() => {
    jest.clearAllMocks()
  })

  test("renders with loading", () => {
    wrapper = shallow(<CardProduct />)
    expect(wrapper.find("div").first().text()).toBe("...loading")
  })

  test("loads img", async () => {
    // mock axios promise
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(data))
      wrapper = mount(<CardProduct />)
    })

    // check the render output
    wrapper.update()

    await expect(axios.get).toHaveBeenCalledWith(
      "https://cdn.laredoute.com/products/a/0/c/a0c4b1062ca570435430869520fd48a1.jpg?imgopt=twic&twic=v1/resize=640"
    )

    await expect(axios.get).toHaveBeenCalledTimes(1)

    await expect(wrapper.find("img").props().src).toEqual("image-url")
  })
})*/
