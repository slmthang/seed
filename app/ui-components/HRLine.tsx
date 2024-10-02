
export default function HRLine(
    {text='Or'} : {text?:string}
) {
    return (
        <div className="relative flex py-5 items-center w-[90%]">
            <div className="flex-grow border-t border-dark"></div>
            <span className="flex-shrink mx-4 text-light font-thin">{text}</span>
            <div className="flex-grow border-t border-dark"></div>
        </div>
    )
}