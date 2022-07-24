import InfoSectionBottom from "./info-sectiob-bottom";
import InfoSectionTop from "./info-section-top";


/* eslint-disable-next-line */
export interface InfoSectionProps {}

export function InfoSection(props: InfoSectionProps) {
  return (
    <div
      id="tietoa"
      className="bg-[url('https://images.unsplash.com/photo-1552627019-947c3789ffb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80')] bg-blend-multiply bg-opacity-75 sm:bg-fixed bg-zinc-900 bg-cover bg-center bg-no-repeat w-full">
      <InfoSectionTop bgImgSrc={""} />

      <svg
        className="-translate-y-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 230">
        <path fill="#000" fillOpacity="1" d="M0,224L1440,32L1440,0L0,0Z"></path>
      </svg>

      <InfoSectionBottom
        imgSrc1={
          "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
        imgSrc2={
          "https://images.unsplash.com/photo-1584978417445-162c85c8d8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
        imgSrc3={
          "https://images.unsplash.com/photo-1557130641-1b14718f096a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
        }
      />
    </div>
  );
}

export default InfoSection;
