<script lang="ts">
	import type { AfonsinoFilters, Geracao, Afonsinos, Afonsino } from "db";

	import Accordion from "@/modules/Accordion.svelte";
	import AfonsinoComponent from "./Afonsino.svelte";

	export let afonsinoFilters!: AfonsinoFilters;
	export let afonsinos!: Afonsinos;
	export let imageFallback!: string;

	let geracoes: Array<Geracao>;
	$: geracoes = afonsinoFilters.geracoes;

	let toggleState: boolean = false;

	function genTitle(counter: number): string {
		return counter === 0 ? "Fundadores" : `${counter}ª Geração`;
	}

	function getAfonsino(alcunha: string): Afonsino {
		if (alcunha in afonsinos) {
			return afonsinos[alcunha]!;
		}
		throw new Error("No such Alcunha in the Afonsinos list");
	}

	function toggleAll() {
		toggleState = !toggleState;
	}
</script>

<div class="pb-10">
	<div class="px-4 py-4">
		<button
			class="btn btn-outline rounded-none border-white text-white"
			on:click={toggleAll} on:keypress={toggleAll}>Mostrar todos</button
		>
	</div>
	{#each geracoes as geracao, index}
		<Accordion
			id={`geracao-${geracao.geracao}`}
			open={toggleState}
			title="{geracao.geracao} - {genTitle(index)}"
		>
			<div
				class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
				on:click|stopPropagation
				on:keypress|stopPropagation
			>
				{#each geracao.elementos as alcunha}
					<AfonsinoComponent afonsino={getAfonsino(alcunha)} imageFallback={imageFallback} generation={index} />
				{/each}
			</div>
		</Accordion>
	{/each}
</div>
