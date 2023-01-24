<script lang="ts">
	import {
		ALL_PROFICIENCIES,
		calculateProficiencyBonus,
		PROFICIENCIES,
		type Proficiency
	} from './proficiency';

	let proficiency: Proficiency = PROFICIENCIES.Untrained;
	let level = 1;

	$: proficiencyBonus = calculateProficiencyBonus(level, proficiency);
	$: assuranceAvailable = proficiency != PROFICIENCIES.Untrained;
	let assurance = false;
</script>

<article>
	<header>Skill Check</header>
	1d20 +
	<div class="grid">
		<article>
			<header>Ability</header>
			<label>
				<input type="checkbox" disabled={!assuranceAvailable} bind:checked={assurance} />
				Assurance
			</label>
		</article>

		<article>
			<header>
				Proficiency: {proficiencyBonus}
			</header>
			<div class="grid">
				<label>
					Level: {level}
					<input type="number" min="1" max="20" bind:value={level} />
				</label>
				<label>
					Proficiency: {proficiency}
					<select bind:value={proficiency} required>
						{#each ALL_PROFICIENCIES as p}
							<option value={p} selected>{p}</option>
						{/each}
					</select>
				</label>
			</div>
		</article>
	</div>
	{#each ['Circumstance', 'Item', 'Status'] as type}
		<div class="grid">
			<article>{type} Bonus</article>
			<article>{type} Penalty</article>
		</div>
	{/each}
	<footer>
		{#if assuranceAvailable && assurance}
			Assurance: {10 + proficiencyBonus}
		{/if}
		<button> Roll! </button>
	</footer>
</article>
