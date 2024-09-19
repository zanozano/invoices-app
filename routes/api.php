<?php

use App\Http\Controllers\InvoiceController;
use Illuminate\Support\Facades\Route;

Route::get('/get_all_invoice', [InvoiceController::class, 'get_all_invoice']);
