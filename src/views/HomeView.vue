<template>
<section class="banner">
	<h2 class="title">Get online week 2021</h2>
	<span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a molestie turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
	<div class="cta">
		<a href="#">Get involved now!</a>
	</div>	
</section>

<section class="info">
	<div class="image"></div>
	<div class="text">
		<p>We are a social change charity, helping people to improve their lives through digital.</p>
		<p>We tackle the most pressing issues of our time, working with partners in thousands of communities accross the UK and further afield.</p>		
		<div class="cta">
			<a href="#">Learn more about us</a>
		</div>
	</div>
</section>

<section class="help">
	<h3>How can we help you?</h3>
	<p>Let us know who you are and what you're looking for, and we'll help get you to the right place.</p>
	<div class="info-panel">
		<span>I am an individual and I want to learn</span>
		<a href="#">Start now</a>
	</div>
</section>

<section class="what-we-do">
	<h3>What do we do?</h3>
	<p>You might not have heard of us, but we're the people behind the following impactful programmes.</p>
	<div class="cards">
		<div class="card"  v-for="(card, index) in cards" :key="index">
			<h4>{{ card.title }}</h4>
			<p>{{ card.description }}</p>
			<a href="#" class="cta">{{ card.cta }}</a>
		</div>
	</div>
	<a href="#" class="">More about what we do</a>
</section>
</template>
<script>
export default {
	data() {
		return {
			cards: [
				{
					title: 'Get online week',
					description: 'Lorem ipsum dolor sit amet',
					cta: 'Read more'
				},
				{
					title: 'Learn my way',
					description: 'Lorem ipsum dolor sit amet',
					cta: 'Read more'
				},
				{
					title: 'Make it click',
					description: 'Lorem ipsum dolor sit amet',
					cta: 'Read more'
				},
				{
					title: 'Digital you',
					description: 'Lorem ipsum dolor sit amet',
					cta: 'Read more'
				}
			]
		};
	}
};
</script>
<style lang="scss" scoped>
.banner {
  grid-column: main-start / main-end;
  display: grid;
  grid-template-columns: [main-start] 50px [content-start] repeat(12, 1fr) [content-end] 50px [main-end];
  grid-template-rows: repeat(12, 1fr);
  height: 35rem;
  background-image: url('../assets/images/banner-1.jpg');

  .title {
    grid-column: content-start / 10;
    grid-row: 3 / span 3;
    background-color: yellowgreen;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 7rem;
  }

  .description {
    line-height: 2rem;
    grid-column: content-start / 8;
    grid-row: 7 / span 3;
    background-color: tan;
    padding: 0 2rem;
    display: flex;
    align-items: center;
  }

  .cta {
    grid-column: content-start / -1;
    grid-row: 11 / 12;
    background-color:teal;
  }

}
.info {
  grid-column: main-start / main-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 25rem;
    .image {
    background-image: url('../assets/images/banner-2.jpg');
    }
    .text {
      background-color: crimson;
    }
}
.help {
  height: 23.5rem;
  grid-column: content-start / content-end;
  background-color: var(--c-light-gray);
  color: var(--c-black);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 3rem 0;
  h3 {
    width: 100%
  }
  .info-panel {
    width: 100%
  }
}
.what-we-do {
  height: 36.5rem;
  grid-column: content-start / content-end;
  background-color: darkorange;
  
  .cards {
    display: flex;
    justify-content: space-between;
    
    .card {
      color: var(--c-black);
      background-color: var(--c-white);
    }
  }
}
</style>
