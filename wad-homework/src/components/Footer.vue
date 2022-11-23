<template>
    
<div class="footer">
    <p>Copyright © Group AQ.</p>
    <p>2022</p>
  </div>
</template>
<script>
export default {
    name:'Footer'

};
</script>

<style scoped>
.footer {

overflow: hidden;
position: relative;
bottom: 0;
right: 0;
left: 0;
background-color: dimgray;
box-sizing: border-box;
width: 100%;
margin: 0 !important;
color: #f1f1f1;
display: flex;
justify-content: space-between;
padding-left: 20px;
padding-right: 20px;
}
@media screen and (max-width: 600px ){
    .flex-container{
        display: flex;
        position: absolute;
        flex-direction: column;
        align-items: center;
        top: 20%;
        left: 5%;
        right: 5%;
        transform: translate(-0%, -0%);
        width: 80%;
        height: 300px;
        padding: 10px;
        border-radius: 10px;
        justify-content: center;
    }
}
</style>