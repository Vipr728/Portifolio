<script lang="ts">
import Intro from "$components/introduction.svelte";
import AboutMe from "$components/aboutMe.svelte";
import Skillset from "$components/skillset.svelte";
</script>

<svelte:head>
    <title>Abhinav</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <body>
        <Intro  />
        <AboutMe />
        <Skillset />
    </body>
</section>



<style>
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
}
    
</style>
