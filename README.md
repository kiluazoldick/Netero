# ⚡ Netero - Boilerplate Provider

**Netero** est une plateforme qui fournit des boilerplates Next.js prêts à l'emploi pour accélérer vos projets. Paiement unique, templates premium, et CLI simple.

## ✨ Fonctionnalités

- 🔐 **Authentification** - Email, Google, GitHub avec Supabase
- 🎨 **Design moderne** - Thème dark/light avec accent or (#FFD700)
- 📦 **Templates payants** - Accès unique à vie pour débloquer tous les templates
- 🛠️ **CLI intégrée** - `npx netero download <template>` 
- 🚀 **Performant** - Next.js 14 avec App Router et Turbopack

## 🛠️ Stack Technique

| Technologie | Rôle |
|------------|------|
| Next.js 14 | Framework React (App Router) |
| TypeScript | Typage statique |
| Tailwind CSS | Styling utilitaire |
| shadcn/ui | Composants UI |
| Supabase | Auth + Base de données |
| Stripe | Paiements (à venir) |

## 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/kiluazoldick/Netero.git
cd Netero

# Installer les dépendances
npm install

# Remplir les variables avec tes clés Supabase

# Lancer le serveur de développement
npm run dev
```

## 📁 Structure du projet

```
netero-platform/
├── app/
│   ├── (auth)/          # Pages d'authentification
│   │   ├── login/
│   │   ├── register/
│   │   └── callback/
│   ├── (dashboard)/     # Pages privées
│   │   └── dashboard/
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Landing page
├── components/
│   ├── landing/         # Composants de la landing
│   └── layout/          # Header, Footer, ThemeProvider
├── lib/
│   └── supabase/        # Clients Supabase
├── middleware.ts        # Protection des routes
└── public/              # Assets statiques
```

## 🔑 Variables d'environnement

```env
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anon
```

## 🎨 Palette de couleurs

- **Or principal** : `#FFD700`
- **Noir** : `#000000`
- **Blanc** : `#FFFFFF`

## 📦 Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Lance le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

## 🧪 Roadmap

- [x] Authentification (Email, Google, GitHub)
- [x] Dashboard utilisateur
- [x] Thème dark/light
- [ ] Paiement Stripe
- [ ] Templates premium
- [ ] CLI `npx netero`
- [ ] Admin panel

## 🤝 Contribution

1. Fork le projet
2. Crée ta branche (`git checkout -b feature/amazing-feature`)
3. Commit tes changements (`git commit -m 'feat: add amazing feature'`)
4. Push sur la branche (`git push origin feature/amazing-feature`)
5. Ouvre une Pull Request

## 📝 License

MIT - Créé avec ❤️ par [kiluazoldick](https://github.com/kiluazoldick)

## 🔗 Liens

- [GitHub Repository](https://github.com/kiluazoldick/Netero)

---
