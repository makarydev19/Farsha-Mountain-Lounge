'use client'

import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { motion, useAnimation } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
import { guidelinesML, guidelinesBeach } from '../../data/data' // Adjust if your path is different
import { Guideline } from '@/types/types' // Import your Guideline type
import { TextAnimate } from '@/src/components/ui/TextAnimate'

const Guidelines = () => {
  const [active, setActive] = useState<number | null>(null)
  // const [refML, inViewML] = useInView()
  // const [refBeach, inViewBeach] = useInView()
  const controlsML = useAnimation()
  const controlsBeach = useAnimation()

  const handleItemClick = (index: number) => {
    setActive(index === active ? null : index)
  }

  // useEffect(() => {
  //   if (inViewML) {
  //     controlsML.start('visible')
  //   } else {
  //     controlsML.start('hidden')
  //   }
  // }, [controlsML, inViewML])

  // useEffect(() => {
  //   if (inViewBeach) {
  //     controlsBeach.start('visible')
  //   } else {
  //     controlsBeach.start('hidden')
  //   }
  // }, [controlsBeach, inViewBeach])

  const listItemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const getImageUrl = (img: string | { src: string }): string => {
    return typeof img === 'string' ? img : img.src
  }

  return (
    <section className='guidelines section py-28' id='guidelines'>
      <main className='space-y-28'>
        <div className='relative z-10 mx-auto w-full space-y-3 text-center lg:w-[65%]'>
          <h2 className='text-2xl font-semibold text-red-400 lg:text-3xl'>
            Our Guidelines
          </h2>
          <TextAnimate
            className='font-milky text-3xl lg:text-5xl'
            animation='blurInUp'
            as={'h1'}
            delay={0.5}
          >
            Mountain Lounge guidelines
          </TextAnimate>
        </div>

        <div className='glines-list shadow-2xl shadow-black'>
          {guidelinesML.map((MLguideline: Guideline, i: number) => (
            <motion.li
              key={`ml-${i}`}
              variants={listItemVariants}
              style={{
                backgroundImage: `url(${getImageUrl(MLguideline.img)})`
              }}
              // initial='hidden'
              animate={controlsML}
              custom={i}
              className={active === i ? 'active' : ''}
              onClick={() => handleItemClick(i)}
            >
              <h4 className='glines-name1 flex flex-col items-center justify-center gap-3'>
                {MLguideline.title}
                <p className=''>
                  <FaChevronDown />
                </p>
              </h4>
              <div className='guidelines-content'>
                <div className='inner'>
                  <div className='bio'>
                    <h4 className='glines-name2 font-milky'>
                      {MLguideline.title}
                    </h4>
                    <p className='text-2xl text-white/80'>
                      {MLguideline.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </div>
      </main>

      <main className='mt-32 space-y-20'>
        <div className='relative z-10 mx-auto w-full text-center lg:w-[65%]'>
          <TextAnimate
            className='font-milky text-3xl text-blue-200 lg:text-5xl'
            animation='blurInUp'
            as={'h1'}
          >
            Beach Lounge guidelines
          </TextAnimate>
        </div>

        <div className='glines-list shadow-2xl shadow-black'>
          {guidelinesBeach.map((beachguideline: Guideline, i: number) => (
            <motion.li
              key={`beach-${i}`}
              variants={listItemVariants}
              // initial='hidden'
              animate={controlsBeach}
              custom={i}
              style={{
                backgroundImage: `url(${getImageUrl(beachguideline.img)})`
              }}
              className={active === i ? 'active' : ''}
              onClick={() => handleItemClick(i)}
            >
              <h4 className='glines-name1 font-milky flex flex-col items-center justify-center gap-3'>
                {beachguideline.title}
                <p>
                  <FaChevronDown />
                </p>
              </h4>
              <div className='guidelines-content'>
                <div className='inner'>
                  <div className='bio'>
                    <h4 className='glines-name2 font-milky'>
                      {beachguideline.title}
                    </h4>
                    <p className='text-2xl text-white/80'>
                      {beachguideline.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </div>
      </main>
    </section>
  )
}

export default Guidelines
