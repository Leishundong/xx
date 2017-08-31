
<template>
    <div id="login">
        <h1 class="tital">温州市专业技术人员资格考试证书电子验证系统</h1>
        <h1 class="tital">用户注册</h1>
        <form role="form" class="form-horizontal registerfrom zisize padddiv">
            <div class="form-group">
                <label for="name" class="col-sm-2 control-label">用户名</label>
                <div class="col-sm-10" style="padding-left: 40px">
                    <input v-validate="'required|name'" v-model="name" class="form-control inputsize zisize" name="name" type="text" placeholder="请输入名字">
                    <span v-show="errors.has('name')" id="name" class="is-danger">{{ errors.first('name') }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="cardid" class="col-sm-2 control-label"><nobr>身份证号</nobr></label>
                <div class="col-sm-10" style="padding-left: 40px">
                <input type="text" name="cardid" id="cardid" class="form-control inputsize zisize" placeholder="请输入身份证号" v-model="cardid" v-validate="'required|cardid'">
                    <span v-show="errors.has('cardid')" id="phone" class="is-danger">{{ errors.first('cardid') }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="phone" class="col-sm-2 control-label">手机号</label>
                <div class="col-sm-10" style="padding-left: 40px">
                <input type="text" name="phone" class="form-control inputsize zisize" placeholder="请输入手机号码" v-model="phone" v-validate="'required|phone'">
                <span v-show="errors.has('phone')" id="phone" class="is-danger">{{ errors.first('phone') }}</span>
                </div>
            </div>
            <div class="form-group" >
                <label for="password" class="col-sm-2 control-label">密码</label>
                <div class="col-sm-10" style="padding-left: 40px">
                <input type="text" name="password" class="form-control inputsize zisize" placeholder="请输入密码"  v-model="password" v-validate="'required|password'">
                <span v-show="errors.has('password')" id="password" class="is-danger">{{ errors.first('password') }}</span>
                </div>
            </div>

            <div class="form-group">
                <label  class="col-sm-2 control-label">验证码</label>
                <div class="col-sm-10" style="padding-left: 40px">
                <input class="form-control inputsize zisize" type="text" style="height: 50px;width: 300px;float: left"  v-model="validateCode" />
                <img  id="img"  src="http://www.embracex.com:8081/imagecode" style="height: 45px;width: 100px;margin-left: 50px" @click="getpicture()"/>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label"><nobr>手机验证码</nobr></label>
                <div class="col-sm-10" style="padding-left: 40px" >
                <input v-model="code" class="form-control inputsize zisize"/>
                    <button  class="form-control inputsize zisize" type="button"  @click="getphone()">获取手机验证码</button>
                </div>
            </div>
        </form>
        <div style="margin-left: 46%;margin-top: 5%">
            <input type="button" class="btn btn-primary text-center" style="height: 70px;width: 200px;font-size: 30px" value="提交注册信息" @click="login()" >
        </div>
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
               myData: []
           }
         },
         methods:{
             getpicture:function (){
            document.getElementById("img").src="http://www.embracex.com:8081/imagecode?"+Math.random();
             },
             login:function(){
                    this.$http.post('http://www.embracex.com:8081/user/zhuce', {
                             name:this.name,
                             phone:this.phone,
                             cardid:this.cardid,
                             code:this.code,
                             password:this.password,
                             validateCode:this.validateCode
                         },{emulateJSON: true,credentials:true}
                     ).then(function (res) {
                         alert(res.body.errorinfo);
                     }, function (res) {
                        console.log(2);
                     });
                 /*window.location.href="/src/html/myCertificate.html"*/
             },
             getphone:function () {
                if(this.phone!=''){
                    this.$http.post('http://www.embracex.com:8081/user/code', {
                            phone:this.phone,
                        },{emulateJSON: true}
                    ).then(function (res) {
                        alert(res.body.errorinfo)
                    }, function (res) {
                        alert(2)
                    })
                }else {
                    alert('请先输入手机号码')
                }
             },
            /* affirmPassword:function (password,cpassword) {
                 if(this.password == this.cpassword){

                 }else {
                     this.affirm = '两次输入的密码不一致', this.isshow = true
                 }
             }*/
         }

     }
</script>
<style>
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

</style>