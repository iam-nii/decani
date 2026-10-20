Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$srcServices = Join-Path $root "src\assets\images\services"
$outServices = Join-Path $root "src\assets\images\opt"
$outPublic = Join-Path $root "public"
New-Item -ItemType Directory -Force -Path $outServices | Out-Null

function Save-Jpeg {
    param($bitmap, $path, $quality)
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)
    $bitmap.Save($path, $codec, $params)
}

function Resize-Image {
    param($source, $dest, $maxWidth, $maxHeight, $quality)
    $img = [System.Drawing.Image]::FromFile($source)
    $ratio = [Math]::Min($maxWidth / $img.Width, $maxHeight / $img.Height)
    if ($ratio -gt 1) { $ratio = 1 }
    $w = [int][Math]::Round($img.Width * $ratio)
    $h = [int][Math]::Round($img.Height * $ratio)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($img, 0, 0, $w, $h)
    $g.Dispose()
    Save-Jpeg $bmp $dest $quality
    $bmp.Dispose()
    $img.Dispose()
}

function Crop-Resize {
    param($source, $dest, $targetW, $targetH, $quality, $focusY = 0.5)
    $img = [System.Drawing.Image]::FromFile($source)
    $targetRatio = $targetW / $targetH
    $srcRatio = $img.Width / $img.Height
    if ($srcRatio -gt $targetRatio) {
        $cropH = $img.Height
        $cropW = [int][Math]::Round($img.Height * $targetRatio)
        $cropX = [int][Math]::Round(($img.Width - $cropW) / 2)
        $cropY = 0
    } else {
        $cropW = $img.Width
        $cropH = [int][Math]::Round($img.Width / $targetRatio)
        $cropX = 0
        $cropY = [int][Math]::Round(($img.Height - $cropH) * $focusY)
    }
    $bmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)), (New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)), [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    Save-Jpeg $bmp $dest $quality
    $bmp.Dispose()
    $img.Dispose()
}

$services = @("branding", "design", "development", "marketing", "ui")
foreach ($s in $services) {
    $source = Join-Path $srcServices "$s.jpg"
    Resize-Image $source (Join-Path $outServices "$s-1600.jpg") 1600 1600 80
    Resize-Image $source (Join-Path $outServices "$s-800.jpg") 800 800 78
    Write-Output "service $s done"
}

# Hero: wide crop for desktop, tall crop for phones
Crop-Resize (Join-Path $root "src\assets\images\source\hero-bg.jpg") (Join-Path $outPublic "hero-wide.jpg") 1920 1100 78 0.45
Crop-Resize (Join-Path $root "src\assets\images\source\hero-bg.jpg") (Join-Path $outPublic "hero-tall.jpg") 900 1400 78 0.45
Write-Output "hero done"

# Grain tile
$size = 160
$grain = New-Object System.Drawing.Bitmap($size, $size)
$rand = New-Object System.Random(7)
for ($x = 0; $x -lt $size; $x++) {
    for ($y = 0; $y -lt $size; $y++) {
        $v = $rand.Next(90, 190)
        $grain.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $v, $v, $v))
    }
}
$grain.Save((Join-Path $outPublic "grain.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$grain.Dispose()
Write-Output "grain done"
