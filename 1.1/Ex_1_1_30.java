public class Ex_1_1_30 {
    public static void main(String[] args)
    {
        int N =30;
        boolean a[][] = new boolean[N][N];
        for (int i = 0; i < N ; i++)
        {
            for (int j = 0; j < N; j++)
            {
                a[i][j] = judge(i, j);
            }
        }
    }
    
    public static boolean judge(int m, int n)
    {
        if (m < n) {
            int temp;
            temp = n;
            n = m;
            m = temp;
        }
        while ((m%n) != 0)
        {
            int r = m % n;
            m = n;
            n = r;
        }
        return (n == 0);
    }
}