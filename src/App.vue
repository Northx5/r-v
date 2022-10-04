<template>
<div class="container">
	<header class="header">
		<h1 class="sr-only">Good Things Foundation</h1>
		<div class="search">
			<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="18px" height="18px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
			<span>Search</span>
		</div>
		<nav aria-label="Call to Action Links" class="cta-links">
			<ul>
				<li>Learn</li>
				<li>Donate</li>
			</ul>
		</nav>
		<div class="logo">
			<img src="src/assets/images/good-things-foundation-logo.png" alt="Good Things Foundation" class="image">
		</div>
		<nav class="main-navigation">
			<ul v-for="(item, index) in getMenuItems" :key="index">
				<li>{{ item.label }}</li>
			</ul>
		</nav>
	</header>
	<main class="content">
		<RouterView />
	</main>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data () {
		return {

		};
	},
	computed: {
		...mapGetters('common', ['getMenuItems'])
	}
};
</script>
<style lang="scss">
.container {
  width: 1440px;
  background-color: var(--c-white);
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: [main-start] 50px [content-start] repeat(12, 1fr) [content-end] 50px [main-end];
  grid-template-rows: repeat(auto-fit, minmax(1px, min-content));
  
  .header {
    grid-column: main-start / main-end;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-block-end: 1rem;
    height: 12rem;
    line-height: 3rem;

  .search {
    margin-left: 5rem;
    grid-row: 1 / 2;
    grid-column: 1 / 4;
    display: flex;
    border-left: 1px solid var(--c-light-gray);
    border-right: 1px solid var(--c-light-gray);
    align-items: center;
    padding-inline-start: 1.6rem;
    width: 10rem;

    & span {
      padding-inline-start: .6rem;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  .cta-links {
    margin-right: 5rem;
    grid-row: 1 / 2;
    grid-column: 6 / -1;
    justify-self: end;
    font-size: 1.3rem;

    ul {
      display: flex;
      text-align: center;
      list-style-type: none;
      margin-block: var(--spacing-0);
      padding-block: var(--spacing-0);
      padding-inline: var(--spacing-0);

      li {
        width: 8rem;
        font-weight: 700;
        

        &:first-of-type {
          border-left: 1px solid var(--c-light-gray);
          border-bottom: 2px solid green;
        }
        &:nth-of-type(2) {
          color: var(--c-white);
          background-color: var(--c-red)
        }

      }
    }
  }

  .logo {
    margin-left: 5rem;
    height: 9rem;
    grid-row: 2 / 3;
    grid-column: 1 / 5;
    border-top: 1px solid var(--c-light-gray);
    display: flex;
    align-items: center;
    .image {
      height: 6rem;
    }
  }

  .main-navigation {
    display: flex;
    text-align: center;
    list-style-type: none;
    margin-right: 5rem;
    height: 9rem;
    grid-row: 2 / 3;
    grid-column: 5 / 14;
    border-top: 1px solid var(--c-light-gray);
  }
  
  }
  .content {
    grid-column: main-start / main-end;
    display: grid;
    grid-template-columns: [main-start] 50px [content-start] repeat(12, 1fr) [content-end] 50px [main-end];
  }

}
</style>