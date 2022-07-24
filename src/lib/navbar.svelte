<script lang="ts">
	import ThemeSelect from "$lib/theme-select.svelte";
</script>

<div class="navbar bg-base-300">
	<div class="dropdown">
		<label tabindex="0" class="btn btn-ghost btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16" /></svg>
		</label>
		<ul
			tabindex="0"
			class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
			<li><a class="focus:bg-base-300" href="/">Homepage</a></li>
			<li><a href="/">Portfolio</a></li>
			<li><a href="/">About</a></li>
		</ul>
	</div>
	<div class="flex-1">
		<a href="/" class="home-title btn btn-ghost normal-case text-xl">Inspirational Quote</a>
	</div>
	<div class="flex-none gap-2">
		<ThemeSelect />
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="https://placeimg.com/80/80/people" alt="Profile_picture" />
				</div>
			</label>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
				<li>
					<a class="justify-between" href="/">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a href="/">Settings</a></li>
				<li><a href="/">Logout</a></li>
			</ul>
		</div>
	</div>
</div>

<style>
	.home-title {
		color: hsl(var(--pf));
		font-family: "Great Vibes", cursive;
		font-size: 35px;
	}
</style>