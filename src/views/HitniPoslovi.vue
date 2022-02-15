<template>
  <div class="container">
    <div class="row">
      <Job
        class="razmak"
        v-for="oglas in oglasi"
        :key="oglas.id"
        :oglas="oglas"
      ></Job>
    </div>
  </div>
</template>

<style scoped>
.razmak {
  margin-top: 5%;
}
.container {
  margin-left: 15%;
  margin-top: 50px;
  position: absolute;
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
        if (
          document.important &&
          !document.endTime &&
          document.userAccepted === ""
        ) {
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
