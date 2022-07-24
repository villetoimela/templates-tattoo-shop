

/* eslint-disable-next-line */
export interface CtaSimpleProps {}

export function CtaSimple(props: CtaSimpleProps) {
  return (
    <div className="relative block py-28 overflow-hidden leading-6 text-left bg-black">
      <div className="w-full max-w-3xl px-8 mx-auto leading-6 text-left sm:px-12 md:px-8 xl:px-12">
        <div
          id="ota-yhteytta"
          className="relative w-full leading-6 text-center xl:flex-grow-0 xl:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
          <div className="box-border text-3xl font-semibold text-white uppercase">
            HIISI TATTOO
          </div>
          <div className=" mx-[40%] opacity-75 border-2 border-orange-400"></div>
          <div className="mt-1 mx-[45%] opacity-75 border-2 border-orange-400"></div>
          <h2 className="box-border mx-0 mt-6 mb-0 font-sans text-3xl font-bold leading-tight text-gray-100 md:text-6xl">
            Toteutetaan unelmiesi tatuointi
          </h2>
          <hr className="w-[90%] mx-auto my-8 border-orange-400" />{" "}
          <p className="text-white mb-20 mt-20 text-xl">
            Lähetä viestiä suoraan
            sähköpostiimme:{" "}
            <p className="pt-3 text-2xl pb-3 text-orange-400">
              <a href="mailto:john.doe@hiisi.tattoo">john.doe@hiisi.tattoo</a>
            </p>
            tai soita: <a href="tel:040 123 4567">040 123 4567</a>
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default CtaSimple;
