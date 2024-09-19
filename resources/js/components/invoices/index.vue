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
    <div class="container mx-auto p-11">
        <h1 class=" text-2xl">Invoices</h1>

        <p v-if="loading">Loading...</p>

        <p v-if="error">{{ error }}</p>

        <table v-if="!loading && !error" class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer
                        ID</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subtotal
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="invoice in invoices" :key="invoice.id">
                    <td class="px-6 py-4 whitespace-nowrap">{{ invoice.number }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ invoice.customer_id }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ invoice.date }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ invoice.due_date }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ invoice.reference }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ invoice.sub_total }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ invoice.discount }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ invoice.total }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
