// Components
import * as Components from './components'

function Navbar() {

  return (
    <header className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100 px-4 shadow shadow-accent lg:px-8">
      <Components.Title />

      <div className="navbar-end flex gap-4 lg:gap-6">
        <Components.NavBtns />
        <Components.ToggleBtn />
      </div>
    </header>
  )
}

export default Navbar