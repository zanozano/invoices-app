<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

let invoices = ref([]);
let loading = ref(true);
let error = ref(null);

const getInvoices = async () => {
    try {
        loading.value = true;
        error.value = null;
        const response = await axios.get('/api/get_all_invoice');

        invoices.value = response.data.invoices;
    } catch (err) {
        error.value = 'Error fetching invoices: ' + err.message;
        console.error('Error fetching invoices:', err);
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    getInvoices();
});
</script>

<template>
    <div class=" bg-black">
        <h1>Index Component</h1>

        <p v-if="loading">Loading...</p>

        <p v-if="error">{{ error }}</p>

        <ul v-if="!loading && !error">
            <li v-for="invoice in invoices" :key="invoice.id">
                <div>Number: {{ invoice.number }}</div>
                <div>Customer ID: {{ invoice.customer_id }}</div>
                <div>Date: {{ invoice.date }}</div>
                <div>Due Date: {{ invoice.due_date }}</div>
                <div>Reference: {{ invoice.reference }}</div>
                <div>Subtotal: {{ invoice.sub_total }}</div>
                <div>Discount: {{ invoice.discount }}</div>
                <div>Total: {{ invoice.total }}</div>
            </li>
        </ul>
    </div>
</template>
