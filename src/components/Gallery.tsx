export const Gallery = () => {
  return (
    <section className="relative items-center justify-center w-full py-30 bg-[url('/imgs/diseño/estrellas.png')] ">
      <div className="absolute inset-0 bg-black/12" />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-gray-700 text-5xl md:text-4xl font-semibold text-center">
          SERIGRAFÍA & DISEÑO
        </h1>

        <div className="flex items-center justify-center gap-8 ">
          <div className="w-40 h-70 md:w-52 md:h-72 overflow-hidden">
            <img
              src="/imgs/diseño/fo1.png"
              alt="Proceso de Serigrafía"
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col items-center mt-32">
            <div className="w-40 h-56 md:w-52 md:h-56 overflow-hidden">
              <img
                src="/imgs/diseño/fo2.png"
                alt="Persona trabajando en diseño"
                className="w-full h-full"
              />
            </div>

            <img
              src="/imgs/icons/logo.png"
              alt="Logo"
              className="w-28 h-28 md:w-40 md:h-44 object-contain"
            />
          </div>

          <div className="w-40 h-70 md:w-52 md:h-72">
            <img
              src="/imgs/diseño/fo3.png"
              alt="Diseño final"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
