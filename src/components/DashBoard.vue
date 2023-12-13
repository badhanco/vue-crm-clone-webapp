<template>
    <div class="maincontent">
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <div class="neworder" style="background-color: rgb(57,129,141);">
                        <div class="newordericon">
                            <img src="../assets/icons8-list-view-50.png" alt="">
                        </div>
                        <div class="newordertext">
                            <p style="font-weight: 200;">New Order</p>
                           <p>120</p> 
                        </div>

                        <div class="iIcon">
                            <img src="../assets/icons8-i-24.png" alt="">
                        </div>
                        
                    </div>
                </b-col>
                <b-col>
                    <div class="neworder"  style="background-color: rgb(243,175,150);">
                        <div class="newordericon" style="background-color: rgb(84,185,209);">
                            <img src="../assets/icons8-new-product-50.png" alt="">
                        </div>
                        <div class="newordertext">
                            <p style="font-weight: 200;">User Registration</p>
                           <p>780</p> 
                        </div>

                        <div class="iIcon">
                            <img src="../assets/icons8-i-24.png" alt="">
                        </div>
                        
                    </div>
                </b-col>
                <b-col>
                    <div class="neworder" style="background-color: rgb(209,216,219);">
                        <div class="newordericon" style="background-color: rgb(241,157,51);">
                            <img src="../assets/new-product.png" alt="">
                        </div>
                        <div class="newordertext">
                            <p style="font-weight: 200;">Unique Visitors</p>
                           <p>78</p> 
                        </div>

                        <div class="iIcon">
                            <img src="../assets/icons8-i-24.png" alt="">
                        </div>
                        
                    </div>
                </b-col>
                <b-col>
                    <div class="neworder" style="background-color: rgb(198,51,97);">
                        <div class="newordericon"  style="background-color: rgb(84, 185, 209);"   >
                            <img src="../assets/icons8-wall-50.png" alt="">
                        </div>
                        <div class="newordertext">
                            <p style="font-weight: 200;">Bounce Rate</p>
                           <p>53%</p> 
                        </div>

                        <div class="iIcon">
                            <img src="../assets/icons8-i-24.png" alt="">
                        </div>
                        
                    </div>
                </b-col>
            </b-row>

            <b-row class="smallrow">
                <b-col> <SolarEmploymentChart /></b-col>
                <b-col> <EggYolkCompositionChart/></b-col>
            </b-row>

            <b-row class="bigrow">
                <b-col><Mobile/></b-col>
                <b-col><CO2EmissionsChart/></b-col>

            </b-row>
        </b-container>
        
    </div>
</template>

<script>

import SolarEmploymentChart from '../Charts/SolarEmploymentChart.vue';
import WorldPopulationChart from '../Charts/WorldPopulationChart.vue';
import EggYolkCompositionChart from '../Charts/EggYolkCompositionChart.vue';
import Mobile from '../Charts/Mobile.vue';
import CO2EmissionsChart from '../Charts/CO2EmissionsChart.vue';

export default {

    components: {
        SolarEmploymentChart,
        WorldPopulationChart,
        EggYolkCompositionChart,
        Mobile,
        CO2EmissionsChart
    },

};
</script>

<style>

    .maincontent {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 20px;
    }

    #b-col{
        padding: 20px;
    }

    .neworder{
     
        width: 100%;
        height: 100%;
        color: white ;
        display: flex;
        flex-direction: row;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .newordericon{
        margin-top: 18px;
        margin-left: 15px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: rgb(246,195,68);
    }

    .newordericon img{
        width: 22px;
        height: 22px;
        margin-left: 7px;
        margin-top: 6px;
    }

    .newordertext p{
        margin: 0;
    }

    .newordertext{
        padding: 10px;
    }

    .iIcon{
        padding: 10px;
        margin-left: auto;
        margin-top: 10px;
    }

    .iIcon img{
        width: 22px;
        height: 22px;
    }

    .smallrow{
        margin-top: 20px;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    }

    .bigrow{
        border-radius: 6px;
        margin-top: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }



</style>