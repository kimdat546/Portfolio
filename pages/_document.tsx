import Document, { Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document {
    render() {
        return (
            <Html className="h-full antialiased">
                <Head />
                <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
