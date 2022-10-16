import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import style from './SliderBox.module.scss';

const cx = classNames.bind(style);

function SliderBox({ data }) {
    const [sliderCount, setSliderCount] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const sliderRef = useRef();

    useEffect(() => {
        if (data?.items) {
            setSliderWidth(sliderRef.current.offsetWidth);
        }
    }, [data, windowWidth]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });
    }, []);

    useEffect(() => {
        const handle = setInterval(() => {
            if (data?.items?.length && sliderCount < -(data.items.length - 4)) {
                setSliderCount(0);
            } else {
                setSliderCount(sliderCount - 1);
            }
        }, 3000);

        return () => {
            clearInterval(handle);
        };
    }, [sliderCount, data]);

    const handleControlSlider = (type) => {
        if (type === 'left') {
            if (sliderCount > -1) {
                setSliderCount(-(data.items.length - 3));
            } else {
                setSliderCount(sliderCount + 1);
            }
        } else {
            if (sliderCount < -(data.items.length - 4)) {
                setSliderCount(0);
            } else {
                setSliderCount(sliderCount - 1);
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <button
                className={cx('gallery-control', 'br-999')}
                onClick={() => handleControlSlider('left')}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <ul
                className={cx('gallery', 'row')}
                style={{ transform: `translateX(calc(${sliderCount} * ${sliderWidth}px))` }}
            >
                {data?.items &&
                    data.items.map((item) => (
                        <li className={cx('col', 'l-4', 'm-6')} key={item.encodeId} ref={sliderRef}>
                            <Link to={'./'} className={cx('gallery-link')}>
                                <img className={cx('gallery-img')} src={item.banner} alt="banner" />
                            </Link>
                        </li>
                    ))}
            </ul>
            <button
                className={cx('gallery-control', 'gallery-control__right', 'br-999')}
                onClick={() => handleControlSlider('right')}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

SliderBox.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SliderBox;
