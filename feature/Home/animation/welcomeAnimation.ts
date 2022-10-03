// @ts-nocheck
import mojs from '@mojs/core'
import colors from '../../../constant/colors'

const welcomeAnimation = (parent) => {
  const Shapes = mojs.stagger(mojs.Shape)
  const Bursts = mojs.stagger(mojs.Burst)
  const xs = [
    '-140px',
    '-100px',
    '-60pxx',
    '-20px',
    '20px',
    '60px',
    '100px',
    '140px',
    '180px',
  ]
  const colorArray = [
    'white',
    colors.base,
    'white',
    colors.base,
    colors.base,
    'white',
    colors.base,
    'white',
  ]

  const shapes = new Shapes({
    quantifier: 8,
    parent: parent,
    fill: colorArray,
    shape: [
      'polygon',
      'circle',
      'rect',
      'circle',
      'circle',
      'rect',
      'circle',
      'rect',
    ],
    x: xs,
    scale: { 0: 1 },
    radiusX: [20, 8, 4, 8, 8, 12, 8, 4],
    radiusY: [20, 8, 12, 8, 8, 8, 8, 12],
    y: 0,
    rotate: { '0': '180' },
    easing: 'elastic.out',
    duration: 1000,
  }).then({
    scale: { 0.2: 0 },
    duration: 100,
  })

  const burst = new Bursts({
    quantifier: 8,
    parent: parent,
    children: {
      fill: colorArray,
    },
    x: xs,
    radius: { 0: 50 },
    y: 0,
    duration: 700,
  })

  // chars
  const chars = new Shapes({
    fill: 'none',
    radius: 0,
    quantifier: 8,
    parent: parent,
    x: xs,
    origin: '50% 100%',
    scale: { 0: 1 },
    easing: 'elastic.out',
    duration: 1100,
  }).then({
    duration: 1000,
  })

  const text = 'Welcome!'
  for (let i = 0; i < text.length; i++) {
    const character = document.createElement('div')
    character.classList.add('character')
    character.innerHTML = text[i]
    character.style.cssText = `color: white; font-weight: bold;font-size: 28px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)`
    chars._modules[i].el.appendChild(character)
  }

  const timeline = new mojs.Timeline()
  const timeline_ = new mojs.Timeline()
  timeline_.add(burst, chars)
  timeline.append(shapes, timeline_)

  return timeline
}

export default welcomeAnimation
