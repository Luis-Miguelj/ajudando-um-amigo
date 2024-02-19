'use client'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [menu, setMenu] = useState(true)
  // const [width, setWidth] = useState(56)
  // const [height, setHeight] = useState(64)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        console.log('ok')
        setMenu(false)
      } else {
        console.log('normal')
        setMenu(true)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header>
      <div className="h-8 bg-green-400 flex items-center justify-center">
        <h1>construcoeseservicoscsr@gmail.com</h1>
      </div>
      <div
        className="h-20 flex justify-between items-center bg-zinc-950 text-zinc-50 font-semibold overflow-hidden transition-all duration-300"
        id="menu"
      >
        {/* <div
          className={`w-auto h-auto transition-all duration-300`}
          id="logo"
        ></div> */}
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-serif text-green-400">CSR</h1>
          <img src="./img.png" alt="img" className=" w-16 h-16" />
        </div>
        {menu === true ? (
          <ul className="flex gap-5 text-lg">
            <a
              href=""
              className="hover:bg-zinc-50 hover:bg-opacity-35 p-1 rounded transition-all duration-150"
            >
              Inicio
            </a>
            <a
              href=""
              className="hover:bg-zinc-50 hover:bg-opacity-35 p-1 rounded transition-all duration-150"
            >
              Quem somos
            </a>
            <a
              href=""
              className="hover:bg-zinc-50 hover:bg-opacity-35 p-1 rounded transition-all duration-150"
            >
              Serviços
            </a>
            <a
              href=""
              className="hover:bg-zinc-50 hover:bg-opacity-35 p-1 rounded transition-all duration-150"
            >
              Portifólio
            </a>
            <a
              href=""
              className="hover:bg-zinc-50 hover:bg-opacity-35 p-1 rounded transition-all duration-150"
            >
              Contato
            </a>
          </ul>
        ) : (
          <Menu className="cursor-pointer" size={28} />
        )}
      </div>
    </header>
  )
}
