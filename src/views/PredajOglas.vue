<template>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-8 forma_za_predaj_oglas">
          <form>
            <div class="mb-3 col-8">
              <label for="kategorija" class="form-label">Kategorija</label>
              <select class="form-select" id="kategorija" v-model="kategorija">
                <option selected value="kucniLjubimci" class="dropdown"
                  >Kućni ljubimci
                </option>
                <option value="posloviSOrudem" class="dropdown"
                  >Poslovi s oruđem</option
                >
                <option value="kosnjaTrave" class="dropdown"
                  >Košnja Trave</option
                >
                <option value="farbanje" class="dropdown">Farbanje</option>
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
                class="form-control opis_posla"
                id="opisPosla"
                v-model="opisPosla"
                required
              />
            </div>
            <div class="mb-3 col-6">
              <label for="cijenaPosla" class="form-label"
                >Cijena posla (kn)</label
              >
              <input
                type="number"
                class="form-control"
                id="cijenaPosla"
                v-model="price"
                required
              />
            </div>
            <div class="mb-3 col-6">
              <label for="lokacijaPosla" class="form-label">Lokacija</label>
              <input
                type="text"
                class="form-control"
                id="lokacijaPosla"
                v-model="location"
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
.dropdown {
  background: black;
  color: #e8e7e7;
}
.btn {
  border: 0;
  background: none;
  border: 2px solid #2ecc71;
  margin: 15px auto;
  text-align: center;
  padding: 14px 40px;
  outline: none;
  color: #e8e7e7;
  border-radius: 18px;
  transition: 0.25s;
  cursor: pointer;
}
.form-check-label {
  color: #e8e7e7;
}
.form-select {
  border: 0;
  color: #e8e7e7;
  background: none;
  text-align: center;
  border: 2px solid #3498db;
  outline: none;

  border-radius: 24px;
}
.form-control {
  border: 0;
  background: none;
  text-align: center;
  border: 2px solid #3498db;
  outline: none;
  color: #e8e7e7;
  border-radius: 24px;
}
.forma_za_predaj_oglas {
  border: 2px solid #000000;
  border-radius: 24px;
  margin-top: 150px;
  margin-left: 200px;
  background: rgba(0, 0, 0, 0.85);
}
.form-label {
  color: #e8e7e7;
  float: left;
}
.opis_posla {
  height: 150px;
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
      location: "",
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
          userPostedJob: this.username,
          endTime: "",
          numOfUserPosted: this.userPhone,
          price: this.price,
          location: this.location,
          userAccepted: "",
          numOfUserAccepted: "",
        });
        this.opisPosla = this.nazivOglasa = this.price = this.location = "";
        alert("Oglas uspješno postavljen");
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
