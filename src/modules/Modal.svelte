<script lang="ts">
	export let id!: string;
	export let open!: boolean;

	function toggle() {
		open = !open
	}

</script>

<input type="checkbox" id={ id } class="modal-toggle" bind:checked={ open } />
<div class="modal z-modal p-4" on:click={ toggle } on:keypress={ toggle } >
  <div class="modal-box relative bg-neutral" on:click|stopPropagation on:keypress|stopPropagation >
		<button class="btn btn-active btn-ghost btn-circle absolute right-2 top-2" on:click={ toggle } on:keypress={ toggle } >
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
		</button>
		<slot></slot>
  </div>
</div>

<style lang="scss">
	.modal-box {
		width: auto;
		height: auto;
		max-width: none;
		max-height: none;
	}
</style>
