<script lang="ts">
	import type { Afonsino } from "db";
	import Img from "@/modules/Img.svelte";
	import Modal from "@/modules/Modal.svelte";

	export let afonsino!: Afonsino;
	export let imageFallback!: string;
	export let ensaiador!: string;

	export let generation!: number;

	let modalState: boolean = false;

	function modalName(name: string): string {
		return `afonsino-modal-${name}`;
	}

	function openModal() {
		modalState = true;
	}
</script>

<div class="stats shadow bg-transparent" on:click={openModal} on:keypress={openModal}>
	<div class="stat place-items-center">
		<div class="stat-value">
			<div class="avatar">
				<div class="mask mask-squircle">
					<Img
						src={afonsino.imagem}
						alt={afonsino.alcunha}
						fallback={imageFallback}
						class="mask mask-squircle max-w-full transition duration-150 ease-out hover:ease-in hover:scale-110 cursor-pointer"
					/>
				</div>
			</div>
		</div>
		<div class="stat-title text-white text-ellipsis overflow-hidden">
			{afonsino.alcunha}
			{#if ensaiador == 'atual'}
				<span class="badge">Ensaiador</span>
			{/if}
			{#if ensaiador == 'ex'}
				<span class="badge">Ex-Ensaiador</span>
			{/if}
		</div>
	</div>
</div>
<Modal id={modalName(afonsino.alcunha)} bind:open={modalState}>
	<h3 class="text-3xl font-bold border-b border-zinc-700 mb-2">
		{afonsino.alcunha}
	</h3>
	<div class="flex flex-col-reverse md:flex-row gap-4">
		<Img
			src={afonsino.imagem}
			alt={afonsino.alcunha}
			fallback={imageFallback}
			class="mask mask-squircle max-w-full h-[200px] w-[200px]"
		/>
		<div class="py-3">

			<p>{afonsino.nome}</p>
			{#if generation == 0}
				<p class="text-xs">Membro Fundador</p>
			{:else}
				<p class="text-xs">Pendericalho nº {afonsino.numero}</p>
			{/if}
			<br>
			{#if afonsino.instrumento != null}
				<p><strong>Instrumento:</strong> {afonsino.instrumento}</p>
			{/if}
			{#if generation != 0}
				{#if afonsino.passagem_evento != null}
					<p><strong>Evento de passagem:</strong> {afonsino.passagem_evento}</p>
				{/if}
				{#if afonsino.passagem_local != null}
					<p><strong>Local de passagem:</strong> {afonsino.passagem_local}</p>
				{/if}
				{#if afonsino.passagem_data != null}
					<p><strong>Data de passagem:</strong> {afonsino.passagem_data}</p>
				{/if}
			{/if}
		</div>
	</div>
</Modal>
