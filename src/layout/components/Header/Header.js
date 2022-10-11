import classnames from 'classnames/bind';
import {
    faArrowLeftLong,
    faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Search from '../Search/Search';
import style from './Header.module.scss';

const cx = classnames.bind(style);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-tool')}>
                {/* header control */}
                <button className={cx('page-control__btn')}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>
                <button className={cx('page-control__btn', 'disable')}>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </button>

                {/* search */}
                <Search />
            </div>
            <div className={cx('header-tool')}>
                <div className={cx('theme')}>theme</div>
                <div className={cx('up-load')}>up-load</div>
                <div className={cx('setting')}>setting</div>
                <div className={cx('user')}>user</div>
            </div>
        </div>
    );
}

export default Header;
