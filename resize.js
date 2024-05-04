import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const resizeAndConvert = (inputPath, outputPath) => {
    const tempOutputPath = outputPath + '.tmp';  // Temporary output file

    sharp(inputPath)
        .resize(425)  // Resize to width of 425 pixels, height auto-scaled
        .toFormat('webp')  // Convert to WebP format
        .toFile(tempOutputPath)  // Save to a temporary output file
        .then(() => {
            fs.rename(tempOutputPath, outputPath, (err) => {
                if (err) {
                    console.error('Error replacing the original image:', err);
                    return;
                }
                console.log(`Image processing complete and file saved as ${outputPath}`);
            });
        })
        .catch(err => {
            console.error('Error processing image:', err);
            fs.unlink(tempOutputPath, (err) => {  // Clean up temp file in case of error
                if (err) console.error('Error cleaning up temporary file:', err);
            });
        });
}

// Paths for the specific operation
const inputFilePath = './public/images/clients/Park-Bench-Group.jpeg';
const outputFilePath = './public/md-images/clients/Park-Bench-Group.webp';

// Call the function with the specific file paths
resizeAndConvert(inputFilePath, outputFilePath);
