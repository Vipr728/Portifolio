<script lang="ts">
import typing from "../components/typewriter"
import {onMount} from 'svelte';
import Intro from "../components/introduction.svelte";
let Name:string = "Hello, I am Abhi";
let Hello:Element;
onMount(() => {
    typing( Name, x => Hello.textContent = x)
});


</script>

<svelte:head>
    <title>Abhinav</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <body>
        <Intro />
    </body>
</section>



<style>
    body {
        margin: 0;
        width: 100%;
        height: 100vh;
        display: grid;
        display: -ms-grid;
        background-color: red;
    }

</style>
