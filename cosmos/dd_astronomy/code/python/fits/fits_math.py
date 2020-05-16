import numpy as np
import time
from astropy.io import fits


def _mean_datasets(fNames):
    n = len(fNames)
    if n <= 0:
        return "Please send a positive number of files"
    a = np.loadtxt(fNames[0], delimiter=",")
    for f in fNames[1:]:
        a += np.loadtxt(f, delimiter=",")
    return np.round(a/n, decimals=1)


def median_fits_slow(fNames):
    if len(fNames) <= 0:
        return "Please send a positive number of files"
    median_pixels = fits.open(fNames[0])[0].data
    for i in range(median_pixels.shape[0]):
        for j in range(median_pixels.shape[1]):
            pixels = []
            for f in fNames:
                pixels.append(fits.open(f)[0].data[i][j])
            median_pixels[i][j] = np.median(pixels)
            print("Computed median for index", i, ",", j, "=", 
                    median_pixels[i][j], sep=" ")
    return median_pixels


def median_fits(fNames):
    start = time.time()
    fits_data = []
    for f in fNames:
        hdulist = fits.open(f)
        fits_data.append(hdulist[0].data)
        hdulist.close()
    fits_flipped = np.dstack(fits_data)
    return (np.median(fits_flipped, axis=2), 
            time.time()-start, 
            fits_flipped.nbytes / 1024)


def mean_fits(fNames): 
    n = len(fNames)
    if n <= 0:
        return "Please send a positive number of files"
    a = fits.open(fNames[0])[0].data
    for f in fNames[1:]:
        a += fits.open(f)[0].data
    return a/n

if __name__ == '__main__':
    # print(_mean_datasets(['data1.csv', 'data2.csv', 'data3.csv']))
    # print(mean_fits(['image0.fits', 'image1.fits', 'image2.fits', 'image3.fits',
    #    'image4.fits'])[100, 100])
    result = median_fits(['image0.fits', 'image1.fits', 'image2.fits', 'image3.fits', 
        'image4.fits'])
    print(result[0][100][100], result[1], result[2])
