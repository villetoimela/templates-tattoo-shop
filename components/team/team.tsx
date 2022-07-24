import TeamCard from "./team-card";

/* eslint-disable-next-line */
export interface TeamProps {}

export function Team(props: TeamProps) {
  return (
    <div id="artistit" className="w-full h-full -translate-y-2 bg-black">
      <div className="px-4 py-16 mx-auto md:max-w-6xl  lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block mb-4 text-3xl sm:text-5xl  tracking-wider text-white uppercase rounded-full">
            Tutustu artisteihimme
          </p>
          <p className="inline-block  tracking-wider text-white ">
            Käy tutustumassa artistiemme töihin heidän instagramissa!
          </p>
          <hr className="w-full mb-8 mt-4 border-orange-400" />
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-2xl">
          <TeamCard
            imgSrc={
              "https://images.unsplash.com/photo-1628802634987-56dcd0de35e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            name={"John Doe"}
            instagramUrl={"/"}
          />
          <TeamCard
            imgSrc={
              "https://images.unsplash.com/photo-1552627019-947c3789ffb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            }
            name={"Janne Doe"}
            instagramUrl={"/"}
          />
          <TeamCard
            imgSrc={
              "https://images.unsplash.com/photo-1485463598028-44d6c47bf23f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
            }
            name={"Jane Doe"}
            instagramUrl={"/"}
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
