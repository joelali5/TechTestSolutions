using NUnit.Framework;

[TestFixture]
public class SimpleCalculatorTests
{
    private SimpleCalculator calculator;

    [SetUp]
    public void SetUp()
    {
        calculator = new SimpleCalculator();
    }

    [Test]
    public void Add_ShouldReturnCorrectSum()
    {
        int result = calculator.Add(5, 3);
        Assert.AreEqual(8, result);
    }

    [Test]
    public void Subtract_ShouldReturnCorrectDifference()
    {
        int result = calculator.Subtract(10, 4);
        Assert.AreEqual(6, result);
    }
}