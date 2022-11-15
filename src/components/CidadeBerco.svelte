<script lang="ts">
	import type { CB } from "db";
	import Modal from "@/modules/Modal.svelte";
	import Img from "@/modules/Img.svelte";

	export let cbs!: CB[];
	export let verticalFallback!: string;
	export let horizontalFallback!: string;

	let cbList: [CB, boolean][] = cbs.map((cb) => [cb, false]);

	function chooseCallback(rectangular: boolean | undefined) {
		return rectangular ? horizontalFallback : verticalFallback;
	}

	function modalName(index: number): string {
		return `cb-modal-${index}`;
	}

	function openModal(index: number) {
		cbList[index]![1] = true;
	}
</script>

<div class="grid grid-cols-3 lg:grid-cols-4 gap-4 py-7 mb-10">
	{#each cbList as [cb, modalState], index}
		<div class:col-span-2={cb.rectangular} on:click={() => openModal(index)} on:keypress={() => openModal(index)}>
			<Img
				src={cb.imagem}
				alt={cb.nome}
				fallback={chooseCallback(cb.rectangular)}
				class="transition duration-150 ease-out hover:ease-in hover:scale-110 cursor-pointer"
			/>
		</div>
		<Modal id={modalName(index)} bind:open={modalState}>
			<h3 class="text-3xl font-bold">{cb.nome}</h3>
			<p class="py-4 border-t border-zinc-700">{cb.data}</p>
			<div>
				<div class="md:flex md:flex-row-reverse md:justify-start gap-4 max-h-[60vh]">
					<div class="md:min-w-[25%] pb-4">
						<p class="text-xl"><strong>Tunas a concurso:</strong></p>
						{#each cb.tunas_concurso as tuna}
							<ul class="list-inside list-disc">
								<li>{tuna}</li>
							</ul>
						{/each}
						{#if cb.playlist}
							<br />
							<br />
							<p class="text-2xl">
								Assiste <a
									href={cb.playlist}
									class="link-light"
									target="_blank"
									rel="noopener noreferrer"
									><button class="btn btn-outline btn-secondary">aqui!</button
									></a
								>
							</p>
						{/if}
					</div>
					<Img
						class="h-auto max-w-[100%] md:h-auto md:max-w-[75%] md:max-h-[500px]"
						src={cb.imagem}
						alt={cb.nome}
						fallback={chooseCallback(cb.rectangular)}
					/>
				</div>
			</div>
		</Modal>
	{/each}
</div>
