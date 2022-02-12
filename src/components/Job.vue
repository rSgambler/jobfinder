<template>
  <div class="col-md-4">
    <div class="card mt-3">
      <div class="product-1 align-items-center p-2 text-center">
        <h5 class="title">{{ oglas.nazivPosla }}</h5>
        <div class="mt-3 info">
          <span class="text1 d-block">{{ oglas.opisPosla }}</span>
        </div>
        <div class="cost mt-3 text-dark">
          <span>Cijena posla: {{ oglas.price }}</span>
        </div>
      </div>
      <div class="product-1 p-3 text-center text-white mt-3 cursor">
        <input class="btn" type="button" value="Preuzmi posao" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-1 {
  margin-top: 10px;
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
export default {
  props: ["oglas"],
  name: "Job",
};
</script>
