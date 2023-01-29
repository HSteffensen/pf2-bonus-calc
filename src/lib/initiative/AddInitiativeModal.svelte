<script lang="ts" context="module">
	export type CharacterAdd = {};
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	const informClose = () => {
		dispatch('close');
	};

	const informNewCharacter = () => {
		dispatch('newcharacter', character);
	};

	let character: CharacterAdd = {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog open on:click={informClose}>
	<article on:click|stopPropagation>
		<header>Add to Initiative</header>
		content
		<footer>
			<a href="#cancel" role="button" class="secondary" on:click={informClose}> Cancel </a>
			<a href="#confirm" role="button" on:click={informNewCharacter}> Confirm </a>
		</footer>
	</article>
</dialog>
