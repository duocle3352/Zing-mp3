import classnames from 'classnames/bind';
import { Header } from '../components/Header';
import { LeftBar } from '../components/LeftBar';
import style from './DefaultLayout.module.scss';

const cx = classnames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container', 'grid')}>
            <LeftBar />
            <div className={cx('content')}>
                <Header />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
