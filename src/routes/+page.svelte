<script lang="ts">
    import { onMount } from "svelte";
    import { TweenLite, gsap } from "gsap";

    let chars = ["h", "i", "r", "e", "m", "e"];

    let count = 0;
    const tl = gsap.timeline();
    function bath() {
        const bathTL = gsap.timeline();
        const item = gsap.utils.toArray(".bath-item");
        count++;
        if (count == 5) {
            bathTL
                .to(".bath", {
                    duration: 1,
                    y: -60,
                    rotate: 380,
                    scale: 1.5,
                    opacity: 1,
                    yoyo: true,
                    ease: "power4.out",
                })
                .to(".bath", {
                    duration: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 0,
                    delay: 3,
                    yoyo: true,
                    ease: "power4.out",
                });
            count = 0;
        }
    }

    onMount(() => {
        tl.fromTo(
            ".fade-in",
            {
                y: -10,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
            }
        )
            .fromTo(
                ".title",
                {
                    y: -10,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 3,

                    ease: "power4.out",
                }
            )
            .fromTo(
                ".sub-header",
                {
                    y: -10,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 3,
                    ease: "power4.out",
                },
                "-=2.5"
            )
            .fromTo(
                ".li-1",
                {
                    y: -10,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 3,
                    ease: "power4.out",
                },
                "-=2.5"
            )
            .fromTo(
                ".li-2",
                {
                    y: -10,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 3,
                    ease: "power4.out",
                },
                "-=2.5"
            );
    });
</script>

<div class="z-0 grid absolute min-w-screen min-h-screen grid-cols-6 w-full">
    {#each Array(6) as _}
        <div class="border-right-1 flex flex-col">
            {#each Array(256) as _}
                {#each chars as char}
                    <p class="text-[1px] leading-[1px]" aria-hidden="true">
                        {char}
                    </p>
                {/each}
            {/each}
        </div>
    {/each}
</div>
<div class="grid grid-cols-6 w-full py-4 md:py-20 z-10 fade-in opacity-0">
    <div class="col-start-2 col-span-1 flex gap-4">
        <p>¼</p>
        <a
            class="underline underline-offset-8 decoration-2"
            target="_blank"
            href="https://twitter.com/thecoppinger">Twitter</a
        >
    </div>

    <div class="col-span-1 col-start-5 flex gap-4">
        <a
            class="underline underline-offset-8 decoration-2"
            target="_blank"
            href="https://twitch.tv/thecoppinger">Twitch</a
        >
        <p>¼</p>
    </div>
</div>
<div
    class="grid grid-cols-6 w-screen h-full grow items-center justify-center z-10"
>
    <div
        class=" col-start-2 col-span-4 md:col-start-3 md:col-span-2 flex flex-col gap-4 items-start"
    >
        <h1 class="text-5xl font-extrabold text-neutral-900 title opacity-0">
            Charlie as a Service
        </h1>
        <p class="font-bold sub-header opacity-0">UX/UI & design consultant</p>
        <ul>
            <li class="li-1 opacity-0">— Feedback on your designs</li>
            <li class="li-1 opacity-0">— Designs done for you</li>
        </ul>
        <!-- <a
            class="underline underline-offset-8 decoration-2"
            target="_blank"
            href="/">Contact me {"->"}</a
        > -->
        <div class="flex gap-2 items-center justify-center li-2 opacity-0">
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.8667 1.6C13.8155 1.60035 13.7646 1.60807 13.7156 1.62292C13.7012 1.62683 13.687 1.63135 13.6729 1.63646L1.94688 5.36562V5.36771C1.84514 5.40567 1.75742 5.47379 1.69543 5.56295C1.63344 5.65211 1.60015 5.75807 1.60001 5.86667C1.6002 5.95825 1.62397 6.04824 1.66904 6.12796C1.7141 6.20769 1.77894 6.27447 1.8573 6.32187L5.42084 9.14896L12.4656 3.53437L6.85105 10.5792L9.67605 14.1406C9.72338 14.2197 9.79037 14.2851 9.87051 14.3306C9.95066 14.376 10.0412 14.3999 10.1333 14.4C10.2419 14.3999 10.3479 14.3666 10.4371 14.3046C10.5262 14.2426 10.5943 14.1549 10.6323 14.0531H10.6344L14.3667 2.31667C14.3705 2.30601 14.374 2.29525 14.3771 2.28437C14.3919 2.23539 14.3997 2.18452 14.4 2.13333C14.4 1.99188 14.3438 1.85623 14.2438 1.75621C14.1438 1.65619 14.0081 1.6 13.8667 1.6Z"
                    fill="#171717"
                />
            </svg>
            <p class="italic">hey@charlieasaservice.com</p>
        </div>
    </div>
</div>

<div
    class="grid grid-cols-6 w-full py-4 md:py-20 z-10 gap-4 md:gap-0 fade-in opacity-0"
>
    <div class="col-start-2 col-span-5 md:col-start-2 md:col-span-1 flex gap-4">
        <p>¼</p>
        <a
            class="underline underline-offset-8 decoration-2"
            target="_blank"
            href="https://aroreretini.dev">Personal site</a
        >
    </div>

    <div
        class="col-span-5 col-start-2 md:col-span-1 md:col-start-5 flex gap-4 relative"
    >
        <button on:click={bath}>Made in the bath™</button>
        <div class=" absolute -z-10 right-1/4">
            <img
                class=" text-3xl bath w-10 rounded-lg rotate-90 grayscale shadow-xl opacity-0"
                src="/bath.png"
                alt="Charlie in the bath"
            />
        </div>
        <p>¼</p>
    </div>
</div>
