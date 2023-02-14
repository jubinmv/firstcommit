<template>
  <div class="page-log-in">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Add New  Land Category</h1>

        <form @submit.prevent="submitCategory">
          <div class="field">
            <label>Category Name</label>
            <div class="control">
              <input type="text" class="input" v-model="categoryName" />
            </div>
          </div>
          <div class="field">
              <label>Description</label>
              <div class="control">
                <input type="text" class="input" v-model="Description" />
              </div>
            </div>
  
            

          <div class="field">
            <div class="control">
              <button class="button is-dark">Submit</button>
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
    data(){
        return{
            categoryName: "",
            Description:""
        }
    },

    
    methods: {
        async submitCategory(){
          const payload = {
            description:this.Description,
            category:this.categoryName
          }
            axios
            .post(`http://localhost:8080/api/admin/products/category`,payload)
            .then((response) => {
                console.log(response);
                alert("Successfully added the category")
            })
        }
    }
}
</script>

