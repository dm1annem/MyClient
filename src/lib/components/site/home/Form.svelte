<script>
    import Input from '$lib/components/my/form/Input.svelte'
    let name;
    let foneNumber;
    let input_pkg = {
        type: 'text',
        placeholder: 'Имя',
        label: 'Введите имя',
        class_: 'placeholder-blueGray-600'
    }

</script>

<div>
    <div class="grid">
        <form>
            <input type="text"  placeholder="Имя" bind:value={name}>
            <input type="tel" placeholder="Телефон" bind:value={foneNumber}>
            <button>Оставить заявку</button>
            <Input  {...input_pkg} />

        </form>
    </div>
    
</div>