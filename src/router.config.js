import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Send from './components/Send.vue'
import Third from './components/Third.vue'
import myCertificate from './components/myCertificate.vue'
import Reset from './components/Reset.vue'
import CertificateList from './components/certificateList.vue'
import Information from './components/Information.vue'
import What from './components/What.vue'
import notBoundCertificate from './components/notBoundCertificate.vue'
import Bound from './components/Bound.vue'
export default {
    mode: 'history',
    routes:[
        {path:'/',component:Register},
        {path:'/login',component:Login},
        {name:'send', path:'/send/',component:Send},
        {path:'/third',component:Third},
        {path:'/reset',component:Reset},
        {name:'mycert',path:'/mycertificate/',component:myCertificate},
        {name:'list', path:'/certificateList/',component:CertificateList ,meta:{ keepAlive: true }},
        {name:'info', path:'/information/',component:Information,meta:{ keepAlive: true }},
        {path:'/what',component:What},
        {name:'notboundcert',path:'/notboundcert/',component:notBoundCertificate},
        {name:'bound',path:'/bound/',component:Bound}
]
}