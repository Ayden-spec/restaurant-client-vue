<template>
    <label>
        <p>{{placeholder}}</p>
        <input :type="type" @input="$emit('updateInput', $event.target.value)" :value="value">
    </label>
</template>

<script>
export default {
    name: 'Input',
    props:['value', 'placeholder', 'type'],
}
</script>

<style scoped>
    label{
        border: 1px solid #000;
        border-radius: 10px;
        padding: 2px 6px;
        display: inline-block;
        width: 100%;
    }
    p{
        font-size: 13px;
        font-weight: 500;
    }
    input{
        outline: none;
        border: none;
        background: transparent;
        font-size: 14px;
        font-weight: 600;
    }
</style>
