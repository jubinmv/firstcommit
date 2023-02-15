<template>
        <div class="galle" v-for="(land, index) in farmlands" :key="index">
    
<img src="../px.jpeg">
<div class="desco">Place: {{land.locationName}}</div>
        <div class="desco">Description: {{land.description}}</div>
        <div class="desco">Extend: {{land.extend}} Acer</div>
        <div class="desco">Price: {{land.price}}</div>
        <div class="desco">Survey Number: {{land.survey_number}}</div>
        <div class="desco">Owner Name: Jubin </div>
        <div class="desco">Advance Amount: {{land.advance}}</div>
        <center> <button class="button is-dark" @click="payment()" style="margin-bottom: 5px;">Lease Now</button></center>



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
        payment(){
            var options = {
        key:"rzp_test_MPdJcuMk6vG4v9",
        key_secret:"0mWj1ntojikDS52B8mkVqLW4",
        currency:"INR",
        name:"WEIZEN MART",
        description:"for test purpose",
        handler:function(response){
            console.log(response.razorpay_payment_id);

            fetch("http://localhost:8080/views/checkout", {
                
                body:JSON.stringify({
                  userId:userid._id,
                  address:{
                    firstName: userId.firstName,
                    lastName: userId.lastName,
                    email: userId.email,
                    phone: userId.phone,
                    address:address,
                    locality:locality,
                    pincode:pincode,
                    city:city,

                    
                  },
                
                 
                
                })
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.error) {
                    console.log(data.error);
                  } 
                })
                .catch((err) => {
                  console.log(err);
                });
                //toast.success("Order Placed Successfully")
    
            toast.success("Payment successfull")
            navigate("/products")
        },
        prefill:{
            name:user.firstName,
            email:user.email,
            contact:user.phone,
        },
        notes:{
            address:"Razorpay Corporate Office"
        },
       };
        var pay = new window.Razorpay(options);
        pay.open();
    
        },

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
    padding: 2px;
    text-align:left;
    font-weight: 600;
    color: aqua;
}
</style>
