<script lang="ts">

    type OptionType = {
		value: string;
		label: string;
	};

	const options: OptionType[] = [
		{ value: "retro", label: "Retro" },
		{ value: "dracula", label: "Dracula" },
		{ value: "acid", label: "Acid" }
	];
</script>

<div class="mb-8">
	<select data-choose-theme class="select select-bordered select-primary w-full max-w-3xl text-xl">
		<option value="" disabled selected>-- Select Status --</option>
        {#each options as theme}
			<option value={theme.value}>{theme.label}</option>
		{/each}
	</select>
</div>