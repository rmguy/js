# FITS

* Flexible Image Transport System
* HDU: Header Data Unit
* Opening a FITS file (with `fits.open`) returns a list of HDUs
* First HDU in this list is the _primary_, it will have data

```
fits.open('image0.fits').info()

No.    Name         Type      Cards   Dimensions   Format
0    PRIMARY     PrimaryHDU       7   (200, 200)   float64
```

* That shows a 200x200 array of arrays, i.e there are 200 arrays in the list,
  each with 200 entries. 
* Each array is a line on the x starting from the top
```
y  a a
   r r
|  r r
v  a a
   y y
   1 2...
x ->
```

## Median stacking

* Proces data + list pulsar coords
* Shift pulsar to center of cutout
* Take median
* Analyze

### Memory usage

* 600 images
* 1 image = 200 x 200 = 40k pixels
* 1 pixel = 8 bytes 
* total = 192 gb

How to improve the algorithm? 

* Downscale the images to 50 x 50
* Upgrade the algorith: running median
  - bin approx 

* Took a large set of images that can't detect any pulsars
* Line the images up so all undetected pulsars are in the center
* Compute the median to get a detection


## Numpy methods

* np.median: median of all elements
* np.median(nd array, axis=1): [[],[],[]] [[],[],[]] -> [flattened, flattened]
* np.median(nd array, axis=3): [[],[],[]] [[],[],[]] -> [[flattened], [flattened], [flattened] x 2]
* np.median(axis=3) -> error because there are only 2 levels of nesting i.e 2
  dimensions
* np.dstack(nd array) flips the axis
* np.dstack(nd array, axis=2) flattens array on flipped axis
