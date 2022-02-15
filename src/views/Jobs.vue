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
<script>
import { db, firebase } from "@/firebase";
import Job from "@/components/Job.vue";
import store from "@/store";
export default {
  name: "poslovi",
  data() {
    return {
      opisPosla: "",
      kategorija: "",
      nazivOglasa: "",
      oglasi: [],
      store,
      pojam: "",
    };
  },
  methods: {
    async getJobs() {
      this.oglasi = [];
      const user = firebase.auth().currentUser;
      const query = await db.collection("oglasi").get();
      query.forEach((doc) => {
        const document = doc.data();
        document.id = doc.id;
        if (!document.endTime && document.userAccepted === "") {
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
