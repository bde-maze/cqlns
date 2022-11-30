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
    <div className="min-w-screen wave-background relative h-screen bg-slate-900/80">
      <div className="absolute bottom-0 left-0 h-[40vh] w-screen bg-gradient-to-t from-gray-300/10 to-gray-300"></div>
      <Snow />
      <div className="text-shadow flex h-3/5 w-screen items-center justify-center bg-slate-900 text-[100px]">
        CQLNS
      </div>
    </div>
  )
}
export default Home
