import InfoSectionCompactItem from "./info-section-compact-item";

/* eslint-disable-next-line */
export interface InfoSectionCompactProps {}

export function InfoSectionCompact(props: InfoSectionCompactProps) {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/4123707/pexels-photo-4123707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-blend-multiply sm:bg-fixed bg-zinc-800 bg-cover bg-center bg-no-repeat w-full">
      <svg
        className="-translate-y-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220">
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,64L1440,160L1440,0L0,0Z"></path>
      </svg>
      <div id="asiointi" className="relative w-full px-8 py-16 xl:px-0">
        <div className="flex flex-col items-start max-w-6xl mx-auto md:flex-row">
          <h3 className="w-full text-4xl md:mb-0 mb-10 font-extrabold tracking-normal text-white sm:text-5xl md:text-5xl md:pr-10 lg:pr-16 xl:pr-20 md:leading-none md:-mt-2 md:w-1/2">
            Muutamia asiota, joita on hyvä tietää meillä asioidessa!
          </h3>
          <div className="flex flex-col w-full my-5 md:w-1/2 md:mt-0">
            <InfoSectionCompactItem
              title={"Ideat"}
              text={
                "Pienet kuvaideasi voit toimittaa sähköpostiimme. Isot ja monisäikeiset ideat vaativat studiolle saapumista. Älä epäröi kysellä sähköpostitse asioita. Puhelimitse saat meidät kiinni aina, kuin on mahdollista."
              }
              className={"mt-0"}
            />
            <InfoSectionCompactItem
              title={"Varausmaksu"}
              text={
                "Varaus/suunnittelumaksu on 50 €, joka hyvitetään kokonaistyön hinnasta. Meilitse ja puhelimitse voit tehdä alustavan varauksen. Varausmaksu täytyy toimittaa studiolle, tai tilillemme kahta päivää ennen itse tatuointiaikaa."
              }
            />
            <InfoSectionCompactItem
              title={"Peruutus"}
              text={
                "Peruutus tulee suorittaa kahta arkipäivää aiemmin ja se tulee tehdä vain puhelimitse, tai tekstiviestinä. Sairaustapauksissa peruutus tulisi suorittaa vähintään paria tuntia aiemmin."
              }
            />
            <InfoSectionCompactItem
              title={"Hinnat"}
              text={
                "Tatuointihintamme on alkaen 100 €. Työveloituksemme voit suorittaa käteisellä, tilisiirrolla tai mobilepaylla."
              }
            />
          </div>
        </div>
        <hr className="w-[90%] mx-auto my-8 border-orange-400" />
      </div>
      <svg
        className="translate-y-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 170">
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,160L1440,32L1440,320L0,320Z"></path>
      </svg>
    </div>
  );
}

export default InfoSectionCompact;
