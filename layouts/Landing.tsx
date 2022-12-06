import { Background, Header, Footer } from "@/components";
import React from "react";

type Props = {
    children: React.ReactNode;
};

const Landing = ({ children }: Props) => {
    return (
        <>
            <Background />
            <div className="relative">
                {/* <Header /> */}
                <main>{children}</main>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default Landing;
