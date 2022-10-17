import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import { historyData } from './historyData';
import { suggestionData } from './suggestionData';
import { homeService } from '~/services';
import { SliderBox } from '~/components/SliderBox';
import { Popper } from '~/components/Popper';
import { Playlist } from '~/components/Playlist';
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
            {/* banner */}
            {banners?.items ? <SliderBox data={banners} /> : <h1>Loading...</h1>}

            {/* history */}
            <Popper title="Gần đây" link="./">
                {historyData.map((item) => (
                    <div className={cx('history-item', 'col', 'l-1-7')} key={item.id}>
                        <Playlist twoLine data={item} />
                    </div>
                ))}
            </Popper>

            {/* Suggestion */}
            <Popper title="Có Thể Bạn Muốn Nghe" link="./">
                {suggestionData.map((item) => (
                    <div className={cx('suggestion-item', 'col', 'l-2-4')} key={item.id}>
                        <Playlist twoLine data={item} />
                    </div>
                ))}
            </Popper>
        </section>
    );
}

export default Home;
