public class SuccessorDelete {
    private int[] id;
    private int count;
    
    public WeigthQuickUnionUF(int N)
    {
        count = N;
        id = new int[N];
        for(int i = 0; i < N; i++) id[i] = i;
    }
    public int count() 
    {
        return count;
    }
    public boolean connected(int p, int q)
    {
        return find(p) == find(q);
    }
    public int find(int p) 
    {
        while(p != id[p]) p = id[p];
        return p;
    }
    public void union(int p, int q)
    {
        int i = find(p);
        int j = find(q);
        if(i == j) return;
        if(i < j) {id[i] = j;}
        else      {id[j] = i;}
        count--;
    }
    public void delete(int p) {
        int i = find(p);
        int j = id[--p];
        union (i , j);
    }
    
        public static void main(String[] args)
    {
        int n = StdIn.readInt();
        WeigthQuickUnionUF uf = new WeigthQuickUnionUF(n);
        String date;
        while(!StdIn.isEmpty()) 
        {
            int p = StdIn.readInt();
            int q = StdIn.readInt();
            date = StdIn.readString();
            
            uf.union(p, q);
        }
    }
}