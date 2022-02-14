<template>
  <div class="container">
    <div class="row">
      <Job v-for="oglas in oglasi" :key="oglas.id" :oglas="oglas"></Job>
    </div>
  </div>
</template>

<style scoped>
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
  background: rgba(0, 0, 0, 0.85);
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
  color: white;
  font-weight: bold;
  font-size: 20px;
}

.btn {
  color: black;
  width: auto;
  border: 0;
  background: none;
  background-color: #ffc312;
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
import { db } from "@/firebase";
import Job from "@/components/Job.vue";
export default {
  name: "hitniPoslovi",
  data() {
    return {
      opisPosla: "",
      kategorija: "",
      nazivOglasa: "",
      oglasi: [],
    };
  },
  methods: {
    async getJobs() {
      const query = await db.collection("oglasi").get();
      this.oglasi = [];
      query.forEach((doc) => {
        if (doc.data().important) {
          // this.oglasi.push({
          //   opisPosla: doc.data().jobDescription,
          //   nazivPosla: doc.data().jobName,
          //   kategorija: doc.data().category,
          //   endTime: doc.data().endTime,
          //   important: doc.data().important,
          //   telefon: doc.data().numOfUserPosted,
          //   startTime: doc.data().startTime,
          //   price: doc.data().price,
          //   submittedBy: doc.data().userPostedJob,
          //   id: doc.id,
          //   location: doc.data().location,
          //   userAccepted: doc.data().userAccepted,
          //   numOfUserAccepted: doc.data().numOfUserAccepted,
          // });
          this.oglasi.push({ doc: doc.data(), id: doc.id });
        }
      });
    },
  },
  mounted() {
    // Ovo se okida prilikom podizanja komponente
    this.getJobs();
  },
  components: {
    Job,
  },
};
</script>
