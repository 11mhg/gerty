import { c as create_ssr_component, o as onMount, a as add_attribute, i as each, e as escape, v as validate_component } from "../../chunks/index2.js";
import axios from "axios";
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  axios.defaults.withCredentials = true;
  let elemChat;
  let messageFeed = [];
  function scrollChatBottom(behavior) {
    elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
  }
  onMount(() => {
    scrollChatBottom();
  });
  return `
<section class="card sm:min-w-[500px] sm:max-w-[700px]"><div class="chat w-full h-full grid grid-cols-1 sm:grid-cols-[30%_1fr]"><div class="hidden sm:grid grid-rows-[auto_1fr_auto] border-r border-surface-500/30"><header class="border-b border-surface-500/30 p-4"><button type="button" class="btn variant-filled">Reset Chat</button></header></div>
  <div class="grid grid-row-[1fr_auto]"><section class="min-h-[250px] max-h-[500px] p-4 overflow-y-auto space-y-4"${add_attribute("this", elemChat, 0)}>${each(messageFeed, (bubble) => {
    return `${bubble.name === "Human" ? `<div class="grid grid-cols-[1fr_auto] gap-2"><div class="card p-4 variant-soft rounded-tl-none space-y-2"><header class="flex justify-between items-center"><p class="font-bold">${escape(bubble.name)}</p></header>
				  		<p class="break-all text-left">${escape(bubble.message)}</p></div>
				  </div>` : `<div class="grid grid-cols-[1fr_auto] gap-2"><div class="${"card p-4 rounded-tr-none space-y-2 " + escape(bubble.color, true) + " break-words"}"><header class="flex justify-between items-center"><p class="font-bold">${escape(bubble.name)}</p></header>
				  		<p class="break-all text-left">${escape(bubble.message)}</p></div>
				  </div>`}`;
  })}</section>
    
		<section class="border-t border-surface-500/30 p-4"><div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token"><button class="input-group-shim">+</button>
        ${`<textarea class="bg-transparent border-0 ring-0" name="prompt" id="prompt" placeholder="Write a prompt..." rows="1">${escape("")}</textarea>`}
				<button${add_attribute(
    "class",
    "input-group-shim",
    0
  )} ${""}><i class="fa-solid fa-paper-plane">${`Send`}</i></button></div></section></div></div></section>

<div class="space-y-2"></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 768px){}@keyframes svelte-4bh3od-glow{0%{background-color:rgb(var(--color-primary-400) / 0.5)}33%{background-color:rgb(var(--color-secondary-400) / 0.5)}66%{background-color:rgb(var(--color-tertiary-400) / 0.5)}100%{background-color:rgb(var(--color-primary-400) / 0.5)}}@keyframes svelte-4bh3od-pulse{50%{transform:scale(1.5)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container h-full mx-auto flex justify-center items-center"><div class="space-y-10 text-center flex flex-col items-center"><h2 class="h2">Say Hi To Gerty</h2>
		
		
		
    ${validate_component(Chat, "Chat").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
