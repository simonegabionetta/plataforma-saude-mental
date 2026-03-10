App.tsx
└── rotas (Switch/Route)
    ├── /login → página Login.tsx
    ├── / → página Home.tsx
    └── /patients → página PatientsPage.tsx

Cada página
└── usa componentes
    ├── Card
    ├── Button
    ├── Input
    └── Label

App.tsx         → define as rotas
  └── Páginas   → cada URL tem uma página (src/pages/)
        └── Componentes → cada página usa peças visuais (src/components/)

        Resumindo:

App.tsx → mapa de rotas
src/pages/ → páginas completas
src/components/ → peças reutilizáveis