<script lang="ts">
	export let id!: string;
	export let open!: boolean;
	export let title!: string;

	function toggle() {
		open = !open
	}

</script>

<div tabIndex="0" class="collapse collapse-arrow rounded-box" on:click={ toggle } on:keypress={ toggle }>
  <input type="checkbox" class="peer" id={ id } bind:checked={ open }  />
  <div class="collapse-title text-xl font-medium">
    { title }
  </div>
  <div class="collapse-content">
		<slot></slot>
  </div>
</div>
