<template>
    <div id="reset">
        <header >
            <img src="/src/assets/img/back.png" style="float: left" @click="returns()">
            <h1 style="text-align: center">忘记密码</h1>
        </header>
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
            <div class="form-group" >
                <label class="col-sm-2 control-label">验证码</label>
                <div class="col-sm-10" style="padding-left: 40px ;">
                    <input type="text" class="form-control zisize"
                           style="height: 50px;width: 300px;float: left" v-model="validateCode"/>
                    <img id="img" src="http://www.embracex.com:8081/imagecode" style="height: 45px;width: 100px;margin-left: 50px" @click="getpicture()" />
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
                <label class="col-sm-2 control-label"><nobr>确认密码</nobr></label>
                <div class="col-sm-10" style="padding-left: 40px">
                    <input type="text" name="cpassword" class="form-control inputsize zisize" placeholder="请输入密码"  v-model="cpassword" @change="affirmPassword()" >
                    <span v-show="isshow">{{affirm}}</span>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label"><nobr>手机验证码</nobr></label>
                <div class="col-sm-10" style="padding-left: 40px" >
                    <input v-model="code" class="form-control zisize" style="height: 50px;width: 150px;float: left" />
                    <button  class="form-control zisize" type="button" style="height: 50px;width: 200px"  @click="getphone()">手机验证码</button>
                </div>
            </div>
            <div class="form-group" style="padding-left:30% ; padding-top: 60px">
                <input type="button" class="btn btn-primary text-center button table-hover" style="width: 150px" value="修改密码" @click="rest()">
            </div>
        </form>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                changepicture:'',
                isshow: false,
                affirm:'',
                password:'',
                cpassword:'',
                myform: {},
                code:'',
                validateCode:'',
                name:'',
                phone:'',
                cardid:'',
            }
        },
        methods:{
            returns:function () {
                window.history.back()
            },

            affirmPassword:function (password,cpassword) {
                if(this.password == this.cpassword){

                }else {
                    this.affirm = '两次输入的密码不一致', this.isshow = true
                }
            },
            getphone:function () {
                    this.$http.post('http://www.embracex.com:8081/user/checkcode', {
                            cardid:this.cardid,
                        },{emulateJSON: true}
                    ).then(function (res) {
                        alert(res.body.errorinfo)
                    }, function (res) {
                        alert(2)
                    })

            },
            rest:function () {
                    this.$http.post('http://www.embracex.com:8081/user/forgetpassword', {
                        cardid:this.cardid,
                        password:this.password,
                        code:this.code,
                        validateCode:this.validateCode
                        },{emulateJSON: true,credentials:true}
                    ).then(function (res) {
                        alert(res.body.errorinfo)
                    }, function (res) {
                        alert(2)
                    })
                },
            getpicture:function (){
                document.getElementById("img").src="http://www.embracex.com:8081/imagecode?"+Math.random();
            },
        }
    }
</script>
<style>
    .line{
        margin-top: 40px;
        margin-left: 3%;
        height:1px;
        width:95%;
        background:#3c3c3c;
        overflow:hidden;
    }
    .registerfrom {
        margin-top:50px;
        margin-bottom: 50px;
        padding-left: 20%;
    }

    .zisize {
        font-size: 30px;
    }

    .padddiv {

    }

    .inputsize {
        height: 50px;
        width: 450px;
        padding-left: 5%;
    }
</style>