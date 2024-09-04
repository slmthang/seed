
export default function Page() {
    return (
        <div className="w-full h-full bg-darkest">
            <main className="w-full h-full">
                <section className="w-screen h-14 flex items-center pl-2">
                    <p className="text-xl font-semibold">Good Morning, Luffy!</p>
                </section>
                <section className={"main-cont" + " w-full min-h-[calc(100vh-2.5rem)] flex flex-col items-center bg-darkest pt-6"}>
                    <div className="w-11/12 h-32 bg-darker mb-12 rounded-xl">

                    </div>
                    <div className="w-11/12 h-32 bg-darker mb-12 rounded-xl">

                    </div>
                    <div className="w-11/12 h-32 gap-x-10 flex justify-center">
                        <div className="w-[40%] h-32 bg-darker rounded-xl">

                        </div>
                        <div className="w-[40%] h-32 bg-darker rounded-xl">

                        </div>
                    </div>
                    

                </section>
            </main>
        </div>
    )
  }