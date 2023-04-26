# Overflow

什麼是overflow，其實就是存的值超過了儲存的範圍。

```java
int a = 2000000000;//這裏是20億(2後面９個０）
int b = 2000000000;
int overflow = a + b;  //正常應該是４０億
System.out.println("overflow = " + overflow);
//執行結果如下：
overflow = -294967296
```

結果是一個負值，因為加起來其實是40億，但已經超過了int儲存的範圍 $\pm$21億，導致加相後的位元溢出至正負號位而發生的錯誤。這種錯誤很危險，因為在執行過程中並不會有任何錯誤訊息的提示。

> 想像一下如果你有２０億，你再存了２０億去銀行，但櫃台跟你說：先生，你現在欠我們銀行2億多。

那宣告成overflow變數為long不就成了嗎，我們來試試

```java
int a = 2000000000;
int b = 2000000000;
long overflow = a + b;
System.out.println("overflow = " + overflow);
//執行結果如下：依然是負值
overflow = -294967296
```

依然是負值，原因是Java在運算時，有一個規則

若**兩相同型態的變數運算時**(以這個例子來說就是a、b，都是int)，則**運算結果也會為同一型態**(int)，所以兩個**int**相加，最後計算的結果還是int，等號右邊(a+b)算完後就只能是int，放不下40億的值，所以計算的結果就還是會有錯。

所以在計算時只能使用long來處理，比如把a改成long的型態

```java
long a = 2000000000;
int b = 2000000000;
long overflow = a + b;
System.out.println("overflow = " + overflow);
//執行結果如下：
overflow = 40000000000
```

如果把a改成long的型式，這時候 a + b，變成是**long** + **int**，兩邊的型態不同時，會以大的為主(大小順序是double float long int，最少都必須是int)，a變數是long，則b會自動被提升為long做運算，這時候就會變成**long** + **long**，結果就會是一個long的值，就可以放得下40億了。

> [Java Language Spec 5.6.2](https://docs.oracle.com/javase/specs/jls/se11/html/jls-5.html#jls-5.6.2) 中有明確定義了在兩個不同型態的變數計算時的運算規則。

舉例來說

1. double + int 會變成 double + double 最後結果是double
2. float + int 會變成 float + float 最後結果是float
3. byte + short，因為最小計算一定要是int，所以會變成int + int，最後結果是int
