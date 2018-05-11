<template>
    <div id="certificatelist" class="certificate-list">
        <div class="certificate-header">
            <router-link :to="{name:'info',params:{id:user}}"class="header-item"><img class="head-left header-img" src="/src/assets/img/personal.png"/></router-link>
            <div class="header-item"><h3 class="head-center">证书列表</h3></div>
            <div class="header-item"><img class="head-right header-img" src="/src/assets/img/notice.png"/></div>
        </div>

        <div class="bound">
            <div class="bound-tit">
                已绑定证书列表
                <div class="bound-list"  v-for="item in certificateList.bound"  @click="mycert(item)">
                    <div class="list-txt">{{item.certificatename}}</div>
                    <div v-show="false">{{item.id}}</div>
                    <img class="details-icon" src="/src/assets/img/details.png"/>
                </div>
            </div>

            <!--<div class="bound-list" v-for="item in certificateList.bound">
                <div class="list-txt">{{item}}</div>
                <img class="details-icon" src="/src/assets/img/details.png"/>
            </div>-->
        </div>

        <div class="unbound">
            <div class="bound-tit">
             <nobr>  待绑定证书列表</nobr>
                <div to="mycertificate" class="unbound-list" v-for="unitem in certificateList.unbound" @click="notboundcert(unitem)">
                    <div class="list-txt">{{unitem.certificatename}}</div>
                    <img class="details-icon" src="/src/assets/img/details.png"/>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    export default {
        name: 'certificateList',
        created(){
            if(this.$route.query.isjump=='false'){
                return ;
            }
            else{
                this.getlist();
                this.getunlist();
            }

        },
        data () {
            return {
                userid:'',
                user:this.$route.params.userId,
                id:'',
                certid:'',
                items:[],
                certificateList: {
                    bound: ['计算机技术和软件专业技术资格证书', '计算机技术和软件专业技术资格证书', '计算机技术和软件专业技术资格证书'],
                    unbound: ['计算机技术和软件专业技术资格证书', '计算机技术和软件专业技术资格证书']
                }
            }
        },
        methods:{
            mycert:function (item) {
                this.certid = item.id;
                this.$router.push({ name: 'mycert', params: { certId: this.certid ,userid:this.$route.params.userId}})
                },
            notboundcert:function (unitem) {
                this.certid = unitem.id;
                this.$router.push({ name: 'notboundcert', params: { certId: this.certid ,userid:this.$route.params.userId}})
            },
          getlist:function () {
                alert(this.$route.params.userId)
              this.$http.post('http://www.embracex.com:8081/certificate/mycertificate',{
                  userid:this.$route.params.userId,
              },{emulateJSON: true}).then(function (res) {
                  this.certificateList.bound = res.body;
                  console.log(this.certificateList.unbound)
              })
          },
            getunlist:function () {
                this.$http.post('http://www.embracex.com:8081/user/findone',{
                    id:this.$route.params.userId,
                },{emulateJSON: true}).then(function (resp) {
                    this.$http.post('http://www.embracex.com:8081/certificate/fuzzy',{
                        usercardid:resp.body.cardid,
                        name:resp.body.name
                    },{emulateJSON: true}).then(function (re) {
                        this.certificateList.unbound = re.body;
                        console.log(this.certificateList.unbound)
                    });
                })
            }
        }
    }
</script>
<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        font-size: 1.4em;
        font-family: 微软雅黑;
    }
    .certificate-list{
        background-color: #f8f8f8;
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
    .head-center{
        text-align: center;
        line-height: 150px;

    }
    .head-right{
        float: right;
        padding:35px 30px;
    }
    .bound,.unbound{
        font-size: 1.3em;
        background-color: #ffffff;
    }
    .unbound{
        margin-top: 100px;background-color: #ffffff;
    }
    .bound-tit,.unbound-tit{
        margin-top: 10px;
        height: 120px;
        line-height: 120px;
        text-align: center;
        border-top:1px solid #BBB;
        border-bottom:1px solid #BBB;
        margin-bottom: 20px;
    }
    .bound-list,.unbound-list{
        height: 100px;
        line-height: 100px;
        text-align: left;
        border-top:1px solid #BBB;
        border-bottom:1px solid #BBB;
        text-indent:50px;
    }
    .details-icon{
        width: 70px;
        height: 70px;
        margin-top: 16px;
        float: right;
    }
    .list-txt{
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
</style>