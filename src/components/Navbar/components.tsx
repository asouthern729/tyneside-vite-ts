import { useContext } from "react"
import AppCtx from "@/context/AppContext"
import { useHandleToggleBtn } from "./hooks"

export const Title = () => (
  <div className="navbar-start">
    <a 
      href="/"
      className={"flex flex-col items-center leading-tight text-base-content"}>
        <span className="text-lg font-extrabold uppercase tracking-[2px]">Tyneside</span>
        <span className="text-[10px] font-normal uppercase tracking-[2px]">Innovations</span>
    </a>
  </div>
)

export const NavBtns = () => (
  <>
    <NavBtn to={"#services"}>Services</NavBtn>
    <NavBtn to={"#process"}>Process</NavBtn>
    <NavBtn to={"#contact"}>Contact</NavBtn>
  </>
)

export const ToggleBtn = () => {
  const btnProps = useHandleToggleBtn()

  return (
    <button { ...btnProps }>
      <ModeIcon />
    </button>
  )
}

type NavBtnProps = {
  to: "#services" | "#about" | "#process" | "#contact"
  children: React.ReactNode
}

const NavBtn = ({ to, children }: NavBtnProps) => (
  <a 
    href={to}
    className="text-sm font-medium text-base-content hover:opacity-70">
      {children}
  </a>
)

const ModeIcon = () => {
  const { theme } = useContext(AppCtx)

  if(theme === "silk") return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}