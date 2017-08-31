<template>
    <div class="certificate-information">
        <div class="certificate-header">
            <router-link :to="{ path: 'certificateList',query:{isjump:false}}">
                <img class="head-left header-img" src="/src/assets/img/back.png">
            </router-link>
            <div class="header-item"><h1 class="head-center">申请寄送证书</h1></div>
        </div>
        <div class="information">
            <div class="information-list certificate-flex">
                <div class="list-txt flex-index">手机号码</div>
                <input class="list-txt flex-item" v-model="phone">
            </div>
        </div>
        <div class="information">
            <div class="information-list certificate-flex">
                <div class="list-txt flex-index">证书状态</div>
                <textarea v-model="address"></textarea>
            </div>
        </div>
        <button @click="sends()">提交</button>
    </div>

</template>

<script>
    export default {
        created(){

        },
        data () {
            return {
                phone: '',
                address: '',
                dataUrl: '',
                filename: '',
                userid: '',
                certificateid: ''
            }
        },
        methods: {
            sends:function () {
                this.$http.post('http://www.embracex.com:8081/expressage/addexpressage',{
                    certificateid:this.$route.params.certId,
                    userid:this.$route.params.userId,
                    phone:this.phone,
                    address:this.address
                },{emulateJSON: true}).then(function (res) {
                    console.log(res)
                })
            }
        }
    }
</script>
<style scoped>
    @import "//at.alicdn.com/t/font_392558_zm4kfoowbq6nipb9.css";


    .certificate-information {
        background-color: #f8f8f8;
    }
    .header-img {
        width: 150px;
        height: 150px;
    }
    .head-left {
        line-height: 150px;
        float: left;
        padding: 35px 30px;

    }

    .head-center {
        margin-left: 25%;
        line-height: 150px;
        font-size: 3.2em;

    }

    .certificate-header {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height: 150px;
        background-color: #f8f8f8;
    }

    .header-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
    .information {
        background-color: #f0f0f2;
    }
    .information-list {
        height: 80px;
        line-height: 100px;
        text-align: left;
        border-top: 1px solid #BBB;
        border-bottom: 1px solid #BBB;
        text-indent: 50px;
        background-color: #ffffff;
    }
    .certificate-flex {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .list-txt {
        font-size: 30px;
        float: left;
    }
    .flex-index {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        float: left;
    }
    .flex-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 3;
    }

</style>