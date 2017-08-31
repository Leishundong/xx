<template>
    <div id="certificatelist">
        <div class="certificate-header">
            <router-link :to="{ path: 'certificateList',query:{isjump:false}}">
                <img class="head-left header-img" src="/src/assets/img/back.png">
            </router-link>
            <div class="header-item"><h1 class="head-center">第三方查证</h1></div>
        </div>
        <div style="font-size: 30px;margin-top: 10px">
            <tr>1.阿里看见的拉斯科技大路上的骄傲了圣诞节</tr>
            <tr>2.阿里看见的拉斯科技大路上的骄傲了圣诞节</tr>
            <tr>3.阿里看见的拉斯科技大路上的骄傲了圣诞节</tr>
            <tr>4.阿里看见的拉斯科技大路上的骄傲了圣诞节</tr>
        </div>
        <div class="line"></div>
        <div class="information">
            <div class="divcss">
                <label style="float: left">证件编号</label>
                <input class="inputcss" type="text" v-model="certificatenumber"/>
            </div>
            <div class="divcss">
                <label style="float: left">姓名</label>
                <input class="inputcss" style="margin-left: 60px" type="text" v-model="name"/>
            </div>
            <div id="select">
                <label style="float: left">证件类型</label>
                <select @change="selectVal">
                    <option v-for="item in selects" v-model="item.value">{{ item.value }}</option>
                </select>
            </div>

        </div>
        <div>
            <input type="button" value="查验" @click="chayan()"/>
            <input type="button" value="二维码查验"/>
        </div>
    </div>
</template>

<script>
    export default {
        created(){

        },
        data () {
            return {
                name: '',
                certificatename: '',
                certificatenumber: '',
                selected: '1',
                selects: [
                    {value: '1'},
                    {value: '2'},
                    {value: '3'}
                ]
            }
        },

        methods: {
            selectVal: function(ele) {
                this.certificatename = ele.target.value;
            },
            chayan: function () {
                this.$http.post('http://www.embracex.com:8081/certificate/findbycertificate', {
                        name: this.name,
                        certificatename: this.certificatename,
                        certificatenumber: this.certificatenumber,
                    }, {emulateJSON: true,}
                ).then(function (res) {
                    alert(res.body.errorinfo)
                }, function (res) {
                    alert(2)
                })
            }
        },
    }
</script>
<style scoped>
    .line {
        height: 1px;
        width: 100%;
        background: #3c3c3c;
        overflow: hidden;
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
        font-size: 30px;
        text-align: center;
        margin-left: 20%;
        padding-left: 50px;
        padding-top: 30px;
    }

    .divcss {
        padding-top: 20px;
    }

    .inputcss {
        width: 300px;
    }
</style>