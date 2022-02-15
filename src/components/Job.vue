<template>
  <div class="col-md-4">
    <div class="card mt-3">
      <div class="product-1">
        <h5 class="title" v-if="!oglas.important">
          Naziv posla: {{ oglas.jobName }}
        </h5>
        <h5 class="title important" v-if="oglas.important">
          Naziv posla: {{ oglas.jobName }} (HITAN POSAO)
        </h5>
        <div class="cost mt-3 info">
          <span class="text1 d-block"
            >Opis posla: {{ oglas.jobDescription }}</span
          >
        </div>
        <div class="cost mt-3 text-dark">
          <span>Cijena posla: {{ oglas.price }} Kn</span>
        </div>
        <div class="cost mt-3 text-dark">
          <span>Lokacija: {{ oglas.location }}</span>
        </div>
        <div class="cost mt-3 text-dark">
          <span>Poslodavac: {{ oglas.userPostedJob }}</span>
        </div>
        <div class="cost mt-3 text-dark">
          <span>Broj Poslodavca: {{ oglas.numOfUserPosted }}</span>
        </div>
      </div>
      <div class="product-1 p-3 text-center text-white mt-3">
        <input
          class="btn"
          type="button"
          value="Preuzmi posao"
          @click="acceptJob"
          v-if="oglas.userPostedJob !== username"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-1 {
  margin-top: 10px;
  margin-left: 20px;
  text-align: left !important;
}
.title {
  color: white;
  margin-top: 10px;
  text-decoration: underline;
}
.row {
  height: 60%;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.card {
  border: none;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.85);
}

.text1 {
  font-size: 15px;
  color: #e8e7e7;
}

.info {
  line-height: 17px;
}

.watch {
  background: #286783;
}

.cost span {
  color: #e8e7e7;

  font-size: auto;
}

.btn {
  color: black;
  width: auto;
  border: 0;
  color: #e8e7e7;
  border: 2px solid #ffc312;
  background: none;
  display: block;
  margin: 15px auto;
  text-align: center;
  outline: none;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.important {
  color: red;
}
</style>
<script>
import { db, firebase } from "@/firebase";
import router from "@/router";

const user = firebase.auth().currentUser;
let displayName = "";
if (!user) {
  displayName = "";
} else {
  displayName = user.displayName;
}
console.log(displayName);

export default {
  props: ["oglas"],
  name: "Job",
  data() {
    return {
      username: displayName,
    };
  },
  methods: {
    async acceptJob() {
      try {
        if (this.username === "") {
          alert("Za pristup ovoj stranici se morate prijavit");
          router.push({ name: "login" }).catch(() => {});
        } else {
          const jobRef = await db.collection("oglasi").doc(`${this.oglas.id}`);
          await jobRef.update({
            userAccepted: this.username,
          });
          alert("Posao uspješno prihvaćen");
        }
      } catch (e) {
        alert(e.message);
      }
    },
  },
};
</script>
