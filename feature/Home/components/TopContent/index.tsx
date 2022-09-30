// @ts-nocheck
import mojs from '@mojs/core'
import React, { useRef, useEffect } from 'react'
import sample1 from '../../animation/sample1'
import sample2 from '../../animation/sample2'

const TopContent = () => {
  const animDom = useRef()

  useEffect(() => {
    const timeline = new mojs.Timeline({
      // delay: 3000,
      onComplete() {
        this.replay()
      },
    })
    timeline.append(sample2(animDom.current))
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
