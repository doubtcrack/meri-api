import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import * as cloudinarycrud from './../app/documentation/jsondocs/cloudinarycrud.json'
import * as keelnut from './../app/documentation/jsondocs/keelnut.json'
import * as uniconnect from './../app/documentation/jsondocs/uniconnect.json'
import * as nextauth from './../app/documentation/jsondocs/nextauth.json'
import * as unicon from './../app/documentation/jsondocs/unicon.json'


import { DocumentationComponent } from './documentation/documentation.component';

// Define a model for your route data
interface RouteData {
  apidata: any; 
}

// Define your route objects as an array of objects
const routesData = [
  { path: 'cloudinarycrud', apidata: cloudinarycrud },
  { path: 'keelnut', apidata: keelnut },
  { path: 'uniconnect', apidata: uniconnect },
  { path: 'unicon', apidata: unicon },
  { path: 'nextauth', apidata: nextauth },
];

// Function to generate route objects
function generateRoutes(data: { path: string; apidata: any }[]): any[] {
  return data.map(item => ({
    path: item.path,
    component: DocumentationComponent,
    data: { apidata: item.apidata } as RouteData 
  }));
}

// Generate routes using the function
const routes: Routes = [
  { path: '', component: HomeComponent },
  ...generateRoutes(routesData),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
