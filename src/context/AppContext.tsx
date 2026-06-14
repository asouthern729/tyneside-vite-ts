import { createContext, useReducer, useEffect } from "react"

// Types
type Theme = "silk" | "black"

type AppCtxType = {
  dispatch: React.Dispatch<AppAction>
  theme: Theme
}

type AppState = Omit<AppCtxType, "dispatch">

type AppAction = { type: "TOGGLE_THEME" }

const getInitialTheme = (): Theme => {

  const stored = localStorage.getItem("theme")
  if(stored === "silk" || stored === "black") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "black" : "silk"
}

const initialState: AppState = {
  theme: getInitialTheme(),
}

const AppReducer = (state: AppState, action: AppAction): AppState => {

  switch(action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "silk" ? "black" : "silk" }
    default:
      return state
  }
}

const AppCtx = createContext<AppCtxType>({
  ...initialState,
  dispatch: () => null,
})

export const AppProvider = ({ children }: { children: React.ReactNode }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme)
    localStorage.setItem("theme", state.theme)
  }, [state.theme])

  return (
    <AppCtx.Provider value={{ ...state, dispatch }}>
      {children}
    </AppCtx.Provider>
  )
}

export default AppCtx
