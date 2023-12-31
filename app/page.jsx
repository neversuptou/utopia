import Feed from "@components/Feed";


export const home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discovery & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> Ai-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Utopia is an open-source Ai prompting
            tool for modern world to discover, create
            and share creative prompts
        </p>

        <Feed />
    </section>
  )
}

export default home