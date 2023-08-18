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
})