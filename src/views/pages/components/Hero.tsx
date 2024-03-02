export function Hero() {
  return (
    <div
      id="hero"
      className="w-full h-[45vh] md:h-[60vh] flex flex-col justify-center gap-5 items-center"
    >
      <div className="mx-8 md:mx-0 text-center flex flex-col gap-2">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold p-4">
          The React Snap Hooks
        </h1>
        <h2 className="font-semibold text-gray-700 p-4 md:text-lg">
          Custom Hooks reutilizables sin necesidad de descargar dependencias
        </h2>
      </div>
    </div>
  );
}
