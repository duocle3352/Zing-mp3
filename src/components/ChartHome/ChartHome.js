import classNames from 'classnames/bind';
import { useState, useEffect, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { chartHomeService } from '~/services';
import images from '~/assets/images';
import { MediaItem } from '~/components/MediaItem';
import { Button } from '../Button';
import { Loading } from '../Loading';
import style from './ChartHome.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const cx = classNames.bind(style);

function ChartHome() {
    const [chart, setChart] = useState({
        chartItems: [],
        chartTop: {},
        totalScore: 0,
        times: [],
        line1: [],
        line2: [],
        line3: [],
    });

    const [weekChart, setWeekChart] = useState({});

    // fetch api
    useEffect(() => {
        const fetchApi = async () => {
            const result = await chartHomeService();
            const [key1, key2, key3] = Object.keys(result.RTChart.chart.items);

            setChart({
                chartItems: result.RTChart.items,
                totalScore: result.RTChart.chart.totalScore,
                times: result.RTChart.chart.times,
                chartTop: { key1, key2, key3 },
                line1: result.RTChart.chart.items[key1],
                line2: result.RTChart.chart.items[key2],
                line3: result.RTChart.chart.items[key3],
            });

            setWeekChart(result.weekChart);
        };

        fetchApi();
    }, []);

    // get 3 song top
    let newChart;
    if (chart.chartItems.length > 0) {
        newChart = chart.chartItems.slice(0, 3);
    }

    let chartSongList;
    if (newChart && chart.chartTop) {
        const chartSong1 = newChart.find((item) => {
            return item.encodeId === chart.chartTop.key1;
        });

        const chartSong2 = newChart.find((item) => {
            return item.encodeId === chart.chartTop.key2;
        });

        const chartSong3 = newChart.find((item) => {
            return item.encodeId === chart.chartTop.key3;
        });

        chartSongList = { chartSong1, chartSong3, chartSong2 };
    }

    const handleData = (input) => {
        const result = score.map((label) => {
            const res = input.find((item) => {
                return item.hour === label;
            });

            return res.counter;
        });

        return result;
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const score = chart.times.map((item) => item.hour);
    const labels = chart.times.map((item) => `${item.hour}:00`);
    const data = {
        labels,
        datasets: [
            {
                label: chartSongList?.chartSong1.title,
                data: handleData(chart.line1),
                borderColor: '#4a90e2',
                backgroundColor: 'white',
            },
            {
                label: chartSongList?.chartSong2.title,
                data: handleData(chart.line2),
                borderColor: '#50e3c2',
                backgroundColor: 'white',
            },
            {
                label: chartSongList?.chartSong3.title,
                data: handleData(chart.line3),
                borderColor: '#e35050',
                backgroundColor: 'white',
            },
        ],
    };

    const renderWeekChart = (local) => (
        <Link className={cx('week-chart-link')} to="./">
            <img className={cx('week-chart-img')} src={local?.cover} alt="weekChart" />
        </Link>
    );

    return (
        <>
            <div className={cx('wrapper')}>
                {/* bg */}
                <div className={cx('bg')} style={{ backgroundImage: `url(${images.bgChart})` }} />
                <div className={cx('sub-bg')} />
                {/* title */}
                <div className={cx('title')}>
                    <Link className={cx('title__main')}>#zingchart</Link>
                    <Link className={cx('title__btn', 'br-999')}>
                        <FontAwesomeIcon icon={faPlay} />
                    </Link>
                </div>
                {/* chart top */}
                <div className={cx('row')}>
                    {/* top 3 */}
                    <div className={cx('list-item', 'col', 'l-5')}>
                        {newChart ? (
                            newChart.map((song, index) => {
                                const rate = Math.round((song.score / chart.totalScore) * 100);

                                return (
                                    <div className={cx('item')} key={song.encodeId}>
                                        <MediaItem
                                            item={song}
                                            isPlayIcon
                                            rateNumber={index + 1}
                                            rate={`${rate}%`}
                                            medium
                                        />
                                    </div>
                                );
                            })
                        ) : (
                            <Loading />
                        )}

                        <div className={cx('more-btn')}>
                            <Button outline white medium size14>
                                Xem thêm
                            </Button>
                        </div>
                    </div>
                    {/* chart */}
                    <div className={cx('chart', 'col', 'l-7')}>
                        <Line options={options} data={data} />
                    </div>
                </div>
            </div>

            {/* week chart */}
            <div className={cx('week-chart', 'row')}>
                <div className={cx('col', 'l-4')}>{renderWeekChart(weekChart?.vn)}</div>
                <div className={cx('col', 'l-4')}>{renderWeekChart(weekChart?.us)}</div>
                <div className={cx('col', 'l-4')}>{renderWeekChart(weekChart?.korea)}</div>
            </div>
        </>
    );
}

export default memo(ChartHome);
