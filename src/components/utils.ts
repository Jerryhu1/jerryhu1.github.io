import React, {ReactElement, ReactNode} from "react";

export const extractTextFromNode = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    // If the node is a string or number, return it as-is
    return node.toString();
  }

  if (React.isValidElement(node)) {
    // If the node is a React element, extract text content from its children
    const children = React.Children.toArray(node.props.children);
    return children.map(extractTextFromNode).join('');
  }

  return ''
}


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

//
// const splitElements = (text: ReactNode, width: number): ReactNode[] => {
//   for (let i = 0; i < text; i++) {
//
//   }
// }