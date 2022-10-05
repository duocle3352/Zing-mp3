import { Header } from '../components/Header';

function HeaderLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">{children}</div>
        </>
    );
}

export default HeaderLayout;
