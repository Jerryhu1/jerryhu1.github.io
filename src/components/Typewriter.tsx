import {extractTextFromNode, splitText} from "./utils";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import {getTextWidth} from "./deviceWidth";
import React, {ReactElement, ReactNode, useEffect, useState} from "react";

type Props = {
  text: ReactNode
  startDelay?: number
  size?: string
  background?: string
}

const Line = ({text, size = '20px', startDelay = 0, background = '#E8EDE3'}: Props) => {
  // eslint-disable-next-line no-restricted-globals
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(splitText(extractTextFromNode(text), getTextWidth(width)))
  const [sentences, setSentences] = useState<string[]>(splitText(extractTextFromNode(text), getTextWidth(width)))
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  const handleResize = () => {
    // eslint-disable-next-line no-restricted-globals
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const textWidth = getTextWidth(width)
    setSentences(splitText(extractTextFromNode(text), textWidth))
  }

  const lettersPerSecond = 20
  let delayCumulative = startDelay / lettersPerSecond
  const timings = sentences.map((v, i) => {
    let delay = delayCumulative
    const time = v.length / lettersPerSecond
    delayCumulative += time
    return {
      time: time,
      delay: delay
    }
  })

  //TODO: make this work for nested elements
  return (
    <>
      {sentences.map((s, i) => (
        <div className="typewriter" key={i}>
          <div className="break-words" style={{
            "--size": size,
            "--bg-color": background,
            "--type-len": s.length,
            "--type-time": `${timings[i].time}s`,
            "--type-delay": `${timings[i].delay}s`,
            width: "max-content"
          } as React.CSSProperties}>
            {s}
          </div>
        </div>
      ))}
    </>
  )
}


const Typewriter = ({sentences, size, background}: {
  sentences: ReactNode[], startDelay?: number
  size?: string
  background?: string
}) => {
  const delays: number[] = []
  const lengths = sentences.map(s => extractTextFromNode(s).length)
    .reduce((acc, curr, i) => {
      delays.push(acc)
      return acc + curr
    })

  return (
    <>
      {sentences.map((s, i) =>
        <Line size={size} background={background} text={s} startDelay={i > 0 ? delays[i - 1] : 0}/>
      )}
    </>
  )
}

export default Typewriter
