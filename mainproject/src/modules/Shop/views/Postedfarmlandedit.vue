<template>
    <div class="page-log-in">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h1 class="title">Edit Land Details</h1>
  
          <div class="modal" v-bind:class="{ 'is-active': modalActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Similar Lands</p>
                <button
                  class="delete"
                  aria-label="close"
                  @click="hideSimilarLands"
                ></button>
              </header>
  <!-- 
              <section class="modal-card-body">
                <div class="columns is-multiline">
                  <SimilarProductBox
                    v-for="product in similarLandss"
                    v-bind:key="product.id"
                    v-bind:product="product"
                  />
                </div>
              </section> -->
  
              <!-- <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
              </footer> -->
            </div>
          </div>
  
          <form @submit.prevent="submitForm">
            <div class="field has-addons">
              <div class="control is-expanded" >
  
                <input type="text" class="input" placeholder="Location Name" v-model="LandName" required/>
              </div>
              <!-- <div class="control">
                <a class="button is-info" @click="showSimilarLandss"> Check </a>
              </div> -->
            </div>
  
            <!-- <div class="field">
              <label>Category</label>
              <div class="control">
                <input type="text" class="input" v-model="category" />
              </div>
            </div> -->
  
            <div class="field">
              <div class="control">
                <div class="select" >
                  
                  <select v-model="category" Category required>
                    <option value="" disabled selected hidden>Category</option>
  
                    <option selected value="Agriland">agriland</option>
                    <option value="Estatelandr">farmland</option>
  
                  </select>
                </div>
              </div>
            </div>
          
            <div class="field">
              <!-- <div class="control">
                <input type="text" class="input" v-model="image" />
              </div> -->
              <div class="file">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="resume"
                    @change="imageFileSelect"
                    required/>
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label"> Upload Land Image </span>
                  </span>
                </label>
              </div>
            </div>
  
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Extension Of Land" v-model="mainUnit" required/>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Price Per Acer" v-model="pprice" required />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Description" v-model="saleUnit" required/>
              </div>
            </div>
  
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Survey Number" v-model="weight" required/>
              </div>
            </div>
  
            <div class="field">
              
              <div class="control">
                <input type="text" class="input" placeholder="Total Price" v-model="price" required/>
              </div>
            </div>
  
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Advance Payment Amount" v-model="stock" required />
              </div>
            </div>
  
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Lease Period" v-model="increment" required/>
              </div>
            </div>
  
            <div class="notification is-danger" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </div>
  
            <div class="field">
              <div class="control">
                <button class="button is-dark">Update</button>
              </div>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";

export default {
  name: "AddShopDetails",
  data() {
    return {
      prodName: "",
      category: "",
      image: "",
      mainUnit: "",
      saleUnit: "",
      weight: "",
      price: "",
      increment: "",
      errors: [],
    };
  },
  mounted() {},
  methods: {
    async submitForm() {
      const formData = {
        prodName: this.prodName,
        category: this.category,
        image: this.image,
        mainUnit: this.mainUnit,
        saleUnit: this.saleUnit,
        weight: this.weight,
        price: this.price,
        increment: this.increment,
      };

      await axios
        .post("/user/shop/product/add", formData)
        .then((response) => {
          toast({
            message: "New product successfully added",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: "bottom-right",
          }); 

          //   const toPath = this.$route.query.to || "/cart";

          //   this.$router.push(toPath);
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            this.errors.push("Something went wrong. Please try again");

            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script> 
