# Image Thresholding (Threshold = 100)

This file explains how to run the thresholding program in `image_thresholding.py`.

## Requirement Implemented

The script applies the following threshold rule to every pixel in a grayscale image:

- If pixel intensity is less than 100, set it to 0
- If pixel intensity is greater than or equal to 100, set it to 255

It also:

- Displays the final thresholded image
- Prints all pixel intensity values of the resulting image using a 2D nested loop

## Python Script

File: `image_thresholding.py`

Main function:

- `apply_threshold_and_print_pixels(image_path, threshold_value=100)`

## How to Run

1. Install dependencies:

```bash
pip install opencv-python matplotlib
```

2. Put your input image in the same folder as `image_thresholding.py` (or use an absolute path).

3. In `image_thresholding.py`, update:

```python
image_file = "input_image.jpg"
```

4. Run:

```bash
python image_thresholding.py
```

## Output

- A window/plot displaying the thresholded image.
- Console output listing all pixel intensities row by row (values will be only `0` or `255`).
