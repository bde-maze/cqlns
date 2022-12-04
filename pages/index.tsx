import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSnowPreset } from 'tsparticles-preset-snow'

const Snow = () => {
  const customInit = async (engine: Engine): Promise<void> => {
    // this adds the preset to tsParticles, you can safely use the
    await loadSnowPreset(engine)
  }

  const options = {
    preset: 'snow',
    background: {
      color: 'transparent',
    },
  }

  return <Particles options={options} init={customInit} />
}

const Home = () => {
  return (
    <div className="min-w-screen relative h-screen wave-background select-none">
      <div className="absolute bottom-0 backdrop-blur-xs left-0 h-[20vh] w-screen bg-gradient-to-t from-gray-300/10 to-gray-400">
        <div className="absolute top-[-50px] left-[75px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 border border-white bg-green-500"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 border border-white bg-green-600"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 border border-white bg-green-700"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-[-30px] left-[130px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 border border-white bg-green-500"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 border border-white bg-green-600"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 border border-white bg-green-700"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-0 left-[100px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 bg-green-500 border border-white"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 bg-green-600 border border-white"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 bg-green-700 border border-white"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-700 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-[-50px] left-[375px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 border border-white bg-green-500"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 border border-white bg-green-600"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 border border-white bg-green-700"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-[-30px] left-[330px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 border border-white bg-green-500"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 border border-white bg-green-600"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 border border-white bg-green-700"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-0 left-[400px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 bg-green-500 border border-white"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 bg-green-600 border border-white"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 bg-green-700 border border-white"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-700 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-[-50px] left-[825px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 border border-white bg-green-500"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 border border-white bg-green-600"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 border border-white bg-green-700"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-[-30px] left-[730px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 border border-white bg-green-500"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 border border-white bg-green-600"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 border border-white bg-green-700"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-0 left-[900px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 bg-green-500 border border-white"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 bg-green-600 border border-white"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 bg-green-700 border border-white"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-700 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-[-50px] left-[975px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 border border-white bg-green-500"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 border border-white bg-green-600"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 border border-white bg-green-700"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-[-25px] left-[925px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 border border-white bg-green-500"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 border border-white bg-green-600"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 border border-white bg-green-700"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-0 left-[1300px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 bg-green-500 border border-white"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 bg-green-600 border border-white"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 bg-green-700 border border-white"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-700 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-[-50px] left-[1450px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 bg-green-500 border border-white"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 bg-green-600 border border-white"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 bg-green-700 border border-white"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-700 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-[-25px] left-[1350px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 bg-green-500 border border-white"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 bg-green-600 border border-white"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 bg-green-700 border border-white"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-700 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
        <div className="absolute top-[-15px] left-[1400px] w-full h-full">
          <div className="absolute triangle left-3 top-2 z-50 w-14 h-8 bg-green-500 border border-white"></div>
          <div className="absolute triangle top-6 z-40 left-2 w-16 h-8 bg-green-600 border border-white"></div>
          <div className="absolute triangle top-10 z-30 w-20 h-8 bg-green-700 border border-white"></div>
          <div className="absolute top-16 left-9 w-2 h-6 bg-amber-900"></div>
          <div className="absolute w-2 h-2 bg-red-600 rounded-full top-12 z-50 left-6 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-blue-700 rounded-full top-6 z-50 left-10 animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-yellow-600 rounded-full top-14 z-50 left-12 animate-pulse"></div>
        </div>
      </div>
      <Snow />
      <div className="bg-black h-4/5 w-screen">
        <div className="text-shadow flex items-center h-full justify-center bg-slate-900/40 text-[100px]">
          <span className="hover:text-red-700 hover:text-shadow-red transition duration-500 cursor-cell">
            C
          </span>
          <span className="hover:text-red-700 hover:text-shadow-red transition duration-500 cursor-cell">
            Q
          </span>
          <span className="hover:text-red-700 hover:text-shadow-red transition duration-500 cursor-cell">
            L
          </span>
          <span className="hover:text-red-700 hover:text-shadow-red transition duration-500 cursor-cell">
            N
          </span>
          <span className="hover:text-red-700 hover:text-shadow-red transition duration-500 cursor-cell">
            S
          </span>
        </div>
      </div>
    </div>
  )
}
export default Home
