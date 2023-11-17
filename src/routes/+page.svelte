<script>
    let chars = ["h", "i", "r", "e", "m", "e"];
</script>

<div class="z-0 grid absolute min-w-screen min-h-screen grid-cols-6 w-full">
    {#each Array(6) as _}
        <div class="border-right-1 flex flex-col">
            {#each Array(200) as _}
                {#each chars as char}
                    <p class="text-[1px] leading-[1px]">{char}</p>
                {/each}
            {/each}
        </div>
    {/each}
</div>
<div class="grid grid-cols-6 w-full py-4 md:py-20 z-10">
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
        <h1 class="text-5xl font-extrabold text-neutral-900">
            Charlie as a Service
        </h1>
        <p class="font-bold">UX/UI & design consultant</p>
        <ul>
            <li>— Feedback on your designs</li>
            <li>— Designs done for you</li>
        </ul>
        <!-- <a
            class="underline underline-offset-8 decoration-2"
            target="_blank"
            href="/">Contact me {"->"}</a
        > -->
        <p>hey@charlieasaservice.com</p>
    </div>
</div>

<div class="grid grid-cols-6 w-full py-4 md:py-20 z-10 gap-4 md:gap-0">
    <div class="col-start-2 col-span-5 md:col-start-2 md:col-span-1 flex gap-4">
        <p>¼</p>
        <a
            class="underline underline-offset-8 decoration-2"
            target="_blank"
            href="https://aroreretini.dev">Personal site</a
        >
    </div>

    <div class="col-span-5 col-start-2 md:col-span-1 md:col-start-5 flex gap-4">
        <a href="/">Made in the bath™</a>
        <p>¼</p>
    </div>
</div>
