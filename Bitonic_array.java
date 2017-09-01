public class Bitonic {
    private int[] bArray;
    private int size;

    public Bitonic(final int[] arr) {
        size = arr.length;
        bArray = new int[size];
        for (int i = 0; i < size; i++) {
            bArray[i] = arr[i];
        }
    }

    public boolean search(int low, int hi, int key) {
        int mid = low + (hi - low) / 2;
        if (bArray[mid] == key) {
            return true;
        }
        if (mid == 0) {
            return search(mid + 1, hi, key);
        } else if (mid == size - 1) {
            return search(low, mid - 1, key);
        } else {
            if (bArray[mid - 1] < bArray[mid] && bArray[mid] > bArray[mid + 1]) {   // mid
                return bArray[mid] < key ? false :((BinarySearch.indexOf(bArray, low, mid - 1, key) != -1)
                        || (BinarySearch.indexOfReverse(bArray, mid + 1, hi, key) != -1));
            } else if (bArray[mid - 1] < bArray[mid]) {    //left
                return bArray[mid] < key ? search(mid + 1, hi, key) :
                    ((BinarySearch.indexOf(bArray, low, mid - 1, key) != -1) || search(mid + 1, hi, key));
            } else {    //right
                return bArray[mid] < key ? search(low, mid - 1, key) :
                    ((BinarySearch.indexOf(bArray, mid + 1, hi, key) != -1) || search(low, mid - 1, key));
            }
        } 
    }