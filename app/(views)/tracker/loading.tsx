
export default function Loading() {
    return (
        <div className="w-full h-full bg-darkest">
            <main className="w-full h-full">
                <section className="w-screen min-h-56 pt-5">
                    <div className="w-full flex flex-col justify-center items-center bg-darkest">
                        <div className="w-11/12 h-28 bg-darker rounded-xl skeletonAnimation">
                            <h1>Tracker</h1>
                        </div>
                        <div className="w-11/12 h-10 bg-darker rounded-xl skeletonAnimation mt-5 mb-5">

                        </div>
                    </div>
                </section>
                <section className={"w-full min-h-[calc(100vh-14rem)] flex flex-col items-center bg-dark pb-20"}>
                    <div className="w-screen h-16 flex bg-darker">
                        <div className="w-[50%] h-16 bg-darker ">
                        
                        </div>
                        <div className="w-[50%] h-16 bg-dark">
                        
                        </div>
                    </div>
                    <div className="w-11/12 h-20 bg-darker mt-10 rounded-xl skeletonAnimation">

                    </div>
                    <div className="w-11/12 h-20 bg-darker mt-10 rounded-xl skeletonAnimation">

                    </div>
                    <div className="w-11/12 h-20 bg-darker mt-10 rounded-xl skeletonAnimation">

                    </div>
                    <div className="w-11/12 h-20 bg-darker mt-10 rounded-xl skeletonAnimation">

                    </div>
                    <div className="w-11/12 h-20 bg-darker mt-10 rounded-xl skeletonAnimation">

                    </div>

                </section>
            </main>
        </div>
    )

}