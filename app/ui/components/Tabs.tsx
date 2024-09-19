
import clsx from "clsx"

export default function Tabs(
    {tabOptions, isDefaultTab= true, setIsDefaultTab} : {tabOptions: string[], isDefaultTab: Boolean, setIsDefaultTab: React.Dispatch<React.SetStateAction<Boolean>>}
) {
    return (
        
        <nav className="w-[16.5rem] h-[2.4rem] flex items-center justify-around rounded-2xl bg-darkest mt-4">

        <button className={ clsx(

            "w-[8rem] h-[2rem] rounded-2xl",
            {
                'bg-dark': isDefaultTab
            }
        )} 
        
        onClick={() => setIsDefaultTab(prevState => !prevState)}
        >
            <p>{tabOptions[0]}</p>
        </button>

        <button className={ clsx(

            "w-[8rem] h-[2rem] rounded-2xl",
            {
                'bg-dark': !isDefaultTab
            }
        )} 
        
        onClick={() => setIsDefaultTab(prevState => !prevState)}
        >
            <p>{tabOptions[1]}</p>
        </button>
        </nav>
    )
}