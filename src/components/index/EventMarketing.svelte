<script lang="ts">
  import { eventMarketing } from "db";
</script>

{#if eventMarketing.enabled}
<section id="cb-marketing">
  <div class="hero min-h-screen bg-blue-700 bg-opacity-60">
		<div class="hero-content flex-col lg:flex-row">
			<img alt="{eventMarketing.name}" src="{eventMarketing.imagePath}" class="max-w-sm rounded-lg shadow-2xl" />
			<div>
				<h1 class="text-4xl text-gray-200">
					{eventMarketing.date.startDay}
					{#if eventMarketing.date.secondMonth !== ''}
						de {eventMarketing.date.firstMonth} e {eventMarketing.date.endDay} de {eventMarketing.date.secondMonth}
					{:else}
						e {eventMarketing.date.endDay} de {eventMarketing.date.firstMonth}
					{/if}
				</h1>
				<h1 class="text-5xl font-bold text-gray-200">{eventMarketing.name}</h1>
				<p class="text-3xl font-bold text-gray-200">Festival de Tunas Académicas</p>
				<p class="py-6 text-gray-200">{eventMarketing.description}</p>
				{#if eventMarketing.url.tickets !== ''}
					<a href="{eventMarketing.url.tickets}" class="btn btn-light btn-lg text-gray-200" role="button"> Compra já o teu bilhete </a>
				{/if}
				{#if eventMarketing.url.infos !== ''}
					<a href="{eventMarketing.url.infos}" class="btn btn-outline-light btn-lg text-gray-200" role="button"> Mais Informações </a>
				{/if}
			</div>
		</div>
	</div>
</section>
{/if}
