export const About = () => {
  return (
    <section className="relative bg-black text-center mt-65 text-white overflow-hidden">
      <img
        src="/imgs/diseño/estrellagris.png"
        alt="Decoración estrella izquierda"
        className="absolute left-0 top-1/3 transform -translate-y-1/2 w-1/3 opacity-20 pointer-events-none"
      />
      <img
        src="/imgs/diseño/estrellagris.png"
        alt="Decoración estrella derecha"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 opacity-20 pointer-events-none"
      />

      <div className="text-gray-600 relative z-10 flex flex-col items-center justify-center px-4 py-14">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide uppercase">
          Estudio Serigráfico
        </h1>
        <p className="text-sm md:text-xl font-semibold mt-2 tracking-wider uppercase text-center">
          Procesos hechos a mano en Argentina Buenos Aires
        </p>

        <div className="py-6 w-full max-w-3xl px-2">
          <img
            src="/imgs/diseño/about.webp"
            alt="Sección con collabs y diseños"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 w-full px-4 mb-4">
        <h2 className="text-xl md:text-2xl font-semibold uppercase text-white mb-2">
          Collabs
        </h2>
        <img
          src="/imgs/diseño/collabs.webp"
          alt="Logos de colaboradores"
          className="w-full h-auto max-h-[150px] sm:max-h-[180px] md:max-h-[200px] max-w-[950px] mx-auto object-contain"
        />
      </div>

      <div className="relative z-10 w-full bg-black py-6 px-4">
        {/* Título */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase text-center mb-8 tracking-wide text-gray-600 leading-relaxed">
          Estampas - Diseños personalizados para <br /> marcas, empresas y
          emprendedores
        </h3>

        {/* Contenido centrado con imágenes */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12">
          {/* Columna izquierda */}
          <img
            src="/imgs/diseño/about2.webp"
            alt="Servicios columna izquierda"
            className="w-28 sm:w-32 md:w-40 object-contain"
          />

          {/* Imagen central */}
          <img
            src="/imgs/diseño/remenegra.png"
            alt="Remera personalizada"
            className="w-40 sm:w-48 md:w-64 object-contain"
          />

          {/* Columna derecha */}
          <img
            src="/imgs/diseño/about2.webp"
            alt="Servicios columna derecha"
            className="w-28 sm:w-32 md:w-40 object-contain"
          />
        </div>
      </div>
    </section>
  );
};
