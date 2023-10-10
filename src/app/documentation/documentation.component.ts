import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    // Access route data
    const routeData: any = this.route.snapshot.data;
    
    // Access apidata from route data
    const apidataFromRoute = routeData.apidata;
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      spec: apidataFromRoute , 
      docExpansion: 'none',
      operationsSorter: 'alpha'
    });
  }
}
