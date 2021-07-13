<template>
    <div>
        <PageHeader/>
        <Nuxt/>
        <PageFooter/>
    </div>
</template>

<script>
import PageFooter from '@/components/PageFooter';
import PageHeader from '@/components/PageHeader';

export default {
    components: {
        PageHeader,
        PageFooter,
    },
}
</script>

<style>
</style>
