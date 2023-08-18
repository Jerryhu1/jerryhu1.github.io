
export const splitText = (text: string, width: number): string[] => {
  let words = text.split(" ")
  const result: string[] = []
  let currSentence = ""

  while (words.length > 0) {
    const word = words[0]
    if (!word) {
      break
    }

    if (currSentence.length + word.length >= width) {
      result.push(currSentence)
      currSentence = ""
      continue
    }

    if (currSentence) {
      currSentence += " "
    }

    currSentence += word
    words = words.slice(1, words.length)
    if (words.length === 0) {
      result.push(currSentence)
      break
    }
  }

  return result
}

