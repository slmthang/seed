export default function Loading() {
    return (
        <div className="w-full h-full bg-darkest">
            <main className="w-full h-full">
                <section className={"main-cont" + " w-full min-h-full flex flex-col items-center bg-darkest pt-6"}>
                    <div className="w-11/12 h-48 bg-darker mb-12 rounded-xl skeletonAnimation">

                    </div>
                    <div className="w-11/12 h-48 bg-darker mb-12 rounded-xl skeletonAnimation">

                    </div>
                    <div className="w-11/12 h-40 gap-x-10 flex justify-center">
                        <div className="w-[50%] h-40 bg-darker rounded-xl skeletonAnimation">

                        </div>
                        <div className="w-[50%] h-40 bg-darker rounded-xl skeletonAnimation">

                        </div>
                    </div>
                    

                </section>
            </main>
        </div>
    )
}