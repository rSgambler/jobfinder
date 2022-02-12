<template>
  <div class="container">
    <div class="row">
      <Job v-for="oglas in oglasi" :key="oglas.id" :oglas="oglas"></Job>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase";
import Job from "@/components/Job.vue";
export default {
  name: "poslovi",
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
      query.forEach((doc) => {});
    },
  },
  methods: {
    async getJobs() {
      const query = await db.collection("oglasi").get();

      query.forEach((doc) => {
        this.oglasi.push({
          opisPosla: doc.data().jobDescription,
          nazivPosla: doc.data().jobName,
          kategorija: doc.data().category,
          endTime: doc.data().endTime,
          important: doc.data().important,
          telefon: doc.data().numberOfSubmitter,
          startTime: doc.data().startTime,
          price: doc.data().price,
          submittedBy: doc.data().submittedBy,
          id: doc.id,
        });
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
