import ExampleSomeFeedCard from "./example-some-feed-card";

/* eslint-disable-next-line */
export interface ExampleSomeFeedProps {}

export function ExampleSomeFeed(props: ExampleSomeFeedProps) {
  return (
    <div id="ajankohtaista" className="-translate-y-1 bg-zinc-900">
      <div id="ajankohtaista" className="w-full pt-32 pb-32 bg-black">
        <div className="sm:px-12 px-3 mx-auto max-w-screen-2xl">
          <div className="text-center ">
            <h2 className="relative inline-block px-5 py-2 mb-5 text-4xl sm:text-5xl text-gray-100">
              <span className="relative uppercase">Ajankohtaista</span>
              <hr className="w-full mb-8 mt-4 border-orange-400" />
            </h2>
            <p className="text-xl text-gray-300 mb-7">
              (Tähän esimerkiksi yrityksen instagram tai facebook feed tai
              vaikkapa blogikirjoituksia)
            </p>
          </div>
          <div className="grid grid-cols-9 sm:grid-cols-12 gap-8">
            <ExampleSomeFeedCard
              imgSrc={
                "https://images.unsplash.com/photo-1624981015342-37a67019b43b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestias iste enim distinctio porro deserunt eligendi unde et mollitia voluptatum, ipsa eum repellat, magnam iure optio aperiam! Facilis, repudiandae et."
              }
              className={"bg-top opacity-90"}
            />
            <ExampleSomeFeedCard
              imgSrc={
                "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non quibusdam enim voluptatum aut similique rerum alias tempore eligendi iusto."
              }
              className={"bg-left opacity-90"}
            />
            <ExampleSomeFeedCard
              imgSrc={
                "https://images.unsplash.com/photo-1596999806318-2eab80a6bba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non quibusdam enim voluptatum aut similique rerum alias tempore eligendi iusto."
              }
              className={"bg-right opacity-90"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleSomeFeed;
