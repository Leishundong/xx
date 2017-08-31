<template>
    <div id="certificatelist" class="certificate-list">
        <div class="certificate-header">
            <router-link :to="{ path: 'certificateList',query:{isjump:false}}">
                <img class="head-left header-img" src="/src/assets/img/back.png">
            </router-link>
            <div class="header-item"><h1 class="head-center">申请绑定证书</h1></div>
        </div>
        <router-link to="/what">sadasdad</router-link>
        <form method="post" enctype="multipart/form-data" id="tf">
            <div>
                <tr>说明</tr>
                <tr>昂克赛拉就爱看世界大力士科技大厦卡时刻记得拉上看到静安寺来得及奥斯卡来得及</tr>
            </div>
            <div class="box">
                <input name="filename" id="filename"  type="file" capture="camera" accept="image/gif,image/jpeg,image/png" @change="handleFileChange" ref="inputer"  />
                <label for="filename">拍照或选择照片</label>
            </div>
            <div ref="box">
                <img :src="dataUrl"/>
            </div>
        </form>
        <div>
            <button style="margin-left:30% " @click="upimg()">提交上传</button>
        </div>
    </div>

</template>

<script>
    export default {
        created(){

        },
        data () {
            return {
                dataUrl:'',
                filename:'',
                userid:'',
                certificateid:''
            }
        },
        props: {
            value: {
                // 绑定默认的value prop
                default: undefined
            },
        },
        methods: {
            upimg:function () {
                var form = new FormData(document.getElementById("tf"));
                this.$http.post('http://www.embracex.com:8081//binding/tobinding',form,{
                        certificateid:this.$route.params.certId,
                        userid:this.$route.params.userId
                    },
                ).then(function (res) {
                    console.log(res)
                })
            },
            handleFileChange (e) {
                if (typeof e.target === 'undefined') this.file = e[0];
                else this.file = e.target.files[0];
                // 双向绑定
                this.$emit('input', this.file);
                // 文件选择回调 && 两种绑定方式
                this.onChange && this.onChange(this.file, this.file.name);
                this.$emit('onChange', this.file, this.file.name);
                this.imgPreview(this.file);
                this.filename = this.file.name;
                this.resetInput();
            },
            imgPreview (file) {
                let self = this;

                if (!file || !window.FileReader) return;

                if (/^image/.test(file.type)) {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);

                    reader.onloadend = function () {
                        self.dataUrl = this.result;
                    }

                }
            },
        },
    }
</script>
<style scoped>
    * {
        margin: 0px;
        padding: 0px;

    }

    img {

        width:480px;
        height: 480px;
    }
    .box {
        position: relative;
    }
    input {
        position: absolute;
        left: -9999px;
    }
    /* 使label充满整个box*/
    label {
        position: absolute;
        top: 0;left: 0;right: 0;bottom: 0;
        z-index: 10; /* 这个z-index之后说到*/
    }
    .btn{
        margin:auto;
        width: 100px;
        height: 50px;
    }
    .certificate-list {

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
</style>