<script lang="ts">
	import {
		ALL_PROFICIENCIES,
		PROFICIENCIES,
		calculateProficiencyBonus,
		type Proficiency
	} from './proficiency';

	let proficiency: Proficiency = PROFICIENCIES.Untrained;
	let level = 1;

	export let bonus = 0;
	function updateBonus() {
		bonus = calculateProficiencyBonus(level, proficiency);
	}
	updateBonus();
</script>

<article>
	<header>
		Proficiency: {bonus}
	</header>
	<div class="grid">
		<label for="level">
			Level: {level}
			<input
				id="level"
				type="number"
				min="1"
				max="20"
				bind:value={level}
				on:change={() => updateBonus()}
			/>
		</label>
		<label for="proficiency">
			Proficiency: {proficiency}
			<select id="proficiency" bind:value={proficiency} on:change={() => updateBonus()} required>
				{#each ALL_PROFICIENCIES as p}
					<option value={p} selected>{p}</option>
				{/each}
			</select>
		</label>
	</div>
</article>
