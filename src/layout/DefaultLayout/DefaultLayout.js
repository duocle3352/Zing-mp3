import classnames from 'classnames/bind';
import { Header } from '../components/Header';
import LeftBar from '~/layout/components/LeftBar/LeftBar';
import style from './DefaultLayout.module.scss';

const cx = classnames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container', 'grid')}>
            <LeftBar />
            <div className={cx('content')}>
                <Header />
                <div className={cx('main')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
