<script lang="ts">
	import typing from '$lib/typewriter';
	import { onMount } from 'svelte';
	let Name: string = 'Hello, I am Abhi';
	let phrase: string = 'I like to';
	let Text: string[] = ['Code', 'Cube', 'Create', 'Design'];
	let Hello: Element;
	let Hobbies: Element;
	let Phrase: Element;
    onMount(async () => {
        await typing.typing(Name, (x) => (Hello.textContent = x), 100)
            .then(async () => {
                await typing.sleep(1600);
                return typing.typing(phrase, (z) => (Phrase.textContent = z), 150);
            })
            .then(async () => {
                await typing.multiTyping(Text, (y) => (Hobbies.textContent = y), 100);
            });
    });
</script>

<div class="Intro">
	<div class="Hello" bind:this={Hello} />
	<img src="/pfp.png" alt="Me" />
	<div class="About">
		<div class="phrase" bind:this={Phrase} />
		<div class="Hobbies" bind:this={Hobbies} />
	</div>
</div>

<style>
	.About .phrase,
	.About .Hobbies {
		display: inline;
	}
	.Hello {
		color: #fff;
		font-family: Nova Mono, monospace;
		font-size: 5vw;
		border-right: 0.3rem solid white;
		/* make width as wide as text */
		height: fit-content;
		height: -moz-fit-content;
		width: -moz-fit-content;
		width: fit-content;
		white-space: nowrap;
		/* animation of cursor */
        animation: cursor 1s step-start 530ms 2 normal forwards;
		grid-row-start: 2;
		grid-row-end: 3;
		grid-column-start: 2;
		grid-column-end: 2;
	}
	.About {
		color: #fff;
		font-family: Nova Mono, monospace;
		font-size: 2vw;
		/* make width as wide as text */
		height: fit-content;
		height: -moz-fit-content;
		width: -moz-fit-content;
		width: fit-content;

		grid-row-start: 3;
		grid-row-end: 4;
		grid-column-start: 2;
		grid-column-end: 2;
		/*fadeIn animation*/
        animation-delay: 2s;
		animation: fadeIn 3s;
	}
	.Hobbies {
		color: #fff;
		font-family: Nova Mono, monospace;
		font-size: 2vw;
		/* make width as wide as text */
		height: fit-content;
		height: -moz-fit-content;
		width: -moz-fit-content;
		width: fit-content;
		white-space: nowrap !important;
		/* animation of cursor */
		border-right: 0.1rem solid rgba(255, 255, 255, 0.75);
		animation-delay: 10s;
        animation: cursor 1015ms steps(1) infinite normal;
		/*grid*/
		grid-row-start: 3;
		grid-row-end: 4;
		grid-column-start: 2;
		grid-column-end: 3;
	}

	.Intro {
		max-width: 50%;
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: auto;
		position: absolute;
		top: 50%;
		right: 50%;
		transform: translate(50%, -50%);
		justify-items: center;
		white-space: nowrap;
	}

	img {
		max-width: 25%;
		grid-row: 1/ 1;
		grid-column: 3/ 2;
		animation: fadeIn 2s;
		clip-path: circle(50% at 50% 50%);
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
			max-width: 0%;
		}
		85% {
			opacity: 0;
			max-width: 0%;
		}
		100% {
			opacity: 1;
			max-width: 25%;
		}
	}
</style>
