<template>
    <div class="galle" v-for="(pagrilands, index) in ppagriland" :key="index">
  
  <img src="./pxx.avif">
  <div class="desco">Place: {{pagrilands.locationName}}</div>
      <div class="desco">Extend: {{pagrilands.extend}} Acer</div>
      <div class="desco">Price: {{pagrilands.price}}</div>
      <div class="desco">Advance Amount: {{pagrilands.advance}}</div>
      <div><a href="Postedagrilandedit"><button  style="margin-left: 30%; margin-bottom: 2%;" class="button is-dark">Edit Details</button></a></div>

  
  </div>
  
  </template>
  <script>
  import axios from "axios";
  import { toast } from "bulma-toast";
  export default {
  name: "displayland",
  data() {
      return {
          ppagriland: []
      };
  },
  mounted() { 
      this.fetchData()
  },
  methods: {
      async fetchData() {
          
          await axios
              .get("http://localhost:8080/api/users/posted/postedagri")
              .then((response) => {
                 this.ppagriland = response.data
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
  height: 390;
  }
  
  
  
  div.desco {
  padding: 2px;
  text-align:left;
  font-weight: 600;
  color: aqua;
  }
  </style>
  