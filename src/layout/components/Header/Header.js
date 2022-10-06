import classnames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classnames.bind(style);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <h1>Header</h1>
        </div>
    );
}

export default Header;
