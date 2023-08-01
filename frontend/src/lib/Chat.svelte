<script lang="ts">
  async function resetChat(){
    console.log("Resetting chat!");
  };


</script>

<!-- Chat -->
<section class="card">
<div class="chat w-full h-full grid grid-cols-1 lg:grid-cols-[30%_1fr]">

</div>
</section>
<div class="flex justify-center space-x-2">
  <button type="button" class="btn variant-filled" on:click={resetChat}>Reset Chat</button>
</div>
<div class="space-y-2">
</div>

