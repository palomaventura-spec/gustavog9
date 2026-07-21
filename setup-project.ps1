$folders = @(
    "components/layout",
    "components/shared",
    "components/ui",
    "sections",
    "data",
    "types",
    "assets/images",
    "assets/icons",
    "public/videos",
    "public/images",
    "public/pdf"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

$files = @(
    "data/player.ts",
    "data/translations.ts",
    "types/player.ts",
    "sections/Hero.tsx",
    "sections/PlayerInformation.tsx",
    "sections/Introduction.tsx",
    "sections/Timeline.tsx",
    "sections/Statistics.tsx",
    "sections/Seasons.tsx",
    "sections/Achievements.tsx",
    "sections/Botafogo.tsx",
    "sections/PlayingStyle.tsx",
    "sections/FeaturedVideo.tsx",
    "sections/Gallery.tsx",
    "sections/AudiovisualArchive.tsx",
    "sections/Instagram.tsx",
    "sections/Contact.tsx",
    "components/layout/Navbar.tsx",
    "components/layout/Footer.tsx",
    "components/layout/LanguageSwitcher.tsx",
    "components/shared/SectionTitle.tsx"
)

foreach ($file in $files) {
    New-Item -ItemType File -Force -Path $file | Out-Null
}

Write-Host ""
Write-Host "✅ Estrutura criada com sucesso!" -ForegroundColor Green