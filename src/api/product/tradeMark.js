// 获取品牌管理的数据的模块
import request from '@/utils/request'
// 获取品牌列表接口
// /admin/product/baseTrademark/{page}/{limit}
export const reqTradeMarkList = (page, limit) => request({ url: `/admin/product/baseTrademark/${page}/${limit}`, method: 'get' })

// 处理添加品牌
// /admin/product/baseTrademark/save post 携带两个参数：品牌名称、品牌LOGO

// 修改品牌
// /admin/product/baseTrademark/update put

export const reqAddOrUpdateTradeMark = (tradeMark) => {
    // 带给服务器的数据携带ID---修改
    if (tradeMark.id) {
        return request({ url: '/admin/product/baseTrademark/update', method: 'put', data: tradeMark })
    } else {
        // 新增品牌
        return request({ url: '/admin/product/baseTrademark/save', method: 'post', data: tradeMark })
        // return request.post('/admin/product/baseTrademark/save',tradeMark)
    }
}

// 删除品牌
// /admin/product/baseTrademark/remove/{id} delete
export const reqDeleteTradeMark = (id) => request({url:`/admin/product/baseTrademark/remove/${id}`, method:'delete'})
