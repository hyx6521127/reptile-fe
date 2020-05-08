import Axios from '../../../utils/Axios'

export const getYearStatistics = () => Axios.getInstance().get('/house/yearStatistics')

export const getSaleStatistics = () => Axios.getInstance().get('/house/cycle')