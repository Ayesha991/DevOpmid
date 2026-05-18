import cv2
import matplotlib.pyplot as plt


def apply_threshold_and_print_pixels(image_path: str, threshold_value: int = 100):
    # Load image in grayscale so each pixel has one intensity value (0-255).
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)

    if image is None:
        raise FileNotFoundError(f"Could not read image at: {image_path}")

    rows, cols = image.shape
    thresholded = image.copy()

    # Apply manual thresholding rule.
    for i in range(rows):
        for j in range(cols):
            if thresholded[i, j] < threshold_value:
                thresholded[i, j] = 0
            else:
                thresholded[i, j] = 255

    # Display the final thresholded image.
    plt.figure(figsize=(6, 6))
    plt.imshow(thresholded, cmap="gray", vmin=0, vmax=255)
    plt.title(f"Thresholded Image (threshold = {threshold_value})")
    plt.axis("off")
    plt.show()

    # Print all resulting pixel intensity values using a 2D nested loop.
    print("Pixel intensity values of the thresholded image:")
    for i in range(rows):
        for j in range(cols):
            print(int(thresholded[i, j]), end=" ")
        print()


if __name__ == "__main__":
    # Change this to your image file path.
    image_file = "input_image.jpg"
    apply_threshold_and_print_pixels(image_file, threshold_value=100)
