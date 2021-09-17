<template>
  <div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="card mt-3">
                <div class="product-1 align-items-center p-2 text-center"> <img src="https://i.imgur.com/fcRasFv.jpg" class="rounded" width="160">
                    <h5 class="title">Košnja trave</h5>
                    <div class="mt-3 info">
                        <span class="text1 d-block">Potrebna osoba za košnju bla bla...</span>
                    </div>
                    <div class=" cost mt-3 text-dark"> 
                      <span>150Kn</span>
                    </div>
                </div>
                <div class="p-3 bg-danger text-center text-white mt-3 cursor"> 
                    <span class="text-uppercase">Add to cart</span>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mt-3">
                <div class="product-1 align-items-center p-2 text-center"> <img src="https://i.imgur.com/vD8fgks.jpg" class="rounded" width="160">
                    <h5 class="title">Šetnja psa</h5>
                    <div class="mt-3 info">
                        <span class="text1 d-block">Šetnja umiljatog psa rexa bla bla..</span>
                    </div>
                    <div class=" cost mt-3 text-dark"> 
                      <span>100Kn</span>
                    </div>
                </div>
                <div class="watch p-3 text-center text-white mt-3 cursor">
                    <span class="text-uppercase ">Add to cart</span>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mt-3">
                <div class="product-1 align-items-center p-2 text-center"> <img src="https://i.imgur.com/Iy7w1yJ.jpg" class="rounded" width="160">
                    <h5 class="title">Kopanje</h5>
                    <div class="mt-3 info">
                        <span class="text1 d-block">Kopanje vrta 100 kvadrata bla bla..</span> 
                    </div>
                    <div class=" cost mt-3 text-dark"> 
                      <span>2000Kn</span>
                    </div>
                </div>
                <div class=" tshirt p-3 text-center text-white mt-3 cursor">
                    <span class="text-uppercase">Add to cart</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

.title{
  color: white;
  margin-top: 10px;
}

.product-1{
  margin-top: 10px;
}

.row{
    height: 60%;
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}
.card {
    border: none;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.85);
}

.text1 {
    font-size: 15px;
    color: #cbcbcb
}

.info {
    line-height: 17px
}

.watch {
    background: #286783
}

.cost span {
    color: white;
    font-weight: bold;
    font-size: 20px
}

.tshirt {
    background-color: #0012b2
}

.cursor {
    cursor: pointer
}
</style>
