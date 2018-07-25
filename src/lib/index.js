/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/7/20
 * ======================================== */

import ConvenienceImage from './ConvenienceImage.vue'

ConvenienceImage.install = function (Vue) {
    Vue.component(ConvenienceImage.name, ConvenienceImage)
}

// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(ConvenienceImage);
// }
export default ConvenienceImage