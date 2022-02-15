<template>
  <div class="container">
    <div class="row">
      <b-navbar-nav class="razmak" right>
        <b-nav-item>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Pretraži Poslove"
            v-model="pojam"
          />
        </b-nav-item>
        <b-nav-item class="razmak">
          <input
            type="button "
            class="btn btn-warning"
            @click="filterJobs"
            value="Pretraži"
          />
        </b-nav-item>
      </b-navbar-nav>
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
        console.log(document.userPostedJob);
        if (!document.endTime) {
          this.oglasi.push(document);
        }
      });
    },
  },
  computed: {
    async filterJobs() {
      const query = await db
        .collection("oglasi")
        .where("opisPosla", "==", this.pojam);
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
  width: 50%;
  display: inline-block;
}
</style>
