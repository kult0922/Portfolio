// @ts-nocheck
import mojs from '@mojs/core'
import colors from '../../../constant/colors'

const sample1 = (parent) => {
  const Shapes = mojs.stagger(mojs.Shape)

  const line = new mojs.Shape({
    shape: 'line',
    fill: 'none',
    stroke: colors.sub,
    strokeDasharray: 0.5,
    parent: parent,
    scaleX: 20,
    scaleY: 2,
    // scaleX: { '0%': '100%' },
    left: { '20%': '80%' },
    y: 0,
    easing: 'expo.out',
    duration: 700,
  })
  const triangles = new Shapes({
    shape: 'polygon',
    quantifier: 2,
    fill: 'none',
    stroke: ['white', colors.base],
    parent: parent,
    strokeWidth: [2, 10],
    strokeOpacity: 0.7,
    radius: [50, 90],
    // x: { '0%': '100%' },
    left: { '20%': '80%' },
    y: 0,
    rotate: { '0': '150' },
    easing: 'expo.out',
    duration: 700,
  })

  const timeline = new mojs.Timeline()
  timeline.add(triangles, line)

  return timeline
}

export default sample1
