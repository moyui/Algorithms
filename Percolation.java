import edu.princeton.cs.algs4.WeightedQuickUnionUF;


public class Percolation {
private WeightedQuickUnionUF firstUnionFind;
private WeightedQuickUnionUF secondUnionFind;
private int row = 0;
private boolean[][] site;

public Percolation(int n) // create n-by-n grid, with all sites blocked
{
    if (n <= 0) {
    throw new IllegalArgumentException();
}

    firstUnionFind = new WeightedQuickUnionUF((n * n) + 2);
    secondUnionFind = new WeightedQuickUnionUF((n * n) + 1);
    row = n;
    site = new boolean[n][n];
}

public void open(int i, int j) // open site (row i, column j) if it is not open already
{
    if ((i < 1) || (i > row) || (j < 1) || (j > row)) {
    throw new IndexOutOfBoundsException();
}
site[i - 1][j - 1] = true;
int self = (((i - 1) * row) + j) - 1;
int up = self - row;
int down = self + row;
int left = self - 1;
int right = self + 1;
 
if (i == 1) {
    firstUnionFind.union(row * row, self);
    secondUnionFind.union(row * row, self);
}
if (i == row) {
    firstUnionFind.union(row * row+1, self);
}

if ((i != 1) && isOpen(i - 1, j)) {
     firstUnionFind.union(up, self);
     secondUnionFind.union(up, self);
}

if ((i != row) && isOpen(i + 1, j)) {
     firstUnionFind.union(down, self);
     secondUnionFind.union(down, self);
}
 
     if ((j != 1) && isOpen(i, j - 1)) {
     firstUnionFind.union(left, self);
     secondUnionFind.union(left, self);
}

     if ((j != row) && isOpen(i, j + 1)) {
     firstUnionFind.union(right, self);
     secondUnionFind.union(right, self);
     }
}
 
public boolean isOpen(int i, int j) // is site (row i, column j) open?
{
    if ((i < 1) || (i > row) || (j < 1) || (j > row)) {
    throw new IndexOutOfBoundsException();
}
    return site[i - 1][j - 1];
}

public boolean isFull(int i, int j) // is site (row i, column j) full?
{
    if ((i < 1) || (i > row) || (j < 1) || (j > row)) {
    throw new IndexOutOfBoundsException();
}
    int self = (((i - 1) * row) + j) - 1;
    return secondUnionFind.connected(row * row, self);
}

public boolean percolates() // does the system percolate?
{
    return firstUnionFind.connected(row * row + 1, row * row);
}

