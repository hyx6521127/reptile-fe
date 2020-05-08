import Axios from '../../../utils/Axios'

interface IListParam {
    year: number | undefined
}

export const getList = (params: IListParam) => Axios.getInstance().get('/house/list', {params})