import * as httpRequest from '~/utils/httpRequest';

const homeService = async () => {
    try {
        const res = await httpRequest.get('/home', {
            params: {
                page: 1,
            },
        });

        return res.data;
    } catch (error) {
        console.log('Have Error:', error);
    }
};

export default homeService;
