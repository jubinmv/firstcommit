<template>
  <div class="page-log-in">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Disable Landowner</h1>

        <form @submit.prevent="submitForm">
          <div class="field">
            <label>User Email</label>
            <div class="control">
              <input type="text" class="input" v-model="email" />
            </div>
          </div>

          <div class="notification is-danger" v-if="errors.length">
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-dark">Submit</button>
            </div>
          </div>

          <hr />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DisableShopDetails",
  data() {
    return {
      email: "",
      errors: [],
    };
  },
  mounted() {},
  methods: {
    async submitForm() {
      const emails = [this.email];
      // const formData = {
      //   email: [this.email],
      // };

      await axios
        .delete("/admin/shops", { data: { emails } })
        .then((response) => {
          toast({
            message: "Shop Account is successfully disabled",
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
            // this.errors.push("Something went wrong. Please try again");

            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script>
