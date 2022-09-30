// @ts-nocheck
import mojs from '@mojs/core'
import { sign } from 'crypto'
import colors from '../../../constant/colors'

const sample2 = (parent) => {
  const Shapes = mojs.stagger(mojs.Shape)
  const Bursts = mojs.stagger(mojs.Burst)

  const shapes = new Shapes({
    quantifier: 8,
    parent: parent,
    fill: 'white',
    // radius: [50, 90],
    // x: { '0%': '100%' },
    fillOpacity: 0.6,
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
    // left: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'],
    x: [
      '-160px',
      '-120px',
      '-80pxx',
      '-40px',
      '0px',
      '40px',
      '80px',
      '120px',
      '160px',
    ],
    scale: { 0: 1 },
    radiusX: [20, 8, 4, 8, 8, 12, 8, 4],
    radiusY: [20, 8, 12, 8, 8, 8, 8, 12],
    y: 0,
    //delay: 'stagger(300)',
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
      fill: ['white'],
    },
    strokeOpacity: 0.7,
    // radius: [50, 90],
    // x: { '0%': '100%' },
    // left: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'],
    x: [
      '-160px',
      '-120px',
      '-80pxx',
      '-40px',
      '0px',
      '40px',
      '80px',
      '120px',
      '160px',
    ],
    radius: { 0: 50 },
    y: 0,
    // easing: 'expo.out',
    duration: 700,
  })
  console.log('wi')
  console.log(window.outerWidth)

  // chars
  const shinpuku = 5
  const chars = new Shapes({
    //left: '50%',
    // top: '0%',
    fill: 'none',
    radius: 0,
    // isShowEnd: true,
    // isForce3d: true,
    quantifier: 8,
    parent: parent,
    // radius: [50, 90],
    // x: { '0%': '100%' },
    // left: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'],
    x: [
      '-160px',
      '-120px',
      '-80pxx',
      '-40px',
      '0px',
      '40px',
      '80px',
      '120px',
      '160px',
    ],
    // scale: { 0: 1 },
    // scale: 1,
    origin: '50% 100%',
    scale: { 0: 1 },
    // y: -25,
    //x: -6,
    //delay: 'stagger(300)',
    easing: 'elastic.out',
    duration: 1100,
  }).then({
    duration: 1000,
  })

  const text = 'Welcome!'
  for (let i = 0; i < text.length; i++) {
    console.log(i)
    const character = document.createElement('div')
    character.classList.add('character')
    character.innerHTML = text[i]
    character.style.cssText = `color: rgba(255, 255, 255, 0.6); font-weight: bold;font-size: 28px; position: absolute; top: 50%; left: 50%; margin-right: -50%; margin-bottom: -50%; transform: translate(-50%, -50%)`
    chars._modules[i].el.appendChild(character)
  }

  // chars._modules[0].el.appendChild(character1)
  // console.log(chars._modules)

  const timeline = new mojs.Timeline()
  const timeline_ = new mojs.Timeline()
  timeline_.add(burst, chars)
  timeline.append(shapes, timeline_)

  return timeline
}

export default sample2
