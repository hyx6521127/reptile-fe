import Axios from '../../../utils/Axios'

export const getRecommendStatic = () => Axios.getInstance().get('/recommend/static')