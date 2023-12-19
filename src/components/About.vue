<template>
    <div class="aboutsection">
        <div style="display: flex; align-items: center; justify-content: center;">
            <h1>About</h1>
        </div>
        <p style="color: #54b8d1;font-weight:bold;font-size: 20px;font-style: italic;">Vue CRM App Demo</p>
        <p>This demo app is not a real application. There is no fake API as back-end service behind the scene. Its advanced search doesn't work properly. Any data update (create or update record) will not be stored after hard refresh or logout. The main purpose of this demo is just a proof of concept.</p>
    </div>
</template>

<script>
export default {

    data() {
        return {
            
        };
    },
};
</script>

<style>
.aboutsection {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70%;
    padding: 20px;
}
</style>