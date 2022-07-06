<script lang="ts">
	type OptionType = {
		value: string;
		label: string;
	};

	const options: OptionType[] = [
		{ value: "light", label: "Light" },
		{ value: "retro", label: "Retro" },
		{ value: "dracula", label: "Dracula" },
		{ value: "acid", label: "Acid" }
	];
</script>

<div class="form-control pr-2">
	<select data-choose-theme class="select select-bordered select-ghost select-sm w-full text-base">
		<option value="" disabled selected>Select theme</option>
		{#each options as theme}
			<option value={theme.value}>{theme.label}</option>
		{/each}
	</select>
</div>
