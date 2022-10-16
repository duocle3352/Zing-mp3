import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import { homeService } from '~/services';
import { SliderBox } from '~/components/SliderBox';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    const [banners, setBanners] = useState({});
    // const [newRelease, setNewRelease] = useState({});
    // const [playlist, setPlaylist] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            const result = await homeService();

            setBanners(result.items[0]);
            // setNewRelease(result.items[3]);
            // setPlaylist(result.items[4]);
        };

        fetchApi();
    }, []);

    return (
        <section className={cx('wrapper')}>
            <SliderBox data={banners} />
        </section>
    );
}

export default Home;
