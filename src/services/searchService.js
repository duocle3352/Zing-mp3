import * as httpRequest from '~/utils/httpRequest';

const searchService = async (key) => {
    try {
        const res = await httpRequest.get('/search', {
            params: {
                keyword: key,
            },
        });

        return res.data;
    } catch (error) {
        console.log('Have Error:', error);
    }
};

export default searchService;
