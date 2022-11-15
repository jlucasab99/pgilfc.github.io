<script lang="ts">
	import { toggleDrawer } from "@/store/navigation";
	import Background from "@/components/Background.svelte";
	import { onMount } from "svelte";
	import type { Navigation as NavigationType } from "db";

	export let navigation: NavigationType[];

	let value: boolean = false;

	function toggle(_event: Event) {
		toggleDrawer.update((value) => !value);
	}
	toggleDrawer.subscribe((toggle) => {
		value = toggle;
	});

	let currentUrl: string = "";
	onMount(() => (currentUrl = window.location.pathname));
</script>

<input
	type="checkbox"
	id="menu-modal"
	class="modal-toggle"
	on:change={toggle}
	bind:checked={value}
/>
<label for="menu-modal" class="modal">
	<div class="overflow-hidden md:absolute md:right-0 md:w-72">
		<Background />
		<div
			class="absolute z-navbar flex flex-row left-0 right-0 top-0 w-full md:w-auto bg-black/30"
		>
			<div class="pl-[86px] md:pl-0">
				<div class="bg-white h-screen w-10" />
			</div>
			<div class="w-full mx-7 mt-28 relative">
				<div class="absolute md:relative grid grid-rows-1 ">
					{#each navigation as item}
						<a href={item.link}>
							<button
								type="button"
								class="btn btn-link text-white"
								class:btn-active={currentUrl === item.link}
							>
								{item.name}
							</button>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</label>
