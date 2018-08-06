def binary_method(n, threshold):
    left, right = 0, n
    while 1:
        mid = (left + right) /2
        #print(left, right, mid)
        sqr = mid ** 2
        #print (sqr)
        if abs(sqr-n) <= threshold:
            break
        elif sqr >n:
            right = mid
        else:
            left = mid
    return mid

print("%.3f"%binary_method(2, 10e-5))


#f(Xn) - 0 = f'(Xn)*(Xn+1 - Xn)
# Xn+1 = Xn - f(Xn)/f'(Xn)

#f(x) = x**2 - n 一般求 x**2 = n
#f'(x) = 2 * x

#Xn+1 = Xn- (Xn - n / Xn) /2

def newton_method(n, threshold):
    res = n
    while abs(res** 2 -n) > threshold:
        res = (res + n / res) /2
    return res
