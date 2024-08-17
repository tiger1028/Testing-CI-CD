
import { FooterComponent } from "../Footer";
import { HeaderComponent } from "../Header";

interface LayoutProps {
    childeren? : React.ReactNode;
}

export const LayoutComponent: React.FC <LayoutProps> = ( {children} ) => {
    <>
        <HeaderComponent/>
        {children}
        <FooterComponent/>
    </>
}