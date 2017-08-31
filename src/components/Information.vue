<template>
    <div class="body">
       <header class="certificate-header" >
           <router-link  :to="{ path: 'certificateList',query:{isjump:false}}" class="header-item"><img class="head-left header-img" src="/src/assets/img/back.png" ></router-link>
           <div class="header-item"><h3 class="head-center">个人资料</h3></div>
       </header>
        <div class="line"></div>
        <form role="form" class="form-horizontal registerfrom zisize">
            <div class="form-group">
                <label  class="col-sm-2 control-label"><nobr>身份证号</nobr></label>
                <div class="col-sm-10" style="padding-left: 40px">
                    <label class="control-label">{{cardid}}</label>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10" style="padding-left: 40px">
                    <label class="control-label">{{name}}</label>
                </div>
            </div>
            <div class="form-group">
                <label for="phone" class="col-sm-2 control-label"><nobr>联系手机</nobr></label>
                <div class="col-sm-10" style="padding-left: 40px">
                    <label class="control-label">{{phone}}</label>
                </div>
            </div>
        </form>
        <div class="line"></div>
        <form role="form" class="form-horizontal registerfrom zisize ">
            <div class="form-group">
                <label for="phone" class="col-sm-2 control-label" ><nobr>更改手机号</nobr></label>
                <div class="col-sm-10" style="padding-left: 40px">
                    <input type="text" name="phone" class="form-control zisize"  style="height: 50px;width:360px" placeholder="请输入手机号码" v-model="newphone" v-validate="'required|phone'">
                    <span v-show="errors.has('phone')" id="phone" class="is-danger">{{ errors.first('phone') }}</span>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label"><nobr>手机验证码</nobr></label>
                <div class="col-sm-10" style="padding-left: 40px" >
                    <input v-model="code" class="form-control zisize" style="height: 50px;width: 150px;float: left" />
                    <button  class="form-control zisize" type="button" style="height: 50px;width: 200px"  @click="getphone()">手机验证码</button>
                </div>
            </div>
            <button  class="form-control inputsize zisize" type="button"   @click="changephone()">确认更改</button>
        </form>
        <div class="line"></div>
        <form role="form" class="form-horizontal registerfrom zisize">
            <div class="form-group" >
                <label for="password" class="col-sm-2 control-label">新密码</label>
                <div class="col-sm-10" style="padding-left: 40px">
                    <input type="text" name="password" class="form-control inputsize zisize" placeholder="请输入密码"  v-model="password" v-validate="'required|password'">
                    <span v-show="errors.has('password')" id="password" class="is-danger">{{ errors.first('password') }}</span>
                </div>
            </div>
            <div class="form-group" >
                <label class="col-sm-2 control-label"><nobr>确认密码</nobr></label>
                <div class="col-sm-10" style="padding-left: 40px">
                    <input type="text" name="cpassword" class="form-control inputsize zisize" placeholder="请输入密码"  v-model="cpassword" @change="affirmPassword()" >
                    <span v-show="isshow">{{affirm}}</span>
                </div>
            </div>
            <button  class="form-control inputsize zisize" type="button"  @click="changepassword()">更改密码</button>
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
            newphone:'',
        }
    },
    created:function () {
            this.getinformation();
    },
    methods:{
        returns:function () {
          /*  this.$router.push({ name: 'list', params: { userId:this.$route.params.userId },query:{isjump:false}});*/
        },
        affirmPassword:function (password,cpassword) {
            if(this.password == this.cpassword){
                return this.isshow = false
            }else {
                this.affirm = '两次输入的密码不一致', this.isshow = true
            }
        },
        getinformation:function () {
            this.$http.post('http://www.embracex.com:8081/user/findone',{
                id:this.$route.params.id,
            },{emulateJSON: true}).then(function (res) {
                this.name=res.body.name;
                this.cardid=res.body.cardid;
                this.phone=res.body.phone
            })
        }
    },
   /* watch: {
        "$route": "getinformation"
    }*/
}
</script>
<style scoped>
   .body{
       margin-right: 0px;
   }
    .line{
        height:1px;
        width:100%;
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

    .head-center{
        text-align: center;
        line-height: 150px;

    }
    .inputsize {
        height: 50px;
        width: 450px;
        padding-left: 5%;
    }
    .certificate-header {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        height: 160px;
        margin: 0px;
        padding: 0px;
        font-size: 1.4em;
        font-family: 微软雅黑;
        background-color: #f8f8f8;
    }
    .header-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
    .header-img{
        width: 150px;
        height: 150px;
    }
    .head-left{
        line-height: 150px;
        float: left;
        padding:35px 30px;
    }
</style>