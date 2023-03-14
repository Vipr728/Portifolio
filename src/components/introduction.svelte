<script lang="ts">
import typing from "./typewriter"
import {onMount} from 'svelte';
let Name:string = "Hello, I am Abhi";
let Hello:Element;
onMount(() => {
    typing( Name, x => Hello.textContent = x)
});


</script>


<div class="intro">
    <img src = "src\lib\pfp.png" alt="Me" >
    <div class="Hello" bind:this={Hello}></div>
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
        animation: cursor 500ms steps(13) infinite normal;
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2 ;
        grid-column-end: 2;
    }

    .intro {
        background-color: yellow;
        place-self: center;    
        display: grid; 
        grid-template-columns: auto;
        grid-template-rows: auto;
    }
        
    
    img {
        max-width: 25%;
        grid-row-start: 1;
        grid-row-end: 1;
        grid-column-start: 2;
        grid-column-end: 3;
    }


</style>


