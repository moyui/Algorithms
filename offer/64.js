function Sum_Solution(n)
{
    var ans = n;
    n && (ans += Sum_Solution(n - 1));
    return ans;
}