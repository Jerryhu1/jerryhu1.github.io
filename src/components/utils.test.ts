import {splitText} from "./utils";

describe("utils.ts", () => {
  it("should split up text into sentences", () => {
    const res = splitText("This is a long line that should be split", 12)
    expect(res).toEqual([
      "This is a",
      "long line",
      "that should",
      "be split",
    ])

  })

  it("should split long sentence", () => {
    const res = splitText("I am Jerry a full-stack developer based in Rotterdam", 15)
    expect(res).toEqual([
      "I am ",
      "long line",
      "that should",
      "be split",
    ])
  })
})