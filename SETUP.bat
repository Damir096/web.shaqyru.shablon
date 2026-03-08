@echo off
chcp 65001 >nul
echo Копирую картинки в папку assets...

if not exist "assets" mkdir assets

copy /Y "C:\Users\Warlock\.gemini\antigravity\brain\57c518dc-2939-41ef-a01d-a4171139ff46\hero_main_photo_1772971748885.png" "assets\hero-main.jpg"
copy /Y "C:\Users\Warlock\.gemini\antigravity\brain\57c518dc-2939-41ef-a01d-a4171139ff46\hero_secondary_photo_1772971764960.png" "assets\hero-secondary.jpg"
copy /Y "C:\Users\Warlock\.gemini\antigravity\brain\57c518dc-2939-41ef-a01d-a4171139ff46\dresscode_minimal_sketch_1772979155107.png" "assets\dresscode-main.png"
copy /Y "C:\Users\Warlock\.gemini\antigravity\brain\57c518dc-2939-41ef-a01d-a4171139ff46\flourish_bottom_1772971805937.png" "assets\flourish-2.png"

echo.
echo Готово! Все картинки скопированы.
pause
