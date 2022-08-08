// 将四个模块请求的接口函数统一
import * as trademark from './product/tradeMark'
import * as attr from './product/attr'
import * as spu from './product/spu'
import * as sku from './product/sku'
// 权限相关
import permission from './acl/permission'
import  role from './acl/role'
import * as user from './acl/user'

export default{
    trademark,
    attr,
    spu,
    sku,
    // 权限相关
    permission,
    role,
    user
}