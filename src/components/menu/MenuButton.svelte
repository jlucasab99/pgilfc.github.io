<script lang="ts">
	import { toggleDrawer } from '@/store/navigation';

  let value: boolean = false;

	function toggle(_event: Event) {
    toggleDrawer.update(value => !value);
	}
  toggleDrawer.subscribe(toggle => {
		value = toggle;
	});
</script>


<button class="btn btn-ghost btn-sm flex flex-row items-center" on:click|preventDefault={toggle} on:keypress|preventDefault={toggle}>
  <div class="hidden relative sm:inline-grid text-lg">MENU</div>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" bind:checked={value} />

    <!-- hamburger icon -->
    <div class="swap-off"><svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg></div>

    <!-- close icon -->
    <div class="swap-on"><svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg></div>

  </label>
</button>
