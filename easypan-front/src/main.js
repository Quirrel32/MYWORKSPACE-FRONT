
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//图标
import '@/assets/icon/iconfont.css' 
import '@/assets/base.scss' 
//引入cookies
import VueCookies from 'vue-cookies'


import Verify from '@/utils/Verify' 
import Message from '@/utils/Message'
import Request from '@/utils/Request'
import Confirm from '@/utils/Confirm'

//自定义组件
import Dialog from '@/components/Diglog.vue'
import Avatar from '@/components/Avatar.vue'
import Table from '@/components/Table.vue'
import Icon from '@/components/Icon.vue'


const app = createApp(App)
app.use(ElementPlus)
app.use(router)

app.component('Dialog',Dialog)
app.component('Avatar',Avatar)
app.component('Table',Table)
app.component('Icon',Icon)

//配置全局组件
app.config.globalProperties.Verify = Verify
app.config.globalProperties.Message = Message
app.config.globalProperties.Request = Request
app.config.globalProperties.Confirm = Confirm
app.config.globalProperties.VueCookies = VueCookies
app.config.globalProperties.globalInfo = {
    avatarUrl: '/api/getAvatar/',
    imageUrl: '/api/file/getImage/'
}
app.mount('#app')
