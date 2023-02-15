<template>
    <div class="galle" v-for="(pfarmlands, index) in pfarmland" :key="index">
  
  <img src="./px.jpeg">
  <div class="desco">Place: {{pfarmlands.locationName}}</div>
      <div class="desco">Extend: {{pfarmlands.extend}} Acer</div>
      <div class="desco">Price: {{pfarmlands.price}}</div>
      <div class="desco">Advance Amount: {{pfarmlands.advance}}</div>
      <div><button  style="margin-left: 30%; margin-bottom: 2%;" class="button is-dark">Edit Details</button></div>

  
  </div>
  
  </template>
  <script>
  import axios from "axios";
  import { toast } from "bulma-toast";
  export default {
  name: "displayland",
  data() {
      return {
          pfarmland: []
      };
  },
  mounted() { 
      this.fetchData()
  },
  methods: {
      async fetchData() {
          
          await axios
              .get("http://localhost:8080/api/users/posted/postedfarm")
              .then((response) => {
                 this.pfarmland = response.data
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
  