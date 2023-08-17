<script lang="ts">
  import { onMount } from 'svelte/internal';
  import axios from 'axios';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github-dark.css';
  import { storeHighlightJs } from '@skeletonlabs/skeleton';
  
  storeHighlightJs.set(hljs);
  axios.defaults.withCredentials = true;
  
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
  
  let messageFeed: MessageFeed[] = [];
  let textAreaRef: any;

  let currentMessage = '';
  let waiting = false;
  let session: Session = { id: '' };
  let apiURL = 'http://192.168.5.24:8888' //'127.0.0.1:8888'; //'http://127-0-0-1.nip.io:8888';

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
    let name = "Gerty";
    if (is_human) {
      name = "Human";
    };
    const newMessage = {
      name: name,
      message: currentMessage.replaceAll('\n', '<br />'),
      color: "variant-soft-primary"
    };

    messageFeed = [...messageFeed, newMessage];

    currentMessage = '';
    setTimeout(async ()=>{
      waiting = true;
      scrollChatBottom();
      await queryLLM(newMessage.message);
      scrollChatBottom();
      setTimeout(()=>{
        textAreaRef.focus();
      }, 0);
      waiting = false;
    }, 0);
  }

  function onPromptKeydown(event: KeyboardEvent): void {
    if (['Enter'].includes(event.code) && !event.shiftKey) {
      event.preventDefault();
      addMessage(true);
    }
  }

  onMount(()=>{
    scrollChatBottom();
  });

  async function initializeSession(): Promise<void> {
    try {
      const loginRes = await axios.get( `${apiURL}/api/login`);
      const sessRes = await axios.get( `${apiURL}/api/`);
      session.id = sessRes.data;
    } catch(err) {
      alert("Could not initialize Session! Refresh");
    };
  };

  async function queryLLM(message: string): Promise<void> {
    if (session.id === ''){
      await initializeSession();
    };
    
    let assistantMessage: MessageFeed = {
      name: "Gerty",
      message: ".",
      color: "",
    };

    let messageIntervalRun = setInterval(()=>{
      if (assistantMessage.message.length >= 5) {
        assistantMessage.message = ".";
      } else {
        assistantMessage.message = assistantMessage.message + ".";
      };
      messageFeed[messageFeed.length-1] = assistantMessage;
      messageFeed = messageFeed;
    },500);
    
    messageFeed.push(assistantMessage);
    messageFeed = messageFeed;
    const modelQueryRes = await axios.post(`${apiURL}/api/query`,
      { query: message }
    );
    clearInterval(messageIntervalRun);

    assistantMessage.message = parseMessage(modelQueryRes.data);
    messageFeed[messageFeed.length-1] = assistantMessage;
    messageFeed = messageFeed;
  }

  //function extractCodeMessage(str: string): string {
  //  const firstIndex = str.indexOf('```'); //all code blocks begin with ```[language]\n
  //  if (firstIndex < 0){
  //    return str;
  //  };
  //  const languageEndIndex = firstIndex + 3 + str.substring(firstIndex+3).indexOf('\n');
  //  if (languageEndIndex < 0){
  //    return str;
  //  };
  //  const language = str.substring(firstIndex+3, languageEndIndex);
  //  const endIndex = languageEndIndex + 1 + str.substring(languageEndIndex+1).indexOf('```');

  //  const extractedCode = str.substring(languageEndIndex+1, endIndex);
  //  if (extractedCode.length <=0){
  //    return str;
  //  }

  //  let leftStr = str.slice(0, firstIndex);
  //  let afterStr = str.slice(endIndex+3);

  //  if (afterStr.indexOf('```') >= 0){
  //    afterStr = extractCodeMessage(afterStr); 
  //  }

  //  const middle = `<CodeBlock language="${language}" code={\`${extractedCode}\`}></CodeBlock>`;

  //  const rebuiltString = `${leftStr}\n${middle} ${afterStr}`;

  //  return rebuiltString;
  //};

  function parseMessage( str: string): string {
    str = str.replaceAll('\n', '<br />');
    console.log("Parsed string: ", str);
    return str;
  };

</script>

<!-- Chat -->
<section class="card sm:min-w-[500px]">
<div class="chat w-full h-full grid grid-cols-1 sm:grid-cols-[30%_1fr]">
  <div class="hidden sm:grid grid-rows-[auto_1fr_auto] border-r border-surface-500/30">
    <header class="border-b border-surface-500/30 p-4">
      <button type="button" class="btn variant-filled" on:click={resetChat}>Reset Chat</button>
		</header>
  </div>
  <div class="grid grid-row-[1fr_auto]">
    <section bind:this={elemChat} class="min-h-[250px] max-h-[500px] p-4 overflow-y-auto space-y-4">
      {#each messageFeed as bubble}
        {#if bubble.name === "Human" }
				  <div class="grid grid-cols-[1fr_auto] gap-2">
				  	<div class="card p-4 variant-soft rounded-tl-none space-y-2">
				  		<header class="flex justify-between items-center">
				  			<p class="font-bold">{bubble.name}</p>
				  		</header>
				  		<p class="break-words text-left">{@html bubble.message}</p>
				  	</div>
				  </div>       
        {:else}
				  <div class="grid grid-cols-[1fr_auto] gap-2">
				  	<div class="card p-4 rounded-tr-none space-y-2 {bubble.color} break-words">
				  		<header class="flex justify-between items-center">
				  			<p class="font-bold">{bubble.name}</p>
				  		</header>
				  		<p class="break-words text-left">{@html bubble.message}</p>
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
            bind:this={textAreaRef}
				  	class="bg-transparent border-0 ring-0"
				  	name="prompt"
				  	id="prompt"
				  	placeholder="Wait for response..."
				  	rows="2"
				  	on:keydown={()=>{}}
            disabled
				  />
        {:else}
 				  <textarea
				  	bind:value={currentMessage}
            bind:this={textAreaRef}
				  	class="bg-transparent border-0 ring-0"
				  	name="prompt"
				  	id="prompt"
				  	placeholder="Write a prompt..."
				  	rows="2"
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

