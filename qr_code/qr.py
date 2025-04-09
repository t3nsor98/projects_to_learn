# Generate a QR Code with Python
import qrcode

# Define the website link
website_link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

# Create a QRCode object with specific settings
qr = qrcode.QRCode(
    version=1,  # Controls the size of the QR Code (1 is the smallest)
    box_size=10,  # Size of each box in the QR code grid
    border=4,  # Thickness of the border (minimum is 4)
)

# Add data to the QR code
qr.add_data(website_link)
qr.make(fit=True)  # Ensures the QR code is sized appropriately

# Generate the QR code image
img = qr.make_image(fill_color="black", back_color="white")

# Save the QR code image to a file
img.save("youtube_qr.png")

print("QR code generated and saved as 'youtube_qr.png'")
