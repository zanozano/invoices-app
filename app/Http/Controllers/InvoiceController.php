<?php

namespace App\Http\Controllers;

use App\Models\Invoice;

class InvoiceController extends Controller
{
    public function get_all_invoice()
    {
        $invoices = Invoice::all();

        return response()->json([
            'invoices' => $invoices,
        ], 200);
    }
}
