<template>
    <br>

    <div class="galle" v-for="(land, index) in farmlands" :key="index">
    
<img src="../pxx.avif">
        
        <div class="desco">Category Name :{{land.category}}</div>
        <div class="desco">Description:{{land.description}}</div>
        <div class="desco">Place:{{land.locationName}}</div>
        <div class="desco">Extend:{{land.extend}}</div>
        <div class="desco">Price Per Acer{{land.price}}</div>
        <div class="desco">Advance Amount:{{land.advance}}</div>
        <div class="desco">Total Price{{land.totprice}}</div>
        <center> <div><a href="Agreement"><button class="button is-dark" style="margin-bottom: 5px;">Lease Now</button></a></div></center>



    </div>

    



</template>
<script>
import axios from "axios";
import { toast } from "bulma-toast";
export default {
    name: "Addcrop",
    data() {
        return {
            farmlands: []
        };
    },
    mounted() { 
        this.fetchData()
    },
    methods: {
        async fetchData() {
            
            await axios
                .get("http://localhost:8080/api/users/lands/get")
                .then((response) => {
                   this.farmlands = response.data
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
    padding: 5px;
    text-align:left;
    font-weight: 600;
    color: aqua;
}
</style>
