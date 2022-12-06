import Landing from "@/layouts/Landing";
import "@/styles/globals.css";
import "@/styles/lightbulb.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider
            defaultTheme="dark"
            attribute="class"
            enableSystem={false}
            enableColorScheme={false}
            themes={["light", "dark"]}
            storageKey="theme"
        >
            <Landing>
                <Component {...pageProps} />
            </Landing>
        </ThemeProvider>
    );
};
export default App;
