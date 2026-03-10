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



DashboardLayout         → estrutura fixa
└── Header              → sempre visível
└── Sidebar             → sempre visível
└── {children}          → conteúdo que muda
    ├── Home            → página inicial
    ├── PatientsPage    → página de pacientes
    └── AgendaPage      → página de agenda

    // No App.tsx você vai usar assim:
<DashboardLayout>
  <Home />           // ← isso é o children
</DashboardLayout>

// Ou assim:
<DashboardLayout>
  <PatientsPage />   // ← isso é o children
</DashboardLayout>


// /patients → mostra DashboardLayout com PatientsPage dentro
<Route path="/patients">
  <DashboardLayout>
    <PatientsPage />
  </DashboardLayout>
</Route>


header → fixo, sempre igual
aside  → fixo, sempre igual
main   → {children} muda conforme a página


/ login → sem DashboardLayout
/       → com DashboardLayout
/patients → com DashboardLayout
/agenda   → com DashboardLayout