import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products',
    renderMode: RenderMode.Server
  },
  {
    path: 'products/:category',
    renderMode: RenderMode.Server
  },
  {
    path: 'products/:category/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'store',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
