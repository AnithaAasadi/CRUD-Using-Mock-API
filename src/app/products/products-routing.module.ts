import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ProductsComponent } from './products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [{ path: '', component: ViewAllProductsComponent},
{ path: 'create-product', component: CreateProductComponent },
{ path: 'delete-product/:id', component: DeleteProductsComponent },
{ path: 'update-product/:id', component: UpdateProductsComponent },
{ path: 'view-product/:id', component: ViewProductComponent },
{ path: 'view-all-products', component:ViewAllProductsComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
