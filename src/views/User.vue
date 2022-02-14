<template>
  <div class="page-content page-container" id="page-content">
    <div class="padding">
      <div class="row container d-flex justify-content-center">
        <div class="col-xl-6 col-md-12">
          <div class="card user-card-full">
            <div class="row m-l-0 m-r-0">
              <div class="col-sm-4 bg-c-lite-green user-profile">
                <div class="card-block text-center text-white">
                  <div class="m-b-25">
                    <img
                      src="../assets/user.png"
                      class="img-radius"
                      alt="User-Profile-Image"
                      width="50"
                      height="50"
                    />
                  </div>
                  <h5 class="f-w-600">{{ username }}</h5>
                  <i
                    class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"
                  ></i>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="card-block ">
                  <h4 class="m-b-20 p-b-5 b-b-default f-w-600">Profil</h4>
                  <div class="row">
                    <div class="col-sm-6">
                      <h5 class="m-b-10 f-w-600">Email</h5>
                      <h6 class="text-muted f-w-400">{{ email }}</h6>
                    </div>
                    <div class="col-sm-6">
                      <h5 class="m-b-10 f-w-600">Mobitel</h5>
                      <h6 class="text-muted f-w-400">{{ userPhone }}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="card-header">
                Prihvaćeni poslovi
              </div>
              <JobAccepted
                v-for="oglas in userJobsAccepted"
                :key="oglas.id"
                :oglas="oglas"
              ></JobAccepted>
            </div>
            <div class="mt-4">
              <div class="card-header">
                Završeni poslovi
              </div>
              <JobAccepted
                v-for="oglas in userJobsEnded"
                :key="oglas.id"
                :oglas="oglas"
              ></JobAccepted>
            </div>
            <div class="mt-4">
              <div class="card-header">
                Ponuđeni poslovi
              </div>
              <JobAccepted
                v-for="oglas in userJobsCreated"
                :key="oglas.id"
                :oglas="oglas"
              ></JobAccepted>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.f-w-600 {
  color: black;
}

.m-b-10 {
  color: white;
  text-decoration: underline;
}

.m-b-20 {
  color: white;
}
.opis {
  color: black;
}
.user-card-full {
  width: 50%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  margin-bottom: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.card {
  color: #E8E7E7;
  border-radius: 15px;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  background: rgba(0, 0, 0, 0.85);
  border: none;
  margin-bottom: 30px;
}

.m-r-0 {
  margin-right: 0px;
}

.m-l-0 {
  margin-left: 0px;
}

.user-card-full .user-profile {
  border-radius: 10px 0 0 10px;
}

.bg-c-lite-green {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff8800),
    to(#f1b603)
  );
  background: linear-gradient(to right, #ff8800, #f1b603);
}

.user-profile {
  padding: 20px 0;
}

.card-block {
  padding: 1.25rem;
}

.m-b-25 {
  margin-bottom: 25px;
}

h6 {
  font-size: 14px;
}

.card .card-block p {
  line-height: 25px;
}

@media only screen and (min-width: 1400px) {
  p {
    font-size: 14px;
  }
}

.card-block {
  padding: 1.25rem;
}

.b-b-default {
  border-bottom: 10px solid #e0e0e0;
}

.m-b-20 {
  margin-bottom: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.card .card-block p {
  line-height: 25px;
}

.m-b-10 {
  margin-bottom: 10px;
}

.text-muted {
  color: white !important;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
  font-weight: 500;
}

.m-b-20 {
  margin-bottom: 20px;
}

.m-t-40 {
  margin-top: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.m-b-10 {
  margin-bottom: 15px;
}

.m-t-40 {
  margin-top: 20px;
}

.user-card-full .social-link li {
  display: inline-block;
}

.user-card-full .social-link li a {
  font-size: 20px;
  margin: 0 10px 0 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
</style>

<script>
import { db, firebase } from "@/firebase";
import store from "@/store";
import router from "@/router";
import JobAccepted from "@/components/JobAccepted.vue";
const user = firebase.auth().currentUser;

export default {
  name: "User",
  data() {
    return {
      username: user.displayName,
      email: user.email,
      userPhone: "",
      userJobsAccepted: [],
      userJobsCreated: [],
      userJobsEnded: [],
    };
  },
  methods: {
    async getUser() {
      const userQuery = await db.collection("users").get();
      userQuery.forEach((doc) => {
        if (doc.data().email === store.currentUser.email) {
          this.userPhone = doc.data().phoneNumber;
          this.username = doc.data().username;
        }
      });
    },
    async getAcceptedJobsForCurrentUser() {
      const query = await db.collection("oglasi").get();
      this.userJobsAccepted = [];
      this.userJobsCreated = [];
      this.userJobsEnded = [];
      query.forEach((doc) => {
        const document = doc.data();
        document.id = doc.id;
        if (document.userAccepted === this.username) {
          if (document.endTime) {
            this.userJobsEnded.push(document);
          } else {
            this.userJobsAccepted.push(document);
          }
        }
        if (document.userPostedJob === this.username) {
          this.userJobsCreated.push(document);
        }
      });
    },
  },
  mounted() {
    // Ovo se okida prilikom podizanja komponente
    this.getUser();
    this.getAcceptedJobsForCurrentUser();
  },
  components: {
    JobAccepted,
  },
};
</script>
