import { useContext } from "react"
import AppCtx from "@/context/AppContext"

export const useHandleToggleBtn = () => {
  const { dispatch } = useContext(AppCtx)

  const onClick = () => {
    dispatch({ type: "TOGGLE_THEME" })
  }

  const btnProps = {
    onClick,
    className: "btn btn-ghost btn-sm btn-circle",
    ["aria-label"]: "Toggle theme"
  }

  return btnProps
}