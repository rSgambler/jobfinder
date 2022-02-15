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
import { db, firebase } from "@/firebase";
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
      this.oglasi = [];

      const query = await db.collection("oglasi").get();
      query.forEach((doc) => {
        const document = doc.data();
        if (document.important && !document.endTime) {
          document.id = doc.id;
          this.oglasi.push(document);
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
