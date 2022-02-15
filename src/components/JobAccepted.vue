<template>
  <div class="col-md-4">
    <div class="card mt-3">
      <div class="product-1 align-items-center p-2 text-center">
        <h5 class="title">{{ oglas.nazivPosla }}</h5>
        <div class="mt-3 info">
          <span class="text1 d-block">{{ oglas.opisPosla }}</span>
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
.finished {
  color: green;
  font-weight: bold;
}

.active {
  color: yellow;
  font-weight: bold;
}

.product-1 {
  margin-top: 10px;
  text-align: left !important;
  margin-left: 10%;
}
.title {
  color: white;
  margin-top: 10px;
}

.product-1 {
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

.watch {
  background: #286783;
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
  display: block;
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
console.log(user.displayName);
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
