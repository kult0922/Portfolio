// @ts-nocheck
import mojs from '@mojs/core'
import React, { useRef, useEffect } from 'react'
import welcomeAnimation from '../../animation/welcomeAnimation'

const TopContent = () => {
  const animDom = useRef()

  useEffect(() => {
    const timeline = new mojs.Timeline({
      // delay: 3000,
      onComplete() {
        this.replay()
      },
    })
    timeline.append(welcomeAnimation(animDom.current))
    timeline.play()
  }, [])

  return (
    <>
      <div className=" ">
        <div
          id="field"
          ref={animDom}
          className="relative h-[50px] w-full overflow-hidden"
        ></div>
      </div>
    </>
  )
}

export default TopContent
