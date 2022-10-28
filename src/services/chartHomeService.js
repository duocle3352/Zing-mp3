import * as httpRequest from '~/utils/httpRequest';

const chartHomeService = async () => {
    try {
        const res = await httpRequest.get('charthome');

        return res.data;
    } catch (error) {
        console.log('Have Error:', error);
    }
};

export default chartHomeService;
