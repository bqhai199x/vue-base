<template>
  <main class="tw-h-screen tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-[#1A2238]">
	<h1 class="tw-text-9xl tw-font-extrabold tw-text-white tw-tracking-widest">404</h1>
	<div class="tw-bg-[#FF6A3D] tw-px-2 tw-text-sm tw-rounded tw-rotate-12 tw-absolute">
		Page Not Found
	</div>
	<button class="tw-mt-5">
      <a class="tw-relative tw-inline-block tw-text-sm tw-font-medium tw-text-[#FF6A3D] tw-group active:tw-text-orange-500 focus:tw-outline-none focus:tw-ring">
        <span class="tw-absolute tw-inset-0 tw-transition-transform tw-translate-x-0.5 tw-translate-y-0.5 tw-bg-[#FF6A3D] group-hover:tw-translate-y-0 group-hover:tw-translate-x-0"></span>
        <span class="tw-relative tw-block tw-px-8 tw-py-3 tw-bg-[#1A2238] tw-border tw-border-current">
          <router-link to="/">Go Home</router-link>
        </span>
      </a>
    </button>
</main>
</template>