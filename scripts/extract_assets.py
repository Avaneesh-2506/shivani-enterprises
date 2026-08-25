import os
from PIL import Image

workspace = r"D:\imp\Shivani Mam"
public_dir = os.path.join(workspace, "public", "assets", "images")
led_dir = os.path.join(public_dir, "led")
sriiva_dir = os.path.join(public_dir, "sriiva")
brand_dir = os.path.join(public_dir, "brand")

os.makedirs(led_dir, exist_ok=True)
os.makedirs(sriiva_dir, exist_ok=True)
os.makedirs(brand_dir, exist_ok=True)

img1_path = r"C:\Users\avane\.gemini\antigravity\brain\f496b26e-1474-453e-a355-84a7a9cf8048\.user_uploaded\media_1787497736921.jpg"
img2_path = r"C:\Users\avane\.gemini\antigravity\brain\f496b26e-1474-453e-a355-84a7a9cf8048\.user_uploaded\media_1787497736935.jpg"

im1 = Image.open(img1_path) # 682 x 1024
im2 = Image.open(img2_path) # 1024 x 723

im1.save(os.path.join(brand_dir, "flyer-vertical.jpg"), quality=95)
im2.save(os.path.join(brand_dir, "flyer-horizontal.jpg"), quality=95)

# Crops from Image 1 (682 x 1024)
# Sonshiv Logo: top left (30, 20, 280, 120)
sonshiv_logo = im1.crop((30, 18, 280, 120))
sonshiv_logo.save(os.path.join(brand_dir, "sonshiv-logo.png"))

# Hero streetlight & solar graphic
hero_light = im1.crop((420, 230, 680, 570))
hero_light.save(os.path.join(brand_dir, "hero-solar-light.png"))

# Hero cityscape top right
cityscape = im1.crop((480, 0, 682, 300))
cityscape.save(os.path.join(brand_dir, "cityscape.png"))

# Products in Image 1 (Row 1: y approx 570-695; Row 2: y approx 705-830)
im1.crop((25, 570, 140, 695)).save(os.path.join(led_dir, "led-bulb-flyer.png"))
im1.crop((145, 570, 268, 695)).save(os.path.join(led_dir, "street-lights-flyer.png"))
im1.crop((275, 570, 400, 695)).save(os.path.join(led_dir, "designer-street-pols-flyer.png"))
im1.crop((405, 570, 530, 695)).save(os.path.join(led_dir, "rope-lights-flyer.png"))
im1.crop((535, 570, 658, 695)).save(os.path.join(led_dir, "strip-lights-flyer.png"))

# Row 2
im1.crop((25, 705, 128, 830)).save(os.path.join(led_dir, "bollard-lights-flyer.png"))
im1.crop((135, 705, 238, 830)).save(os.path.join(led_dir, "flood-lights-flyer.png"))
im1.crop((245, 705, 348, 830)).save(os.path.join(led_dir, "designer-fancy-lights-flyer.png"))
im1.crop((350, 705, 450, 830)).save(os.path.join(led_dir, "solar-street-lights-flyer.png"))
im1.crop((460, 705, 560, 830)).save(os.path.join(led_dir, "solar-panel-flyer.png"))
im1.crop((565, 705, 660, 830)).save(os.path.join(led_dir, "cctv-camera-flyer.png"))

# Crops from Image 2 (1024 x 723)
sriiva_logo = im2.crop((30, 615, 330, 715))
sriiva_logo.save(os.path.join(brand_dir, "sriiva-logo.png"))

# LED Cards in Image 2:
# Row 1 (y: 165 to 325):
im2.crop((405, 165, 518, 328)).save(os.path.join(led_dir, "flood-lights-card.png"))
im2.crop((520, 165, 633, 328)).save(os.path.join(led_dir, "street-light-card.png"))
im2.crop((635, 165, 748, 328)).save(os.path.join(led_dir, "high-bay-light-card.png"))
im2.crop((750, 165, 863, 328)).save(os.path.join(led_dir, "panel-light-card.png"))
im2.crop((865, 165, 978, 328)).save(os.path.join(led_dir, "led-bulbs-card.png"))

# Row 2 (y: 335 to 498):
im2.crop((405, 335, 518, 498)).save(os.path.join(led_dir, "garden-light-card.png"))
im2.crop((520, 335, 633, 498)).save(os.path.join(led_dir, "cob-light-card.png"))
im2.crop((635, 335, 748, 498)).save(os.path.join(led_dir, "wall-light-card.png"))
im2.crop((750, 335, 863, 498)).save(os.path.join(led_dir, "rope-light-card.png"))
im2.crop((865, 335, 978, 498)).save(os.path.join(led_dir, "cctv-camera-card.png"))

# Sriiva Product Line (9 products in horizontal row, y: 625 to 695)
# In Image 2 (1024x723):
# Row y is around 460-630 (let's check exact bottle coordinates)
# Height is 723!
# Let's inspect where the bottles are located in 1024x723.
w, h = im2.size
# Let's crop bottles row: y around 440 to 650
bottles_row = im2.crop((340, 440, 995, 650))
bottles_row.save(os.path.join(sriiva_dir, "sriiva-all-products-lineup.png"))

# Individual bottles:
# 1. Toilet Cleaner
im2.crop((345, 445, 422, 645)).save(os.path.join(sriiva_dir, "toilet-cleaner.png"))
# 2. Bathroom Cleaner
im2.crop((420, 445, 490, 645)).save(os.path.join(sriiva_dir, "bathroom-cleaner.png"))
# 3. Floor Cleaner
im2.crop((488, 445, 552, 645)).save(os.path.join(sriiva_dir, "floor-cleaner.png"))
# 4. Phenyl
im2.crop((550, 445, 622, 645)).save(os.path.join(sriiva_dir, "phenyl.png"))
# 5. Hand Wash
im2.crop((620, 445, 706, 645)).save(os.path.join(sriiva_dir, "hand-wash.png"))
# 6. Dish Wash
im2.crop((706, 445, 776, 645)).save(os.path.join(sriiva_dir, "dish-wash.png"))
# 7. Dish Bar
im2.crop((766, 545, 852, 645)).save(os.path.join(sriiva_dir, "dish-bar.png"))
# 8. Room Freshener
im2.crop((852, 455, 915, 645)).save(os.path.join(sriiva_dir, "room-freshener.png"))
# 9. Multipurpose Spray
im2.crop((912, 445, 988, 645)).save(os.path.join(sriiva_dir, "multipurpose-spray.png"))

print("Script generated successfully!")
