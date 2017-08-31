import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import { Validator } from 'vee-validate';
Validator.addLocale(zh_CN);
Vue.use(VueRouter);
Vue.use(VueResource);
const config = {
    errorBagName: 'errors', // change if property conflicts.
    fieldsBagName: 'fields',
    delay: 0,
    locale: 'zh_CN',
    dictionary: null,
    strict: true,
    classes: false,
    events: 'blur',
    inject: true
};
Vue.use(VeeValidate,config);
const router=new VueRouter(routerConfig);

Vue.filter('time', function (value) {
    return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
});

const isphone = {
    messages: {
        zh_CN: (field, args) => '必须是11位手机号码',
    },
    validate: (value, args) => {
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
}
const iscardid = {
    messages: {
        zh_CN: (field, args) => '必须是正确的身份证号',
    },
    validate: (value, args) => {
        return  /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
    }
}
const isname = {
    messages: {
        zh_CN: (field, args) => '请输入正确的姓名',
    },
    validate: (value, args) => {
        return  /^([\u4e00-\u9fa5]){2,7}$/.test(value)
    }
}
const ispassword = {
    messages: {
        zh_CN: (field, args) => '密码必须由数字、字符、特殊字符三种中的两种组成，长度不能少于8个字符',
    },
    validate: (value, args) => {
        return  /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,}/.test(value)
    }
}

Validator.extend('phone',isphone);
Validator.extend('cardid',iscardid);
Validator.extend('name',isname);
Validator.extend('password',ispassword);
new Vue({
 el: '#app',
    router,
    render: h => h(App)
 });
/*const login=new Vue({
 el:'#login',
 render: h => h(Login)
 });
 const third=new Vue({
 el:'#third',
 render: h => h(Third)
 });
 const mycertificate=new Vue({
 el:'#mycertificate',
 render: h => h(myCertificate)
 });
 const information=new Vue({
 el:'#information',
 render: h => h(Information)
 });
 const reset=new Vue({
 el:'#reset',
 render: h => h(Reset)
 });
 const certificatelist=new Vue({
 el:'#certificatelist',
 render: h => h(certificateList)
 });*/

