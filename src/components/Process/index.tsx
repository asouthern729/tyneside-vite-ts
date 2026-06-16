import * as Components from "./components"

function Process() {
  return (
    <section id="process" className="bg-base-100 fade-into-base-200 py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Components.Heading />
        <Components.Steps />
      </div>
    </section>
  )
}

export default Process
