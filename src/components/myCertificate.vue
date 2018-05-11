<template>
    <div class="certificate-information">
        <div class="certificate-header">
            <div class="header-item"><i class="head-left iconfont icon-icon-yxj-arrow-left" @click="returns()"/></div>
            <div class="header-item"><h3 class="head-center">证书信息:</h3></div>
            <div class="header-item"><i class="head-right iconfont icon-xiaoxi"/></div>
        </div>

        <div class="information">
            <div class="information-list certificate-flex">
                <div class="list-txt flex-index">持有人姓名:</div>
                <div class="list-txt flex-item">{{this.certificateInformation.name}}</div>
            </div>
        </div>

        <div class="information">
            <div class="information-list certificate-flex">
                <div class="list-txt flex-index">身份证号:</div>
                <div class="list-txt flex-item">{{this.certificateInformation.cardid}}</div>
            </div>
        </div>

        <div class="information">
            <div class="information-list certificate-flex">
                <div class="list-txt flex-index">出生年月:</div>
                <div class="list-txt flex-item">{{this.certificateInformation.birthdate}}</div>
            </div>
        </div>

        <div class="information">
            <div class="information-list certificate-flex">
                <div class="list-txt flex-index">证书编号:</div>
                <div class="list-txt flex-item">{{this.certificateInformation.certificatenumber}}</div>
            </div>
        </div>

        <div class="information">
            <div class="information-list certificate-flex">
                <div class="list-txt flex-index">发证机构:</div>
                <div class="list-txt flex-item">{{this.certificateInformation.issuanceagencies}}</div>
            </div>
        </div>

        <div class="information">
            <div class="information-list certificate-flex">
                <div class="list-txt flex-index">批准日期:</div>
                <div class="list-txt flex-item">{{this.certificateInformation.approvalofdate}}</div>
            </div>
        </div>

        <div class="information">
            <div class="information-list certificate-flex">
                <div class="list-txt flex-index">签wqwdqwdqwd</div>
                <div class="list-txt flex-item">{{this.certificateInformation.issuanceoftime}}</div>
            </div>
        </div>

        <div class="information">
            <div class="information-list certificate-flex">
                <div class="list-txt flex-index">证书状态:</div>
                <div class="list-txt flex-item">{{this.certificateInformation.bindingtype}}</div>
            </div>
        </div>

        <div class="r">
            <button class="foot-btn" @click="tosend()"><i class="iconfont icon-ems foot-icon"></i>申请寄送</button>
        </div>

    </div>
</template>

<script>
    export default {
        created: function () {
            this.findcertificate();
        },
        data () {
            return {
                iconIf: true,
                certificateInformation: {
                    certificatename: '',
                    name: '',
                    cardid: '',
                    birthdate: '',
                    certificatenumber: '',
                    issuanceagencies: '',
                    approvalofdate: '',
                    issuanceoftime: '',
                    bindingtype: ''
                }
            }
        },
        methods: {
            tosend: function () {
                this.$router.push({
                    name: 'send',
                    params: {userId: this.$route.params.userid, certId: this.$route.params.certId}
                })
            },
            returns: function () {
                window.history.back()
            },
            findcertificate: function () {
                this.$http.post('http://www.embracex.com:8081/certificate/findbyid', {
                    id: this.$route.params.certId
                }, {emulateJSON: true}).then(function (res) {
                    this.certificateInformation = res.body,
                        console.log(this.certificateInformation)
                })
            }
        },
    }
</script>
<style scoped>
    @import "//at.alicdn.com/t/font_392558_zm4kfoowbq6nipb9.css";

    * {
        margin: 0px;
        padding: 0px;
        font-size: 38px;
        font-family: 微软雅黑;
    }

    .r {
        width: 100%;
        position: fixed;
        bottom: 0;
        height: 100px;
        margin-left: 260px;
    }

    .foot-btn {
        width: calc(50% - 4px);
        line-height: 130px;
        text-align: center;
        background-color: #FFFFFF;
        border: 2px #BBBBBB solid;
        color: #0d0d0d;
        float: left;
        font-size: 45px;
    }

    .foot-icon {
        float: left;
        font-size: 80px;
        padding-left: 80px;
    }

    .certificate-information {
        background-color: #f8f8f8;
    }

    .information {
        background-color: #f0f0f2;
    }

    .head-left {
        font-size: 60px;
        line-height: 150px;
        float: left;
        padding-left: 30px;
    }

    .head-center {
        text-align: center;
        line-height: 150px;
        font-size: 50px;
    }

    .head-right {
        font-size: 80px;
        float: right;
        line-height: 150px;
        padding-right: 30px;
    }

    .information-list {
        height: 100px;
        line-height: 100px;
        text-align: left;
        border-top: 1px solid #BBB;
        border-bottom: 1px solid #BBB;
        text-indent: 50px;
        background-color: #ffffff;
    }

    .list-txt {
        font-size: 1em;
        float: left;
    }

    .certificate-header {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height: 150px;
    }

    .header-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }

    .certificate-flex {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }

    .certificateInformation-tit {
        height: 120px;
        line-height: 120px;
        margin-bottom: 12px;
    }

    .certificateInformation-foot {
        margin-top: 8px;
    }

    .flex-index {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }

    .flex-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 3;
    }

    .list-icon {
        float: right;
        padding-right: 30px;
        font-size: 60px;
    }
</style>