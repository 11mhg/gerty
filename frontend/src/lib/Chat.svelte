<script lang="ts">
  import { onMount } from 'svelte/internal';
  import axios from 'axios';
  
  interface Session {
    id: string;
  }

  //Types
  interface MessageFeed {
    name: string;
    message: string;
    color: string;
  }

  let elemChat: HTMLElement;
  
  let messageFeed: MessageFeed[] = [

  ];

  let currentMessage = '';
  let waiting = false;
  let session: Session = { id: '' };
  let apiURL = 'http://localhost:8080'

  async function resetChat(){
    console.log("Resetting chat!");
    messageFeed = [];
    currentMessage = '';
    waiting = false;
    session = { id: '' };
  };

	function scrollChatBottom(behavior?: ScrollBehavior): void {
		elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
	}
  
  function addMessage(is_human: boolean = true): void {
    if (is_human && currentMessage.length == 0) {
      return;
    };
    name = "Assistant";
    if (is_human) {
      name = "Human";
    };
    const newMessage = {
      name: name,
      message: currentMessage,
      color: "variant-soft-primary"
    };

    messageFeed = [...messageFeed, newMessage];

    currentMessage = '';
    setTimeout(async ()=>{
      waiting = true;
      scrollChatBottom();
      await queryLLM();
      waiting = false;
    }, 0);
  }

  function onPromptKeydown(event: KeyboardEvent): void {
    if (['Enter'].includes(event.code)) {
      event.preventDefault();
      addMessage(true);
    }
  }

  onMount(()=>{
    scrollChatBottom();
  });

  async function initializeSession() {
    try {
      //const res = await axios.get( `${apiURL}/api/login`, { withCredentials: true } );
      //console.log(res);
      const resfetch = await fetch( `${apiURL}/api/login`, { credentials: 'include' } );

      console.log(resfetch);
    } catch(err) {

    };
  };

  async function queryLLM(message: string): void {
    if (session.id === ''){
      await initializeSession();
    };
    await new Promise((res)=>{
      setTimeout(res, 5*1000);
    });
  }

</script>

<!-- Chat -->
<section class="card">
<div class="chat w-full h-full grid grid-cols-1 lg:grid-cols-[30%_1fr]">
  <div class="hidden lg:grid grid-rows-[auto_1fr_auto] border-r border-surface-500/30">
    <header class="border-b border-surface-500/30 p-4">
      <button type="button" class="btn variant-filled" on:click={resetChat}>Reset Chat</button>
		</header>
  </div>
  <div class="grid grid-row-[1fr_auto]">
    <section bind:this={elemChat} class="max-h-[500px] p-4 overflow-y-auto space-y-4">
      {#each messageFeed as bubble}
        {#if bubble.name === "Human" }
				  <div class="grid grid-cols-[1fr_auto] gap-2">
				  	<div class="card p-4 variant-soft rounded-tl-none space-y-2">
				  		<header class="flex justify-between items-center">
				  			<p class="font-bold">{bubble.name}</p>
				  		</header>
				  		<p>{bubble.message}</p>
				  	</div>
				  </div>       
        {:else}
				  <div class="grid grid-cols-[1fr_auto] gap-2">
				  	<div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
				  		<header class="flex justify-between items-center">
				  			<p class="font-bold">{bubble.name}</p>
				  		</header>
				  		<p>{bubble.message}</p>
				  	</div>
				  </div>      
        {/if}
      {/each}
    </section>
    <!-- Prompt -->
		<section class="border-t border-surface-500/30 p-4">
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
				<button class="input-group-shim">+</button>
        {#if waiting}
				  <textarea
				  	bind:value={currentMessage}
				  	class="bg-transparent border-0 ring-0"
				  	name="prompt"
				  	id="prompt"
				  	placeholder="Wait for response..."
				  	rows="1"
				  	on:keydown={onPromptKeydown}
            disabled
				  />
        {:else}
 				  <textarea
				  	bind:value={currentMessage}
				  	class="bg-transparent border-0 ring-0"
				  	name="prompt"
				  	id="prompt"
				  	placeholder="Write a prompt..."
				  	rows="1"
				  	on:keydown={onPromptKeydown}
				  />
        {/if}
				<button class={currentMessage ? 'variant-filled-primary' : 'input-group-shim'} on:click={addMessage} disabled='{waiting}'>
					<i class="fa-solid fa-paper-plane">
            {#if waiting}
            Waiting..
            {:else}
            Send
            {/if}
          </i>
				</button>
			</div>
		</section>
  </div>
</div>
</section>

<div class="space-y-2">
</div>

