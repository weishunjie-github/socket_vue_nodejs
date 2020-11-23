<template>
    <div class="hello">HelloWorld</div>
</template>

<script>
export default {
    name: "HelloWorld",
    sockets: {
        //在此接收又服务器发送过来的数据 ps：注意此处的方法名要与服务器的发送的事件保持一致才能接收到
        msg: function (val) {
            console.log("接收到服务端消息1111", val);
        }
    },
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
