import * as httpRequest from '~/utils/httpRequest';

const detailPlaylistService = async (id) => {
    try {
        const res = await httpRequest.get('/detailplaylist', {
            params: {
                id,
            },
        });

        return res.data;
    } catch (error) {
        console.log('Have error:', error);
    }
};

export default detailPlaylistService;
