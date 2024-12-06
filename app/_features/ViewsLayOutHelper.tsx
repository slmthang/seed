/* ########################################### Client Component ########################################### */

'use client';

/* ########################################### Modules ########################################### */

// remote

// local
import NavBar from '../dfl/NavBar';

/* ########################################### ViewLayOutHelper ########################################### */

export default function ViewLayOutHelper({
    children
}: {
    children?: React.ReactNode;
}) {
    // const [sideNav, setSideNav] = useState<boolean>(false);

    return (
        <>
            <main
                className={
                    'overflow-hidden relative w-screen h-dvh justify-center items-center flex '
                    // (sideNav ? 'ml-[60%]' : '')
                }
            >
                {/* <MenuBar/> */}

                {children}

                <NavBar />
            </main>
        </>
    );
}
