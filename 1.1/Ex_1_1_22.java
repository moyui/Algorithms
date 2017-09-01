import java.util.Arrays;
import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

public class Ex_1_1_22 {
    public static int rank(int key, int[] a)
    {
        return rank(key, a ,0 , a.length - 1, 0);
    }
    
    public static int rank(int key, int[] a, int lo, int hi, int depth)
    {
        StdOut.printf("%s%-4d%d\n", repeat(4*depth, ' '), lo ,hi);
        if(lo > hi) return -1;
        int mid = lo + (hi - lo) / 2;
        if (key < a[mid]) return rank(key, a, lo, mid - 1, depth + 1);
        else if (key > a[mid]) return rank(key, a, mid + 1, hi, depth + 1);
        else return mid;
    }
    public static String repeat(int n, char c)
    {
        String s = "";
        for (int i = 0; i < n; i++)
        {
            s += c;
        }
        return s;
    }
    
    public static void main(String[] args) 
    {
        int[] array = In.readInts(args[0]);
        Arrays.sort(array);
        
        while (!StdIn.isEmpty()) 
        {
            int key = StdIn.readInt();
            if (rank(key, array) == -1)
                StdOut.println(key);
        }
    }
}