import { Header } from '../components/Header';
import { LeftBar } from '../components/LeftBar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <LeftBar />
            <div className="container">{children}</div>
        </>
    );
}

export default DefaultLayout;
