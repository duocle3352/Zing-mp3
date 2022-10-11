import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './SearchResultTitle.module.scss';

const cx = classNames.bind(style);

function SearchResultTitle({ title }) {
    return <div className={cx('result-title')}>{title}</div>;
}

SearchResultTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SearchResultTitle;
