<template>
    <label>
        <input type="checkbox" :checked="check" @change="handleCheckbox">
        <div :class="{done: check}"></div>
        <p>{{placeholder}}</p>
    </label>
</template>

<script>
export default {
    name: 'Checkbox',
    props: ['placeholder'],
    data (){
        return{
            check: false
        }
    },
    methods:{
        handleCheckbox(e){
            this.$emit('UpdateCheckbox', e.target.checked)
            this.check = e.target.checked
        }
    }
}
</script>

<style scoped>
label{
    display: inline-block;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
input{
    display: none;
}
div{
    width: 12px;
    height: 12px;
    display: inline-block;
    border: solid 1px #000;
    background: #fff;
    border-radius: 50%;
}
.done{
    background: green;
}
p{
    font-size: 16px;
    font-weight: 600;
    margin-left: 5px;
}
</style>
