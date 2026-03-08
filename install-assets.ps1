# Скрипт для копирования ВСЕХ картинок в папку assets
# Запустите: правая кнопка мыши -> "Выполнить с помощью PowerShell"

$brain = "C:\Users\Warlock\.gemini\antigravity\brain\57c518dc-2939-41ef-a01d-a4171139ff46"
$assets = "$PSScriptRoot\assets"

New-Item -ItemType Directory -Force -Path $assets | Out-Null

# Основные фото
Copy-Item "$brain\hero_main_photo_1772971748885.png"       "$assets\hero-main.jpg"      -Force
Copy-Item "$brain\hero_secondary_photo_1772971764960.png"  "$assets\hero-secondary.jpg" -Force
Copy-Item "$brain\dresscode_image_1772971792658.png"       "$assets\dresscode.png"       -Force

# Новые декоративные элементы
Copy-Item "$brain\vine_divider_1772978758567.png"          "$assets\flourish-1.png"     -Force
Copy-Item "$brain\flourish_bottom_1772971805937.png"       "$assets\flourish-2.png"     -Force
Copy-Item "$brain\dresscode_minimal_sketch_1772979155107.png"  "$assets\dresscode-main.png" -Force
Copy-Item "$brain\small_vine_flourish_1772978789001.png"   "$assets\small-vine.png"     -Force

Write-Host "✅ Все картинки скопированы в папку assets!" -ForegroundColor Green
