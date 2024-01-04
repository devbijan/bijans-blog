<script>
    export let data
    console.log('ahh',data.response)
</script>

<div style="text-align: center; padding: 40px; font-size:22px; font-weight: 900;">
    Bijan's Blog
</div>

{#each data.response as response}
    <p>{response.title}</p>
    {@html response.body}
{/each}

