using System;

public class SimpleCalculator : ISimpleCalculator
{
    public int Add(int start, int amount) => start + amount;

    public int Subtract(int start, int amount) => start - amount;
}