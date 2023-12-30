<script>
  
</script>

<div class="aboutMe">
    <img src="/pfp.png" alt="Me" class = "pfp"/>
    <div class="text">
        <h1>Who is this kid?</h1>
        <p>I'm a 13 year old web dev who's been coding for seven years straight! 
            I'm all about crafting cool digital experiences for people using Vue, Svelte, React with the magic of JavaScript and TypeScript.
             Started out of curiosity, now it's a full-blown love affair with programming.
              Peek at my portfolio to see my journey—from simple projects to the cool tech stuff I'm into now.
             Let's have fun working together making the interwebz a better place! 🚀</p>
    </div>
</div>

<style>
   .aboutMe {
    scroll-snap-align: start;
    max-width: 100%;
    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr; /* one row for each grid item */
    white-space: nowrap;
    min-height: 100vh;
    justify-items: center;
    align-items: center;
   }
   
   .text > p {
    	color: #fff;
		font-family: Nova Mono, monospace;
		font-size: 1.5vw;
		/* make width as wide as text */
       text-align: left;
       padding-left: 10%;
       justify-self: center;
        text-wrap: balance;
                		/*fadeIn animation*/
   }

   .text > h1 {
        color: #fff;
		font-family: Nova Mono, monospace;
		font-size: 3vw;
   } 
   .text {
     grid-row: 1/1;
        grid-column: 2/4;
        text-align: center;
         
   }
	.pfp {
    /* margin-top: 30%; */
		max-width:50%;
		grid-row: 1/ 1;
		grid-column: 1/ 2;
		animation: fadeIn 2s;
		clip-path: circle(50% at 50% 50%);
	}

</style>