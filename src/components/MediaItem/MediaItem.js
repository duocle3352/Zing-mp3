import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './MediaItem.module.scss';

const cx = classNames.bind(style);

function MediaItem({ image, name, follow, singName, isSing, isPlaylist }) {
    const newFollow = (follow / 1000).toFixed(0);

    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('media-img', isSing ? 'br-999' : '')}
                src={image}
                alt={name}
            />
            <div>
                <h3 className={cx('media-title')}>{name}</h3>
                {follow ? (
                    <h3 className={cx('media-subtitle')}>
                        {`Nghệ sĩ • ${newFollow}K quan tâm`}
                    </h3>
                ) : (
                    <h3 className={cx('media-subtitle')}>
                        {isPlaylist ? `Playlist • ${singName}` : singName}
                    </h3>
                )}
            </div>
        </div>
    );
}

MediaItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    follow: PropTypes.number,
    singName: PropTypes.string,
    isSing: PropTypes.bool,
    isPlaylist: PropTypes.bool,
};

export default MediaItem;
