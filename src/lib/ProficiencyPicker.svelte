<script lang="ts">
	import { allProficiencies, Proficiency, proficiencyBonus } from './proficiency';

	let proficiency = Proficiency.Untrained;
	let level = 1;

	export let bonus = 0;
	function updateBonus() {
		bonus = proficiencyBonus(level, proficiency);
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
				{#each allProficiencies as p}
					<option value={Proficiency[p]} selected>{p}: {Proficiency[p]}</option>
				{/each}
			</select>
		</label>
	</div>
</article>
