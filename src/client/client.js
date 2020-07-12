import { sampleGet } from './apis'
import { DefaultEndpoint } from '../config'

export const getHomePage = () => {
    return sampleGet(DefaultEndpoint).then( res => {
        console.log(res);
        return res
    })
};
