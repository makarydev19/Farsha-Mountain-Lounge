'use client'

import { TextAnimate } from '@/src/components/ui'
import { historyData } from '@/src/data/data'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function History() {
  return (
    <section className='px-5 py-20 lg:px-28'>
      <main>
        <h2 className='text-center text-2xl font-bold text-red-400 lg:text-3xl'>
          Our History
        </h2>
        <div className='space-y-24'>
          {historyData.map((item, idx) => {
            const isEven = idx % 2 === 0

            return (
              <div
                key={idx}
                className={`flex flex-col-reverse items-center justify-center gap-10 lg:flex-row ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* 3D Book Image */}
                <motion.div
                  initial={{
                    opacity: 0,
                    rotateY: isEven ? -45 : 45,
                    scale: 0.9
                  }}
                  whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  className='perspective w-full max-w-sm'
                  style={{
                    perspective: '1000px'
                  }}
                >
                  <div
                    className='h-[50vh] w-92 rounded-lg shadow-xl lg:h-[65vh]'
                    style={{
                      transform: `rotateY(${idx === 1 ? '-5deg' : '5deg'})`,
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 10px 30px rgba(0,0,0,1)'
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className='img rounded-lg'
                    />
                  </div>
                </motion.div>

                <div className='w-full max-w-2xl p-3 text-center lg:p-6 lg:text-left'>
                  <TextAnimate
                    className='font-milky mb-4 text-6xl font-semibold lg:text-7xl'
                    animation='slideUp'
                    by='word'
                    delay={0.5}
                  >
                    {item.title}
                  </TextAnimate>
                  <TextAnimate
                    className='text-lg leading-7 text-white/75 lg:text-3xl lg:leading-10'
                    animation='slideUp'
                    by='word'
                    delay={0.5}
                  >
                    {item.content}
                  </TextAnimate>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </section>
  )
}
