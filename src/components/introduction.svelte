<script lang="ts">
	import typing from '$lib/typewriter';
	// no taxation without representation
	// ^ js sounded cool rlly means nthn though
	//dont worry about that function being oppressed, it's just a typing animation 
	import { onMount } from 'svelte';
	let Name: string = 'Hello, I am Abhi';
	let phrase: string = 'I like to';
	let Text: string[] = ['Code', 'Run', 'Swim', 'Learn'	 ];
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
	<img src="/pfp.png" alt="Me" class = "pfp"/>
	<div class="About">
		<div class="phrase" bind:this={Phrase} />
		<div class="Hobbies" bind:this={Hobbies} />
	</div>
    <div class="scrollsign"></div>  
</div>


<!-- I am a perfectionist, so don't ask why everythings so perfect(jk) -->
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
		margin-bottom: 25%;
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
		scroll-snap-align: start;
  		max-width: 50%;
	    display: grid;
 	    grid-template-columns: auto;
   		grid-template-rows: auto auto auto; /* one row for each grid item */
    	justify-items: center;
    	white-space: nowrap;
    	min-height: 100vh;
		gap: 5px;
		align-items: start;
		position: relative;
	}
</style>
