<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-9">
      <div class="tile is-parent">
        <article class="tile is-child">
          <div class="content">
            <div class="form-button">
              <button class="button is-primary" @click="this.formModeToggle">
                {{ formModeButton }}
              </button>
            </div>
            <fieldset
              v-bind="{
                disabled: this.formMode == 'disabled',
              }"
            >
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Email</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="email"
                        v-model="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Mobile Number</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="number"
                        v-model="mobile"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Owner Name</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="ownerFullName"
                        placeholder="Owner Full Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">House Name</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="housename"
                        placeholder="House Name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Role</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-bind:value="role"
                        placeholder="Role"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Image</label>
                </div>
                <div class="field-body">
                  <div class="file is-medium">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" @change="imageFileSelect" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label"> Upload Profile Picture </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Document</label>
                </div>
                <div class="field-body">
                  <div class="file is-medium">
                    <label class="file-label">
                      <input class="file-input" type="file" name="document" @change="documentFileSelect" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label"> Upload ID Proof </span>
                      </span>
                    </label>
                      <span v-if="documentUrl != ''">
                        <a class="ml-4 mt-1" v-bind:href="documentUrl" target="_blank">
                         View Document 
                         </a>
                         </span>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Street Name</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="streetName"
                        placeholder="Street Name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">City</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="cityName"
                        placeholder="City"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">PinCode</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="number"
                        v-model="pincode"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Account Status</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-bind:value="enableStatus"
                        placeholder="Account Status"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Verification Status</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-bind:value="verifyStatus"
                        placeholder="Verification Status"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div> -->

            </fieldset>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-parent">
      <article class="tile is-child">
        <div class="profile-content-div">
          <div class="profile-pic-name">
            <div>
              <img
                class="profile-pic"
                v-bind:src="imageUrl"
              />
            </div>

            <div>
              <h1 class="title is-2">{{ shopName }}</h1>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style>
.form-button {
  text-align: center;
  margin-bottom: 15px;
}
.form-button button {
  font-size: larger;
  padding-left: 20px;
  padding-right: 20px;
}
.profile-pic-name {
  width: fit-content;
  text-align: center;
}
.profile-pic {
  width: 256px;
  height: 256px;
  border-radius: 50%;
}
.profile-content-div {
  display: flex;
  justify-content: right;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formMode: "disabled",
      formModeButton: "Edit",
      housename: "",
      email: "",
      ownerFullName: "",
      mobile: "",
      role: "",
      streetName: "",
      cityName: "",
      pincode: "",
      // enableStatus: "",
      // verifyStatus: "",
      imageUrl: "",
      documentUrl: "",

      image: ""
    };
  },
  mounted() {
    this.getProfile();
  },

  methods: {
    formModeToggle() {
      if (this.formMode == "disabled") {
        this.formMode = "enabled";
        this.formModeButton = "Save";
      } else {
        this.formMode = "disabled";
        this.formModeButton = "Edit";
        this.setProfile();
      }
    },

    imageFileSelect(event){
      this.$store.commit('setIsLoading', true)
      console.log(event)
      var imageFile = event.target.files[0];
      this.createBase64Image(imageFile)
    },

    createBase64Image(fileObject){
      var reader = new FileReader();
      reader.onload = (e) => {
        var imageFileData = e.target.result;
        this.image = imageFileData.slice(imageFileData.indexOf(",")+1);
        console.log(this.image)
        this.uploadImage();
      };
      reader.readAsDataURL(fileObject);
    },

    async uploadImage(){
      var formData = new FormData();
      formData.append("image", this.image)

      const client = axios.create({
        transformRequest: [(data, headers) => {
        // add required "Content-Type" whenever body is defined
        delete headers.common.Authorization
        return data
      }],
      })
      
      await client
      .post("https://api.imgbb.com/1/upload?key=0f6650dbe5d582897945e5dd899204bd", formData)
      .then((response) => {
        console.log(response)
        var imageData = response.data.data;
        this.imageUrl = imageData.url;
      })
      this.$store.commit('setIsLoading', false)
    },

    documentFileSelect(event){
      this.$store.commit('setIsLoading', true)
      console.log(event)
      var documentFile = event.target.files[0];
      this.createBase64Document(documentFile)
    },

    createBase64Document(fileObject){
      var reader = new FileReader();
      reader.onload = (e) => {
        var documentFileData = e.target.result;
        this.image = documentFileData.slice(documentFileData.indexOf(",")+1);
        console.log(this.image)
        this.uploadDocument();
      };
      reader.readAsDataURL(fileObject);
    },

    async uploadDocument(){
      var formData = new FormData();
      formData.append("image", this.image)

      const client = axios.create({
        transformRequest: [(data, headers) => {
        // add required "Content-Type" whenever body is defined
        delete headers.common.Authorization
        return data
      }],
      })
      
      await client
      .post("https://api.imgbb.com/1/upload?key=0f6650dbe5d582897945e5dd899204bd", formData)
      .then((response) => {
        console.log(response)
        var documentData = response.data.data;
        this.documentUrl = documentData.url;
      })
      this.$store.commit('setIsLoading', false)
    },

    async getProfile() {
      axios
        .get("http://localhost:8080/api/users/profiles/editview")
        .then((response) => {
          // var shopData = response.data;
          // this.shopName = shopData.shopName
          this.email = shopData.email;
          this.ownerFullName = shopData.ownerFullName;
          this.mobile = shopData.mobile;
          this.role = shopData.role;
          this.streetName = shopData.streetName;
          this.cityName = shopData.cityName
          this.pincode = shopData.pincode
          this.imageUrl = shopData.imageUrl
          // this.documentUrl = shopData.documentUrl;

        })
        .catch((error) => {
          console.log(error);
        });
    },

    async setProfile() {
      var profileData = {
        email: this.email,
        mobile: this.mobile,
        imageUrl: this.imageUrl,
        documentUrl: this.documentUrl,
        ownerFullName: this.ownerFullName,
        street: this.streetName,
        cityName: this.cityName,
        pincode: this.pincode
      };

        axios
        .put("/user/shop", profileData)
        .then((response) => {
          // var shopData = response.data;
          // this.shopName = shopData.shopName;
          this.email = shopData.email;
          this.mobile = shopData.mobile;
          this.role = shopData.role;
          this.ownerFullName = shopData.ownerFullName;
          this.streetName = profileData.streetName;
          this.cityName = shopData.cityName;
          this.pincode = shopData.pincode;
          // this.enableStatus = shopData.enableStatus;
          // this.verifyStatus = shopData.verifyStatus;
          this.imageUrl = shopData.imageUrl;
          this.documentUrl = shopData.documentUrl;
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
};
</script>
