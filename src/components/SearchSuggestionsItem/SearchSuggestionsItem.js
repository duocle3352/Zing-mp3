import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './SearchSuggestionsItem.module.scss';

const cx = classNames.bind(style);

function SearchSuggestionsItem({ title, main }) {
    return (
        <div className={cx('suggestions')}>
            <span className={cx('suggestions-icon')}>
                <FontAwesomeIcon icon={faSearch} />
            </span>
            <span className={cx('suggestions-title')}>
                {main && (
                    <span className={cx('suggestions-sup-title')}>
                        Tìm kiếm
                    </span>
                )}
                {` "${title}"`}
            </span>
        </div>
    );
}

SearchSuggestionsItem.propTypes = {
    title: PropTypes.string.isRequired,
    main: PropTypes.bool,
};

export default SearchSuggestionsItem;
