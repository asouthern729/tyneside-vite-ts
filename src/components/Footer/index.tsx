import magpie from "@/assets/magpie/magpie.png"

function Footer() {

  return (
    <footer className="footer bg-gradient-to-r from-neutral to-base-200 h-40 relative">
      <div className="relative z-10 flex flex-col items-center m-auto">
        <span className="text-neutral-content font-extrabold text-lg tracking-[10px] uppercase text-center">Tyneside Innovations</span>
        <span className="text-neutral-content tracking-[8px] uppercase">Madison, Tennessee</span>
      </div>
      <img src={magpie} alt="" className="absolute bottom-0 right-0 h-36 w-auto opacity-25" />
    </footer>
  )
}

export default Footer