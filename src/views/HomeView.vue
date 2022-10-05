<template>
<section class="banner grid layout">
	<h1 class="title flex align-items-center">Get online week 2021</h1>
	<span class="description flex align-items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a molestie turpis. Orci varius natoque.</span>
	<a href="#" class="cta cta-link primary color-red">Get involved now!</a>
</section>

<section class="info grid">
	<img src="../assets/images/banner-2.jpg" alt="Charity description image">
	<div class="text flex f-column justify-content-s-a">
		<h2>We are a social change charity, helping people to improve their lives through digital.</h2>
		<p class="m-t-1 m-b-1">We tackle the most pressing issues of our time, working with partners in thousands of communities accross the UK and further afield.</p>
		<a href="#" class="cta cta-link alternative width-20 color-white">Learn more about us</a>
	</div>
</section>

<section class="help">
	<div class="wrapper flex f-column justify-content-s-a">
		<h3>How can we help you?</h3>
		<p class="m-t-1 m-b-1">Let us know who you are and what you're looking for, and we'll help get you to the right place.</p>
		<form @submit.prevent class="info-panel flex align-items-center justify-content-center">
			<label for="entity">I am</label>
			<select name="entity" id="entity">
				<option v-for="(item, index) in entityOptions" :key="index" value="{{item.value}}">{{ item.label }}</option>
			</select>
			<label for="want">and I want</label>
			<select name="want" id="want">
				<option v-for="(item, index) in wantOptions" :key="index" value="{{item.value}}">{{item.label}}</option>
			</select>
			<button class="action-button cta-link">Start now</button>
		</form>
	</div>
</section>

<section class="what-we-do">
	<div class="wrapper flex f-column justify-content-s-a">
		<h3>What do we do?</h3>
		<p class="m-t-1 m-b-1">You might not have heard of us, but we're the people behind the following impactful programmes.</p>
		<div class="cards grid">
			<div class="card flex f-column justify-content-s-a"  v-for="(card, index) in cards" :key="index">
				<h3>{{ card.title }}</h3>
				<p>{{ card.description }}</p>
				<a href="#" class="cta cta-link primary black-border color-red">{{ card.cta }}</a>
			</div>
		</div>
		<a href="#" class="cta cta-link primary color-red width-25 align-self-center m-t-1">More about what we do</a>
	</div>
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
			],
			entityOptions: [
				{ label: 'an individual', value: 'individual' },
				{ label: 'a charity', value: 'charity' },
				{ label: 'a business', value: 'business' }
			],
			wantOptions: [
				{ label: 'to learn', value: 'learn' },
				{ label: 'to make', value: 'make' },
				{ label: 'to hire', value: 'hire' }
			]
		};
	}
};
</script>
<style lang="scss">
// Importing page specific css only on the page itself to improve site performance
@import '../assets/scss/pages/home.scss';
</style>
