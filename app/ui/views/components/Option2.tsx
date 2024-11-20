/* ########################################### Modules ########################################### */

// remote
import clsx from 'clsx';

/* ########################################### Option ########################################### */

export default function Option({
    optionName,
    order
}: {
    optionName: string;
    order?: 'first' | 'last';
}) {
    return (
        <div
            className={clsx(
                'w-full h-[3rem] flex items-center relative border-0 bg-dark-surface-1',
                {
                    'rounded-t-xl': order === 'first',
                    'rounded-b-xl': order === 'last'
                }
            )}
        >
            <h1 className="pl-[1rem]">{optionName}</h1>
        </div>
    );
}
