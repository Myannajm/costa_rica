<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/puravidalogo.png">
      </router-link>
    </div>
    <div id="right-side">
      <router-link to="/how">
        <div class="menu-item browse">
          <p>Moving to Costa Rica</p>
        </div>
      </router-link>
      <router-link to="/experience">
        <div class="menu-item">
          <p>Places to Visit</p>
        </div>
      </router-link>
      <router-link to="/admin">
        <div class="menu-item">
          <p>Add an Experience</p>
        </div>
      </router-link>
    </div>
    <div id="left-side">
      <router-link to="/rental">
        <div class="menu-item">
          <p>Plan Your Stay</p>
        </div>
      </router-link>
      <router-link to="/spanish">
        <div class="menu-item">
          <p>Spanish Phrases</p>
        </div>
      </router-link>
      <router-link to="/comment">
        <div class="menu-item">
          <p>Community Page</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div class="footer">
    <a href="https://github.com/Myannajm/costarica.git">github repository</a>
</div>
</div>
</template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap');
</style>
<script>
export default{
setup(){
},
}
</script>

<style>
* {
  box-sizing: border-box;
}

/* body {
  margin: 50px 100px;

} */

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  background-color: #e3f2fd;
}

#menu a {
  color: gray;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 100px;
}

#right-side {
  margin-top: 7%;
  font-size: large;
  display: flex;
  justify-content: center;
}
#left-side {
  margin-top: 7%;
  font-size: large;
  grid-area: side;
  display: flex;
  justify-content: center;
}
.footer{
	background-color: #e3f2fd;
  color: black;
	display: flex;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	text-align: center;
	justify-content: center;
	align-items: center;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 10px;
}

</style>
