<template>
  <div class="col-md-6">
    <div class="card mt-3">
      <div class="product-1 p-2">
        <h5 class="title">Naziv posla: {{ oglas.jobName }}</h5>
        <div class=" cost mt-3 text-dark">
          <span>Opis posla: {{ oglas.jobDescription }}</span>
        </div>
        <div class="cost mt-3 text-dark">
          <span>Cijena posla: {{ oglas.price }} Kn</span>
        </div>
        <div class="cost mt-3 text-dark">
          <span>Lokacija: {{ oglas.location }}</span>
        </div>
        <div class="cost mt-3 text-dark">
          <span>Poslodavac:{{ oglas.userPostedJob }}</span>
        </div>
        <div class="cost mt-3 text-dark">
          <span>Broj Poslodavca: {{ oglas.numOfUserPosted }}</span>
        </div>
        <div class="cost mt-3 text-dark">
          <input
            class="btn"
            type="button"
            value="Završi posao"
            @click="endJob"
            v-if="!oglas.endTime && oglas.userPostedJob !== username"
          />
        </div>
        <div class="mt-3 finished" v-if="oglas.endTime">
          <span>ZAVRŠEN</span>
        </div>
        <div class="mt-3 active" v-if="!oglas.endTime">
          <span>U TIJEKU</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.col-md-6 {
  display: inline-block;
}
.finished {
  color: green;
  font-weight: bold;
}

.active {
  color: yellow;
  font-weight: bold;
}

.product-1 {
  margin-top: 20px;
  text-align: left !important;
  margin-left: 10%;
}
.title {
  color: white;
  margin-top: 10px;
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
  background: none;
}

.text1 {
  font-size: 15px;
  color: #cbcbcb;
}

.info {
  line-height: 17px;
}

.cost span {
  color: #e8e7e7;
  font-weight: bold;
}

.btn {
  color: #e8e7e7;
  width: auto;
  border: 2px solid #ffc312;
  background: none;
  margin: 15px auto;
  text-align: center;
  outline: none;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.cursor {
  cursor: pointer;
}
</style>
<script>
import { db, firebase } from "@/firebase";
const user = firebase.auth().currentUser;
export default {
  props: ["oglas"],
  name: "JobAccepted",
  data() {
    return {
      username: user.displayName,
    };
  },
  methods: {
    async endJob() {
      try {
        const jobRef = await db.collection("oglasi").doc(`${this.oglas.id}`);
        const endDate = Date.now();
        await jobRef.update({
          endTime: endDate,
        });
        alert("Posao uspješno završen");
      } catch (e) {
        alert(e.message);
      }
    },
  },
};
</script>
