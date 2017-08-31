<template>
    <div id="app">
        <h1 class="tital">温州市专业技术人员资格考试</h1>
        <h2 class="tital">证书电子验证系统</h2>
        <form role="form" class="form-horizontal registerfrom zisize padddiv">
            <div class="form-group">
                <label for="cardid"  class="col-sm-2 control-label" style=""><nobr>身份证号</nobr></label>
                <div class="col-sm-10" style="padding-left: 40px">
                    <input type="text" name="cardid" class="form-control inputsize zisize" placeholder="请输入身份证号"
                           v-model="cardid"
                           v-validate="'required|cardid'">
                    <span v-show="errors.has('cardid')" id="cardid" class="">{{ errors.first('cardid') }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="password" class="col-sm-2 control-label">密码</label>
                <div class="col-sm-10" style="padding-left: 40px">
                    <input type="text" name="password" class="form-control inputsize zisize" placeholder="请输入密码"
                           v-model="password"
                           v-validate="'required|password'">
                    <span v-show="errors.has('password')" id="password" class="">{{ errors.first('password') }}</span>
                </div>
            </div>
            <div class="form-group" >
                <label class="col-sm-2 control-label">验证码</label>
                <div class="col-sm-10" style="padding-left: 40px ;">
                    <input type="text" class="form-control zisize"
                           style="height: 50px;width: 300px;float: left" v-model="validateCode"/>
                    <img id="img" src="http://www.embracex.com:8081/imagecode" style="height: 45px;width: 100px;margin-left: 50px" @click="getpicture()" />
                </div>
            </div>
            <div class="form-group"  style="margin-top: 50px ;padding-left: 90px">
                <!--<router-link to="/certificateList/123" style="padding-left: 40px ; padding-top: 60px">登录</router-link>-->
                <!-- <router-link to="/login" style="padding-left: 40px ; padding-top: 60px">持证人注册</router-link>
                 <router-link to="/reset" style="padding-left: 40px ; padding-top: 60px">忘记密码</router-link>-->
                <input type="button" class="btn btn-primary text-center button table-hover"  value="登录" @click="registers()">
                <input type="button" class="btn btn-primary text-center button table-hover" style="width: 200px" value="持证人注册" @click="login()">
                <input type="button" class="btn btn-primary text-center button table-hover" style="width: 150px" value="忘记密码" @click="rest()">
            </div>
            <div class="checkbox"style="padding-left: 125px; padding-top: 50px" >
                <input type="checkbox" style="height: 30px;width: 40px;">
                <label style="padding-left: 100px">将账号关联到此微信</label>
            </div>
        </form>
        <div class="line"></div>
        <div style="text-align: center">
            <img src=""/>
            <router-link to="/third"><h1>第三方查证证书入口</h1></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                cardid: '330326199410206739',
                password:'lsd1995522',
                validateCode: '',
                id:''
            }
        },
        methods: {
            getpicture: function () {
                document.getElementById("img").src = "http://www.embracex.com:8081/imagecode?" + Math.random();
            },
            registers:function () {
                this.$http.post('http://www.embracex.com:8081/user/login', {
                        cardid:this.cardid,
                        password:this.password,
                        validateCode:this.validateCode
                    },{emulateJSON: true, credentials:true}
                ).then(function (res) {
                        var errorinfo = res.body.errorinfo;
                        if(errorinfo!='图形验证失败'&&errorinfo!='用户名密码不正确'){
                            this.$router.push({ name: 'list', params: { userId: res.body.errorinfo }})
                        }else {
                            alert(res.body.errorinfo)
                        }
                    }
                );
            },
            login: function () {
                this.$router.push({path:'/login'})
            },
            rest: function () {
                this.$router.push({path:'/reset'})
            }
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .tital {
        text-align: center;
    }

    .registerfrom {
        margin-top: 100px;
    }

    .zisize {
        font-size: 30px;
    }

    .padddiv {
        padding-top: 5%;
        padding-left: 20%;
    }

    .inputsize {
        height: 50px;
        width: 450px;
        padding-left: 5%;
    }
    .button{
        width: 100px;
        height: 50px;
        font-size: 30px;
        margin:0px 20px;
    }
    .line{
        margin-top: 40px;
        margin-left: 3%;
        height:1px;
        width:95%;
        background:#3c3c3c;
        overflow:hidden;
    }
</style>