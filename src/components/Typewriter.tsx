import {splitText} from "./utils";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import {getTextWidth} from "./deviceWidth";
import React, {ReactNode, useEffect, useState} from "react";

type Props = {
  text: string
}

const Line = ({text, startDelay = 0}: { text: string, startDelay?: number }) => {
  // eslint-disable-next-line no-restricted-globals
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  const [sentences, setSentences] = useState<string[]>(splitText(text, getTextWidth(width)))

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
    setSentences(splitText(text, textWidth))
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

  return (
    <>
      {sentences.map((s, i) => (
        <div className="typewriter">
          <h1 className="break-words" style={{
            "--type-len": s.length,
            "--type-time": `${timings[i].time}s`,
            "--type-delay": `${timings[i].delay}s`,
            width: "max-content"
          } as React.CSSProperties}>
            {s}
          </h1>
        </div>
      ))}
    </>
  )
}

const Typewriter = ({sentences}: { sentences: string[] }) => {
  const delays = sentences.map(s => s.length)

  return (
    <>
      {sentences.map((s, i) =>
        <Line text={s} startDelay={i !== 0 ? delays[i - 1] : 0}/>
      )}
    </>
  )
}

export default Typewriter