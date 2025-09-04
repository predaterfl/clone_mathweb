import type { ReactNode } from "react";
import styles from "./styles.module.scss";

type MainLayoutProps = {
    children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
    const { wapLayout, container } = styles;

    return (
        <main className={wapLayout}>
            <div className={container}>{children}</div>
        </main>
    );
}

export default MainLayout;
