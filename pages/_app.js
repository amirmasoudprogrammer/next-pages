import '../styles/globals.css'
import PagesLayout from "../Component/layout/PagesLayout";

function MyApp({Component, pageProps}) {
    return (
        <>
            <PagesLayout>
                <Component {...pageProps} />
            </PagesLayout>
        </>
    )


}

export default MyApp
