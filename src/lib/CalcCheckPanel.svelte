<script lang="ts">
	import ProficiencyPicker from './ProficiencyPicker.svelte';

	let proficiencyBonus = 0;
</script>

<article>
	<header>Skill Check</header>
	1d20 +
	<div class="grid">
		<article>Ability</article>
		<ProficiencyPicker bind:bonus={proficiencyBonus} />
	</div>
	<footer>
		<button> Roll! </button>
	</footer>
</article>
