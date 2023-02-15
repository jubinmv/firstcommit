<template>
      <div class="galle" v-for="(lands, index) in agrilandss" :key="index">
    
<img src="../pxx.avif">
<div class="desco">Place: {{lands.locationName}}</div>
        <div class="desco">Description: {{lands.description}}</div>
        <div class="desco">Extend: {{lands.extend}} Acer</div>
        <div class="desco">Survey Number: {{lands.survey_number}}</div>
        <div class="desco">Owner Name: Jubin </div>
        <div class="desco">Price: {{lands.price}}</div>
        <div class="desco">Advance Amount: {{lands.advance}}</div>
        <center> <div><a href="Agreement"><button class="button is-dark" style="margin-bottom: 5px;">Lease Now</button></a></div></center>



    </div>

    



</template>
<script>
import axios from "axios";
import { toast } from "bulma-toast";
export default {
    name: "displayland",
    data() {
        return {
            agrilandss: []
        };
    },
    mounted() { 
        this.fetchData()
    },
    methods: {
        async fetchData() {
            
            await axios
                .get("http://localhost:8080/api/users/agrilands/agri")
                .then((response) => {
                   this.agrilandss = response.data
                    console.log('response',response);

                    //   const toPath = this.$route.query.to || "/cart";

                    //   this.$router.push(toPath);
                })
                .catch((error) => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`);
                        }
                    } else {
                        // this.errors.push("Something went wrong. Please try again");

                        console.log(JSON.stringify(error));
                    }
                });
        },
    },
};
</script>
<style>
.galle {
    margin: 10px;
    border: 1px solid #ccc;
    float: left;
    width: 400px;
    height: 380;
}



div.desco {
    padding: 2px;
    text-align:left;
    font-weight: 600;
    color: aqua;
}
</style>
