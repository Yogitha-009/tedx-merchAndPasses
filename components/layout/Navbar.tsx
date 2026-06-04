export default function Navbar() {
  return (
    <nav className="navbar bg-[#F9F8F6] px-4 md:px-8 lg:px-16 flex w-full h-4 sm:h-6 md:h-8 lg:h-12 xl:h-16 items-center justify-between">
        <div className="flex gap-1 md:gap-2 lg:gap-4">
            <img className="w-5 h-5" src="/globe.svg" alt="Globe"/>
            <div className="
            flex
            text-xs sm:text-sm
            font-medium
            leading-5
            tracking-[2.1px]
            uppercase
            text-[#171717]
            ">
            <h1 >TEDX</h1>
            <h1 className="text-[#E62B1E]">X</h1>
            <h1 >TERRA INCOGNITA</h1>
            </div>
      </div>
      <ul className="
        text-[#79716B] 
        flex
        font-family: 'Consolasas'
        font-small
        uppercase
        leading-4
        tracking-[1.2px]
        text-xs sm:text-sm
        gap-2 md:gap-4 lg:gap-6
        ">
        <li><a href="/">ARCHIVE</a></li>
        <li><a href="/">PROGRAM</a></li>
        <li><a href="/">ACQUISITIONS</a></li>
      </ul>
    </nav>
  );
}