<template>
    <div class="newproduct">
        <div class="onemorelayer">
            <div class="newprodtitle">
                <p>
                <h5><i><b>New Order</b></i></h5>
                </p>
                <div class="difftwobuttons">
                    <router-link to="/product"><button style="background-color: gray;"><img
                                src="../assets/icons8-circled-x-50.png" alt=""></button></router-link>
                </div>
            </div>
        </div>
        <div class="forms">
            <div class="innerforms">

                <div class="rows">
                    <b-form-input v-model="text" placeholder="Reference" style="border-radius: 8px;margin-right: 10px;"></b-form-input>
                    <b-form-input v-model="text" placeholder="Price" style="border-radius: 8px;margin-right: 10px;"></b-form-input>
                    <b-form-input v-model="text" placeholder="Product Items" style="border-radius: 8px;margin-right: 10px;"></b-form-input>
                </div>

                <div class="rows">
                    <b-form-input v-model="text" placeholder="Customer" style="border-radius: 8px;margin-right: 10px;"></b-form-input>
                    <b-form-input v-model="number" placeholder="Order Date" style="border-radius: 8px;margin-right: 10px;"></b-form-input>
                    <b-form-input v-model="number" placeholder="Shipped Date" style="border-radius: 8px;margin-right: 10px;"></b-form-input>
                </div>
                <div class="rows">
                    <b-form-input v-model="text" placeholder="Address" style="border-radius: 8px;margin-right: 10px;"></b-form-input>
                    <b-form-input v-model="number" placeholder="City" style="border-radius: 8px;margin-right: 10px;"></b-form-input>
                    <b-form-input v-model="number" placeholder="Pin Code" style="border-radius: 8px;margin-right: 10px;"></b-form-input>
                </div>
                <div class="rows">
                    <b-form-input v-model="text" placeholder="Country" style="border-radius: 8px;margin-right: 10px;"></b-form-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {


    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style >


.innerforms {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: auto;
}

.rows {
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 100%;
}

.forms {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 300px;
    background-color: lightgray;
}


.onemorelayer {
    padding: 20px;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
}

.newproduct {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 20px;
}

.newprodtitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
}

.newprodtitle p {
    margin-top: 10px;
}

.difftwobuttons {
    display: flex;
    flex-direction: row;
    width: 80%;
    height: auto;
    padding: 2px;
    justify-content: flex-end;
    align-items: end;
}

.difftwobuttons img {
    width: 25px;
    height: 25px;
}

.difftwobuttons button {
    border: none;
    width: auto;
    height: auto;
    padding: 6px;
    margin-left: 10px;
    border-radius: 50%;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.difftwobuttons button:focus {
    outline: none;
}

.difftwobuttons button:active {
    transform: scale(0.9);
    background-color: rgb(95, 56, 233);
    color: white;
}

.difftwobuttons button:hover {
    background-color: lightgray;
}
</style>