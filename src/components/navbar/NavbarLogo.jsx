const NavbarLogo = () => {
  return (
    <div className="group relative inline-block">
      <h1 className="text-white text-4xl sm:hidden md:block px-4 py-2 transition-all duration-500 
                     relative z-10 group-hover:scale-110 group-hover:text-blue-500">
        Hitesh Kumar
      </h1>
      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block px-4 py-2 
                     transition-all duration-500 relative z-10 group-hover:scale-110 group-hover:text-blue-500">
        H.K
      </h1>

      {/* Soft Oval Glow Effect */}
      <div className="absolute inset-0 w-full h-full rounded-full opacity-0 
                      group-hover:opacity-100 group-hover:blur-lg group-hover:bg-white/20 
                      transition-all duration-500 z-0"></div>
    </div>
  );
};

export default NavbarLogo;
