<script lang="ts">
import typing from "$lib/typewriter"
import {onMount} from 'svelte';
let Name:string = "Hello, I am Abhi";
let Text:string[] = ["Code", "Cube", "Create", "Design"];
let Hello:Element;
let About:Element;
onMount(() => {
    typing( Name, x => Hello.textContent = x)
    multiTyping( Text, y => About.textContent = y)
});


</script>


<div class="intro">
    <div class="Hello" bind:this={Hello}></div>
    <img src = "/pfp.png" alt="Me" >
    <div class="about">I like to
        <div class="multi-text" bind:this={About}></div>
    </div>
</div>


<style>
    .Hello {
        color: #fff;
        font-family: Nova Mono, monospace;
        font-size: 5vw;
        border-right: 0.3rem solid rgba(255,255,255,.75);
        /* make width as wide as text */
        height: fit-content;
        height: -moz-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        /* animation of cursor */
        animation-delay: 0.5s;
        animation: cursor 500ms steps(13) infinite normal;
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2 ;
        grid-column-end: 2;
    }

    .intro {
        max-width: 50%;
        display: grid; 
        grid-template-columns: auto;
        grid-template-rows: auto;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        justify-items: center;
    }
        
    
    img {
        max-width: 25%;
        grid-row: 1/ 1;
        grid-column: 3/ 2;
        animation: fadeIn 2s;
        clip-path: circle(50.0% at 50% 50%);
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


