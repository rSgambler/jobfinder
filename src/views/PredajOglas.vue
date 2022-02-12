<template>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-8 forma_za_predaj_oglas">
          <form>
            <div class="col-8">
              <label for="kategorija" class="form-label">Kategorija</label>
              <select class="form-select" id="kategorija" v-model="kategorija">
                <option selected value="kucniLjubimci">Kućni ljubimci </option>
                <option value="posloviSOrudem">Poslovi s oruđem</option>
                <option value="kosnjaTrave">Košnja Trave</option>
                <option value="farbanje">Farbanje</option>
              </select>
            </div>
            <div class="mb-3 col-4">
              <label for="nazivOglasa" class="form-label">Naziv Oglasa</label>
              <input
                type="text"
                class="form-control"
                id="nazivOglasa"
                v-model="nazivOglasa"
                required
              />
            </div>
            <div class="mb-3 col-12">
              <label for="opisPosla" class="form-label">Opis Posla</label>
              <input
                type="text"
                class="form-control"
                id="opisPosla"
                v-model="opisPosla"
                required
              />
            </div>
            <div class="mb-3 col-12">
              <label for="cijenaPosla" class="form-label">Cijena posla</label>
              <input
                type="number"
                class="form-control"
                id="cijenaPosla"
                v-model="price"
                required
              />
            </div>
            <div class="mb-3 col-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="hitanPosao"
                  v-model="hitanPosao"
                />
                <label class="form-check-label" for="hitanPosao">
                  Hitan Posao
                </label>
              </div>
            </div>
            <input
              type="button"
              class="btn btn-primary"
              @click="submitJob"
              value="Predaj Oglas"
            />
          </form>
        </div>
      </div>
    </div>
  </body>
</template>
<style scoped>
.forma_za_predaj_oglas {
  border: 2px solid #000000;
  border-radius: 24px;
  margin-top: 25%;
  margin-left: 25%;
  background: #d1e7df;
}
</style>

<script>
import store from "@/store";
import { firebase, db } from "@/firebase";

export default {
  name: "predajOglas",
  data() {
    return {
      opisPosla: "",
      kategorija: "",
      nazivOglasa: "",
      price: null,
      userPhone: "",
      username: "",
      store,
      jobs: [],
      hitanPosao: false,
    };
  },
  methods: {
    async getJobs() {
      try {
        const query = await db.collection("oglasi").get();
        query.forEach((doc) => {
          this.jobs.push(doc.data());
        });
        console.log(this.jobs);
        const userQuery = await db.collection("users").get();
        userQuery.forEach((doc) => {
          if (doc.data().email === store.currentUser.email) {
            this.userPhone = doc.data().phoneNumber;
            this.username = doc.data().username;
          }
        });
      } catch (e) {
        alert(e.message);
      }
    },
    async submitJob() {
      try {
        const oglas = await db.collection("oglasi").add({
          jobDescription: this.opisPosla,
          startTime: Date.now(),
          category: this.kategorija,
          jobName: this.nazivOglasa,
          important: this.hitanPosao,
          submittedBy: this.username,
          endTime: "",
          numberOfSubmitter: this.userPhone,
          price: this.price,
        });
        this.opisPosla = this.nazivOglasa = "";
        this.price = "";
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    // Ovo se okida prilikom podizanja komponente
    this.getJobs();
  },
};
</script>
