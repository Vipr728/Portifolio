<script lang="ts">
let Name = "Hello, I am Abhi";
let typedChars = ""; 
let index  = 0;
let typewriter:ReturnType<typeof setInterval>;
const typedChar = () => {
    if(index < Name.length){
        typedChars += Name[index];
        index++
    }else {
        
        clearInterval(typewriter);
    }

   }
 const typing = () => {
    typewriter = setInterval(typedChar, 100);
        
    }

typing()
</script>

<svelte:head>
    <title>Abhinav</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <body>
        <div class="Hello">{typedChars}</div>
    </body>
</section>



<style>
 .Hello {
        color: #fff;
        font-family: Nova Mono, monospace;
        font-size: 5vw;
        border-right: 0.3rem solid rgba(255,255,255,.75);
        /* make width as wide as text */
        width: -moz-fit-content;
        width: fit-content;
        display: table;
        /* animation of cursor */
        animation: cursor 500ms steps(13) infinite normal;
    }

 @keyframes cursor {
    from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
 }
</style>
