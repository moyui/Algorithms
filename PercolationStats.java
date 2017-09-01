import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;


public class PercolationStats {
private int trys = 0;
private double[] successTrials;
private double mean = 0;
private double stddev = 0;

public PercolationStats(int n, int trials) // perform trials independent experiments on an n-by-n grid
{
      if ((n <= 0) || (trials <= 0)) {
      throw new IllegalArgumentException();
}

trys = trials;
successTrials = new double[trys];

for (int i = 0; i < trials; i++) {
     successTrials[i] = 0;

Percolation percolationTries = new Percolation(n);

while (!percolationTries.percolates()) {
       int a = StdRandom.uniform(1, n + 1);
       int b = StdRandom.uniform(1, n + 1);

while (percolationTries.isOpen(a, b)) {
      a = StdRandom.uniform(1, n + 1);
      b = StdRandom.uniform(1, n + 1);
      }

     percolationTries.open(a, b);
     successTrials[i]++;
     }

    successTrials[i] = successTrials[i] / (n * n);
}
    mean = StdStats.mean(successTrials);
    stddev =  StdStats.stddev(successTrials);
}

public double mean() // sample mean of percolation threshold
{
     return mean;
}

public double stddev() // sample standard deviation of percolation threshold
{
     return stddev;
}

public double confidenceLo() // low  endpoint of 95% confidence interval
{
    return mean - ((1.96 * stddev) / Math.sqrt(trys));
}

public double confidenceHi() // high endpoint of 95% confidence interval
{
    return mean + ((1.96 * stddev) / Math.sqrt(trys));
}

public static void main(String[] args) // test client (described below)
{
     int n = Integer.parseInt(args[0]);
     int trials = Integer.parseInt(args[1]);
     PercolationStats percolationStatsCase = new PercolationStats(n, trials);
     StdOut.printf("%-24s", "mean");
     StdOut.printf("= %.16f\n", percolationStatsCase.mean());
     StdOut.printf("%-24s", "stddev");
     StdOut.printf("= %.18f\n", percolationStatsCase.stddev());
     StdOut.printf("%-24s", "95% confidence interval");
     StdOut.printf("= %.16f, %.16f\n", percolationStatsCase.confidenceLo(),
     percolationStatsCase.confidenceHi());
    }
}