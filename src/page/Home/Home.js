import classNames from 'classnames/bind';
import { SliderBox } from '~/components/SliderBox';
import { Popper } from '~/components/Popper';
import { Playlist } from '~/components/Playlist';
import { ChartHome } from '~/components/ChartHome';
import { NewRelease } from '~/components/NewRelease';
import { historyData, chanel1, chanel2, chanel3, listZingChoice } from '~/dataOther';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    return (
        <section>
            {/* banner */}
            <SliderBox />

            {/* history */}
            <Popper title="Gần đây" link="./" showAll>
                {historyData.map((item) => (
                    <div className={cx('col', 'l-1-7')} key={item.id}>
                        <Playlist twoLine data={item} />
                    </div>
                ))}
            </Popper>

            {/* chanel 1 */}
            <Popper title="Có Thể Bạn Muốn Nghe" link="./">
                {chanel1.map((item) => (
                    <div className={cx('col', 'l-2-4')} key={item.id}>
                        <Playlist twoLine data={item} />
                    </div>
                ))}
            </Popper>

            {/* new Release */}
            <NewRelease />

            {/* chanel 2 */}
            <Popper title="Giai Điệu Ký Ức" link="./">
                {chanel2.map((item) => (
                    <div className={cx('col', 'l-2-4')} key={item.id}>
                        <Playlist data={item} />
                    </div>
                ))}
            </Popper>

            {/* chanel 3 */}
            <Popper
                title="Hà Anh Tuấn"
                supTitle="Dành Cho Fan"
                image="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/a/e/9/7ae9d01726dcceef8bd7e8f146820759.jpg"
                link="./"
                imgTitle
            >
                {chanel3.map((item) => (
                    <div className={cx('col', 'l-2-4')} key={item.id}>
                        <Playlist data={item} />
                    </div>
                ))}
            </Popper>

            {/* #zingchart home*/}
            <ChartHome />

            {/* zing choice */}
            {/* <Popper title="Zing Choice" classes={cx('choice-container')}>
                <div className={cx('choice-content')}>
                    {listZingChoice.map((item) => (
                        <div key={item.id} className={cx('choice-item', 'col', 'l-1-7')}>
                            <a href="./" className={cx('choice-link')}>
                                <img
                                    className={cx('choice-img')}
                                    src={item.image}
                                    alt={item.keyName}
                                />
                            </a>
                        </div>
                    ))}

                    <button></button>
                </div>
            </Popper> */}
        </section>
    );
}

export default Home;
