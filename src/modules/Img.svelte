<script lang="ts">
	import { onMount } from "svelte";

	export let src!: string;
	export let fallback!: string;
	export let alt!: string;
	export let lazy: boolean = true;

	let el: HTMLImageElement;

	function loadImage() {
		const img = new Image();
		img.onload = () => {
			el.src = src;
		};
		img.src = src;
	}

	function loadImageOnViewport() {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					loadImage();
					observer.disconnect();
				}
			});
		});
		observer.observe(el);
	}

	onMount(() => {
		if (!lazy || !window.IntersectionObserver) {
			loadImage();
		} else {
			loadImageOnViewport();
		}
	});
</script>

<img
	{...$$restProps}
	bind:this={el}
	src={fallback}
	{alt}
	data-url={src}
	loading="lazy"
/>
