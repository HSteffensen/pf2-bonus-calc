<script lang="ts" context="module">
	type Character = {
		id: number;
		name: string;
		initiative: number;
	};
</script>

<script lang="ts">
	let characters: Character[] = [];
	let currentCharacterId = 0;

	function addCharacter() {
		currentCharacterId += 1;
		characters = [...characters, { id: currentCharacterId, name: '', initiative: 0 }];
	}

	function nextTurn() {
		let first = characters[0];
		if (first) {
			characters = [...characters.slice(1), first];
		}
	}
</script>

<main>
	<header>
		Initiative
		<button on:click={nextTurn}>Next Turn</button>
	</header>
	{#each characters as character (character.id)}
		<article>
			<div class="grid">
				<input type="number" bind:value={character.initiative} />
				<input type="text" bind:value={character.name} />
			</div>
		</article>
	{/each}
	<footer>
		<button on:click={addCharacter}>+</button>
	</footer>
</main>
